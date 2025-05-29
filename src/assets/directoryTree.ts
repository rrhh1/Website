import {root_files} from "./files/root";
import {education_files} from "./files/education";
import {experience_files} from "./files/experience";
import {project_files} from "./files/projects";
import {skill_files} from "./files/skills";
import TrieTree from "./autocomplete";

// Define the root object first so it can be referenced
const rootObj: Record<string, any> = {
	path: "",
	files: root_files,
	directories: {},
	parent: null,
	trie: null,
};

const educationObj = {
	path: "/education",
	files: education_files,
	directories: {},
	parent: rootObj,
	trie: null,
};

const experienceObj = {
	path: "/experience",
	files: experience_files,
	directories: {},
	parent: rootObj,
	trie: null,
};

const projectsObj = {
	path: "/projects",
	files: project_files,
	directories: {},
	parent: rootObj,
	trie: null,
};

const skillsObj = {
	path: "/skills",
	files: skill_files,
	directories: {},
	parent: rootObj,
	trie: null,
};

// Link the directories to the root object
rootObj.directories = {
	education: educationObj,
	experience: experienceObj,
	projects: projectsObj,
	skills: skillsObj,
};

// Initialize the trie for autocomplete
for (const dirObj of [rootObj, educationObj, experienceObj, projectsObj, skillsObj]) {
	dirObj.trie = new TrieTree([
		...dirObj.files.map((file: Record<string, any>) => file.name),
		...Object.keys(dirObj.directories),
	]);
}

export const directory_info = rootObj;
