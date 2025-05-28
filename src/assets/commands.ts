export const commands = ["help", "cd", "ls", "cat", "clear", "replay", "run"];
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

	replay: {
		description: "Replay the introduction animation.",
		usage: "'replay'",
	},

	run: {
		description: "Run a specific command or script.",
		usage: "'run [script].exe'",
	},
};
