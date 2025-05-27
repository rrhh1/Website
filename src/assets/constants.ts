export const TitleName = `
 ______     ______     __  __        __  __     __  __    
/\\  == \\   /\\  __ \\   /\\ \\_\\ \\      /\\ \\_\\ \\   /\\ \\/\\ \\   
\\ \\  __<   \\ \\  __ \\  \\ \\____ \\     \\ \\  __ \\  \\ \\ \\_\\ \\  
 \\ \\_\\ \\_\\  \\ \\_\\ \\_\\  \\/\\_____\\     \\ \\_\\ \\_\\  \\ \\_____\\ 
  \\/_/ /_/   \\/_/\\/_/   \\/_____/      \\/_/\\/_/   \\/_____/ 
`;

export const description =
	"Welcome to my personal website! Thank you for visiting my portfolio. " +
	"Here you can find information about my skills, education, experience, and projects. " +
	"Feel free to explore and reach out if you have any questions or opportunities to discuss." +
	"\n\n" +
	"To get started, type 'help' for a list of the available commands.";

export const commands = ["help", "cd", "ls", "cat", "clear", "run"];
export const command_info: Record<string, Record<string, string>> = {
	help: {
		description: "Display a list of available commands or help for a specific command.",
		usage: "'help' | 'help [command]'",
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
	run: {
		description: "Run a specific command or script.",
		usage: "'run [script].exe'",
	},
};

export const states = ["root", "contacts"];

// Define the root object first so it can be referenced
const rootObj: Record<string, any> = {
	path: "",
	files: ["about.txt", "resume.pdf"],
	directories: {},
	parent: null,
};

const contactsObj = {
	path: "/contacts",
	files: ["email.txt", "github.txt", "linkedin.txt", "phone.txt"],
	directories: {},
	parent: rootObj,
};

const experienceObj = {
	path: "/experience",
	files: ["email.txt", "github.txt", "linkedin.txt", "phone.txt"],
	directories: {},
	parent: rootObj,
};

const projectsObj = {
	path: "/projects",
	files: ["email.txt", "github.txt", "linkedin.txt", "phone.txt"],
	directories: {},
	parent: rootObj,
};

const skillsObj = {
	path: "/skills",
	files: ["email.txt", "github.txt", "linkedin.txt", "phone.txt"],
	directories: {},
	parent: rootObj,
};

rootObj.directories = {
	contacts: contactsObj,
	experience: experienceObj,
	projects: projectsObj,
	skills: skillsObj,
};

export const directory_info = rootObj;
