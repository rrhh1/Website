import {root_files} from "./files/root";
import {contacts_files} from "./files/contacts";
import TrieTree from "./autocomplete";

// Define the root object first so it can be referenced
const rootObj: Record<string, any> = {
	path: "",
	files: root_files,
	directories: {},
	parent: null,
	trie: null,
};

const contactsObj = {
	path: "/contacts",
	files: contacts_files,
	directories: {},
	parent: rootObj,
	trie: null,
};

const experienceObj = {
	path: "/experience",
	files: contacts_files,
	directories: {},
	parent: rootObj,
	trie: null,
};

const projectsObj = {
	path: "/projects",
	files: contacts_files,
	directories: {},
	parent: rootObj,
	trie: null,
};

const skillsObj = {
	path: "/skills",
	files: contacts_files,
	directories: {},
	parent: rootObj,
	trie: null,
};

// Link the directories to the root object
rootObj.directories = {
	contacts: contactsObj,
	experience: experienceObj,
	projects: projectsObj,
	skills: skillsObj,
};

// Initialize the trie for autocomplete
for (const dirObj of [rootObj, contactsObj, experienceObj, projectsObj, skillsObj]) {
	dirObj.trie = new TrieTree([
		...dirObj.files.map((file: Record<string, any>) => file.name),
		...Object.keys(dirObj.directories),
	]);
}

export const directory_info = rootObj;
