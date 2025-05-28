import {command_info, commands} from "../../assets/commands";

export const handleHelpCommand = (args: string[]): any => {
	let response = "";

	if (args.length > 0) {
		response = "Too many arguments provided. Please use 'help'";
		return response;
	}

	let info = [];
	for (const [key, value] of Object.entries(command_info)) {
		info.push(`${key}	---	Description: ${value.description}
		Usage: ${value.usage}`);
	}

	response = "Available commands: " + commands.join(", ") + ".\n\n" + info.join("\n\n");
	return response;
};
