export const en = {
	// CONSOLE
	general: {
		notImplemented: `THIS FEAUTRE IS NOT YET IMPLEMENTED`,
		fatal: `FATAL ERROR OCCURED: {message}`,
	},
	main: {
		starting: "Initializating bot...",
	},
	client: {
		ready: "Client is ready and logged in as {clientTag}",
	},
	managers: {
		event: {
			eventMissingProperties:
				"Event {eventName} has missing properties and couldn't be loaded",
			loadedAll: `Succesfully loaded {eventsCount} events`,
			addedEvent: `Succesfully Loaded "{eventName}" event`,
		},
		command: {
			failedUpdating: `Failed updating commands`,
			updatingCommands: `Updating commands...`,
			clearingCommands: `Clearing commands...`,
			automaticCommandUpdate: `Detected commands change, updating commands...`,
		},
	},
	commands: {
		ping: {
			description: "Description missing",
			succes: "Pong!",
		},
	},
	// DISCORD
} as const;
