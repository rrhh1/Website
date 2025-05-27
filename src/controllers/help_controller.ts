import {command_info, commands} from "../assets/constants";

export const handleHelpCommand = (args: string[]): any => {
	let response = "";

	if (args.length > 1) {
		response = "Too many arguments provided. Please use 'help' or 'help <command>'.";
		return response;
	}

	if (args.length === 0) {
		response =
			"Available commands: " +
			commands.join(", ") +
			".\nType 'help <command>' for more information.";

		return response;
	}

	if (!commands.includes(args[0])) {
		response = `Unknown command: '${args[0]}'. Type 'help' for a list of available commands.`;
		return response;
	}

	const help_command = args[0];
	response =
		`Help for command '${help_command}':\n` +
		command_info[help_command].description +
		"\n" +
		"Usage: " +
		command_info[help_command].usage;

	return response;
};
