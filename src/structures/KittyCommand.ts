import { ApplicationCommandData } from "discord.js";
import { KittyClient } from "client";
import {
	CommandExecute,
	CommandOptions,
	CommandInteraction,
	CommandBuilder,
} from "interfaces";
import { isPromise } from "util/types";
import { RESTPostAPIApplicationCommandsJSONBody } from "discord-api-types";
import { RawCommand } from "typings";

type KittyCommandOptions = {
	builder: CommandBuilder;
	id?: string;
	execute: CommandExecute;
	options: CommandOptions;
};

export class KittyCommand<hasId extends Boolean = false> {
	private _id: hasId extends true ? string : null | string;
	private _name: string;
	private _options: Required<CommandOptions>;
	private _data: RawCommand;
	private _execute: CommandExecute;

	get id() {
		return this._id;
	}

	get name() {
		return this._name;
	}

	get options() {
		return this._options;
	}

	getRESTApplicationCommandBody(): RawCommand {
		return this._data;
	}

	constructor({ builder, id, options, execute }: KittyCommandOptions) {
		this._data = builder.toJSON();
		const { name } = this._data;
		this._name = name;
		// TODO: make default command options changable
		this._options = { ...{ ephemeral: false, inhibitors: [] }, ...options };
		this._execute = execute;

		if (id) {
			this._id = id;
		}
	}

	hasId() {
		return Boolean(this._id);
	}

	setId(newId: string) {
		this._id = newId;
	}

	async execute(client: KittyClient, interaction: CommandInteraction): Promise<boolean> {
		for (const inhibitor of this.options.inhibitors) {
			let result = inhibitor(client, interaction);

			if (isPromise(result)) {
				result = await result;
			}

			if (result === false) {
				return false;
			}
		}

		this._execute(client, interaction);

		return true;
	}
}
