export const commands = ["help", "cd", "ls", "cat", "clear", "echo", "replay"];
export const command_info: Record<string, Record<string, string>> = {
	help: {
		description: "Display a list of available commands.",
		usage: "'help'",
	},
	cd: {
		description: "Change the current directory.",
		usage: "'cd [directory]' | 'cd ..'",
	},
	ls: {
		description: "List the contents of the current directory.",
		usage: "'ls'",
	},
	cat: {
		description: "Display the contents of a file.",
		usage: "'cat [file].txt' | 'cat [file].pdf'",
	},
	clear: {
		description: "Clear the chat history.",
		usage: "'clear'",
	},
	echo: {
		description: "Display a line of text.",
		usage: "'echo [text]'",
	},
	replay: {
		description: "Replay the introduction animation.",
		usage: "'replay'",
	},
};
