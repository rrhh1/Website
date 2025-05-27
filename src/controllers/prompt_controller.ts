import {chatHistory} from "../assets/dynamic";
import {handleCdCommand} from "./cd_controller";
import {handleClearCommand} from "./clear_controller";
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

		case "ls":
			response = handleLsCommand(args, currentDirectory);
			console.log(response);
			break;

		case "clear":
			response = handleClearCommand();
			break;
	}

	if (response === undefined) {
		chatHistory.set([]);
	} else {
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
