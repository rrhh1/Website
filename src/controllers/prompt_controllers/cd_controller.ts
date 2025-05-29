import {directory} from "../../sharedStates/stores.svelte";

export const handleCdCommand = (args: string[], currentDirectory: Record<string, any>): string => {
	let response = "";

	if (args.length === 0) {
		return "";
	}

	if (args.length > 1) {
		response = "cd: Too many arguments";
		return response;
	}

	const targetDirectory = args[0];
	if (targetDirectory === "..") {
		// Navigate to parent directory
		const parentDirectory =
			currentDirectory.parent == null ? currentDirectory : currentDirectory.parent;

		directory.set(parentDirectory);
		return "";
	}

	if (!Object.keys(currentDirectory.directories).includes(targetDirectory)) {
		response = `cd: No such directory '${targetDirectory}' in current path`;
		return response;
	}

	directory.set(currentDirectory.directories[targetDirectory]);
	return "";
};
