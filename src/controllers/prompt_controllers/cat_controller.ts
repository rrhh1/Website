export const handleCatCommand = (args: string[], currentDirectory: Record<string, any>): string => {
	let response = "";

	if (args.length === 0) {
		response = "Usage: cat <file>";
		return response;
	}

	if (args.length > 1) {
		response = "cat: too many arguments";
		return response;
	}

	const targetFile = args[0];
	const file = (currentDirectory.files as Record<string, any>[]).find(
		(file) => file.name === targetFile
	);

	if (!file) {
		response = `cat: ${targetFile}: No such file`;
		return response;
	}

	response = file.content;
	return response;
};
