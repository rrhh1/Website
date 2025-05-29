import {chatHistory} from "../../assets/dynamic";
import {introState} from "../../sharedStates/intro.svelte";
import {handleCatCommand} from "./cat_controller";
import {handleCdCommand} from "./cd_controller";
import {handleClearCommand} from "./clear_controller";
import {handleEchoCommand} from "./echo_controller";
import {handleHelpCommand} from "./help_controller";
import {handleLsCommand} from "./ls_controller";

export const handleCommand = (prompt: string, currentDirectory: Record<string, any>): void => {
	const [command, ...args] = prompt.split(" ");

	let response: string | undefined = "";
	switch (command) {
		case "help":
			response = handleHelpCommand(args);
			break;

		case "cd":
			response = handleCdCommand(args, currentDirectory);
			break;

		case "cat":
			response = handleCatCommand(args, currentDirectory);
			break;

		case "clear":
			response = handleClearCommand();
			chatHistory.set([]); // Clear the chat history
			introState().resetText(); // Reset the intro text

			break;

		case "ls":
			response = handleLsCommand(args, currentDirectory);
			break;

		case "echo":
			response = handleEchoCommand(args);
			break;

		case "replay":
			introState().loadText();
			break;

		default:
			response = `The command '${command}' is not recognized. Type 'help' to view all available commands.`;
	}

	if (response !== undefined) {
		chatHistory.update((messages) => {
			return [
				...messages,
				{
					path: currentDirectory.path,
					command: command,
					args: args.join(" "),
					response: response,
				},
			];
		});
	}
};
