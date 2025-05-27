export const handleLsCommand = (args: string[], currentDirectory: Record<string, any>): string => {
	let response = "";

	if (args.length > 0) {
		response = "The 'ls' command does not take any arguments.";
	} else {
		const directories = Object.keys(currentDirectory["directories"] as Record<string, any>).map(
			(directoryName) => directoryName + "/"
		);
		const files = currentDirectory["files"] as string[];

		response = directories.concat(files).join("    "); // 4 spaces
	}

	return response;
};
