import { PermissionFlags, Permissions } from "discord.js";
import { SlashCommandInteraction } from ".";
import Bot from "../Client";
import { genericSlashCommandBuilder, slashCommandArgument } from "../Types";

interface SlashCommandRun {
	(client: Bot, interaction: SlashCommandInteraction, args: slashCommandArgument[]): void;
}

export interface SlashCommand {
	run: SlashCommandRun;
	data: genericSlashCommandBuilder;
	ephermal?: boolean;
	defaultPermissions?: (keyof PermissionFlags)[];
}
