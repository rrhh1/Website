// Natural Selection Cellular Automata
const cellular_automata_txt = {
	name: "cellular_automata.txt",
	content:
		"Project:   Natural Selection Cellular Automata" +
		"\n" +
		"Time:      April 2023 - May 2023" +
		"\n" +
		"Link:      https://github.com/x1ofus/CSE355-Cellular-Automata-Project" +
		"\n\n" +
		"Description:" +
		"\n" +
		"- Project for Intro to Theoretical Computer Science Course." +
		"\n" +
		"- Developed Python simulation utilizing a cellular automaton to mimic behaviors of natural selection found in nature to view its effects within a grid like space." +
		"\n" +
		"- Applied NumPy and PyGame libraries to create the environment of program" +
		"\n" +
		"- Created my own algorithms and rule set to give each cell “life” and established emergent behaviors within different hyperparameter variations of the program.",
};

// Custom GPT
const custom_gpt_txt = {
	name: "custom_gpt.txt",
	content:
		"Project:   Custom GPT" +
		"\n" +
		"Time:      August 2023 - December 2024" +
		"\n" +
		"Link:      https://github.com/x1ofus/GPT-Project" +
		"\n\n" +
		"Description:" +
		"\n" +
		"- Project with a friend to create our own generative pre-trained transformer to replicate the abilities of other GPTs." +
		"\n" +
		"- Created an Attention model using Pytorch to predict and generate new text based off any data set." +
		"\n" +
		"- Implemented tiktoken cl110k_base for the tokenizer and AdamW for the model optimizer to drive overall better model accuracy, loss graph is tracked with PyPlot." +
		"\n" +
		"- Integrated Lightning Fabric and custom precision for better memory optimization to lessen strain on GPUs." +
		"\n" +
		"- Linked with a MongoDB database to store and access large models to ensure cross-device compatibility.",
};

// Discord Clip
const discord_clip_txt = {
	name: "discord_clip.txt",
	content:
		"Project:   Discord Clip" +
		"\n" +
		"Time:      October 2021 - October 2021" +
		"\n" +
		"Link:      https://devpost.com/software/discord-clip" +
		"\n\n" +
		"Description:" +
		"\n" +
		"- Project developed during Arizona State University's 2021 Sunhacks Hackathon where project won third place and Hacker's choice award." +
		"\n" +
		"- Created a Discord bot using Java and the Java Discord API to record and clip audio in voice chat into .wav clips, similar to Twitch's clipping system." +
		"\n" +
		"- Integrated several commands with the discord API to allow the user to interact with the discord bot, from joining and leaving voice chat to clipping audio based on a user-input time frame." +
		"\n" +
		"- Utilized AssemblyAI's voice to text API to convert clipped audio files to text, giving visual feedback as well.",
};

// FusionFoods
const fusion_foods_txt = {
	name: "fusion_foods.txt",
	content:
		"Project:   Fusion Foods" +
		"\n" +
		"Time:      November 2023 - November 2023" +
		"\n" +
		"Link:      https://devpost.com/software/fusionfoods" +
		"\n\n" +
		"Description:" +
		"\n" +
		"- Project developed during Arizona State University's 2023 Sunhacks Hackathon where project won 'Most Useless Hack' award." +
		"\n" +
		"- Developed a website to create new recipes from existing ones using ChatGPT's API." +
		"\n" +
		"- Integrated a 2 million+ recipe dataset from kaggle for users to choose from." +
		"\n" +
		"- Implemented image generation of new recipe prompts using StabilityAI's API." +
		"\n" +
		"- Utilized SvelteKit, TailwindCSS, and SkeletonUI to build the website for dynmaic visuals, including a custom loading screen.",
};

// Menhara Productivity
const menhara_productivity_txt = {
	name: "menhara_productivity.txt",
	content:
		"Project:   Menhara Productivity" +
		"\n" +
		"Time:      April 2025 - April 2025" +
		"\n" +
		"Link:      https://devpost.com/software/menhera-productivity" +
		"\n\n" +
		"Description:" +
		"\n" +
		"- Project developed during Arizona State University's 2025 InnovationHacks Hackathon where project won 'Google Developer Student Club: Best Productivity Tools' award." +
		"\n" +
		"- Created an app using Tauri, SvelteKit, and PyTorch (Rust, Typescript, Python) to detech whether a user is distracted or not based on their desktop." +
		"\n" +
		"- Fine-tuned a ResNet-18 model using a custom dataset to predict whether a desktop is 'on task' or 'distracted'." +
		"\n" +
		"- Implemented a moving-window algorithm to analyze a series of screenshots to remove false positives and negatives." +
		"\n" +
		"- Feedback of app uses a state system to show how happy or sad the character is based on the results of moving window predictions.",
};

// Discord File Manager
const discord_file_manager_txt = {
	name: "discord_file_manager.txt",
	content:
		"Project:   Discord File Manager" +
		"\n" +
		"Time:      May 2025 - May 2025" +
		"\n" +
		"Link:      https://github.com/rrhh1/Discord-File-Manager" +
		"\n\n" +
		"Description:" +
		"\n" +
		"- Project to develop a file system using Discord's API as an introduction to full-stack concepts and development" +
		"\n" +
		"- Stack included React, Express, Node, and Typescript to create the frontend and backend." +
		"\n" +
		"- Developed a method to cut larger files into 10 mb chunks to get around the discord's API upload limitation." +
		"\n" +
		"- Features include uploading, deleting, and downloading files from discord back to host computer." +
		"\n" +
		"- Implemented an encryption scheme on file chunks to protect user's uploaded file data on discord.",
};

export const project_files = [
	cellular_automata_txt,
	custom_gpt_txt,
	discord_clip_txt,
	discord_file_manager_txt,
	fusion_foods_txt,
	menhara_productivity_txt,
];
