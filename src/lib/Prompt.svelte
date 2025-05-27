<script lang="ts">
	import {directory} from "../assets/dynamic";
	import {handleCommand} from "../controllers/prompt_controllers/master_controller";
	import {loadState} from "../sharedStates/loading.svelte";

	let prompt: string[] = $state(["", ""]);
	let index = $state(0);

	let currentDirectory: Record<string, any> = $state({});
	directory.subscribe((dir) => {
		currentDirectory = dir;
	});

	let currPromptArgs = "";
	let currSuggestions: string[] = [];
	let currSuggestionsIndex = 0;

	const isValid = (char: string): boolean => {
		return /^[a-zA-Z0-9.]$/.test(char);
	};

	const onKeyPress = (event: KeyboardEvent) => {
		if (loadState().isLoading) {
			return;
		}

		console.log(event.key);
		if (event.key !== "Tab") {
			currPromptArgs = "";
		}

		switch (event.key) {
			case "Enter":
				// Command logic
				const promptString = prompt.join(" ").trim();
				handleCommand(promptString, currentDirectory);

				// Clear the input after processing
				prompt = ["", ""];
				index = 0;
				break;

			case "Backspace":
				// Remove the last character from the prompt
				if (index === 1 && prompt[1].length === 0) {
					index = 0;
				}

				prompt[index] = prompt[index].slice(0, -1);
				break;

			case " ":
				// Switch prompt index
				if (index == 0) {
					index = 1;
				} else {
					prompt[1] += " ";
				}
				break;

			case "Tab":
				// Prevent default tab behavior
				event.preventDefault();

				if (index !== 1 || prompt[1].trim().length === 0) {
					break;
				}

				if (!currPromptArgs) {
					// Reset suggestions if the input has changed
					currSuggestions = [];
					currSuggestionsIndex = 0;
					currPromptArgs = prompt[1].trim();

					currSuggestions =
						currentDirectory.trie.getAutocompleteSuggestions(currPromptArgs);
				}

				if (currSuggestions.length === 0) {
					break;
				}

				// Cycle through suggestions
				prompt[1] = currSuggestions[currSuggestionsIndex];
				currSuggestionsIndex = (currSuggestionsIndex + 1) % currSuggestions.length;
				break;

			default:
				if (isValid(event.key)) {
					prompt[index] += event.key;
				}
		}
	};
</script>

<svelte:window on:keydown={onKeyPress} />

{#if !loadState().isLoading}
	<main>
		<h4 id="prompt">
			&gt; user@website:~${currentDirectory.path}
			<span style="color: #f6c177;">{prompt[0]}</span>{#if index == 1}{" " + prompt[1]}{/if}
		</h4>
	</main>
{/if}

<style>
	#prompt {
		margin-top: 0px;
		margin-bottom: 0px;
		white-space: pre-wrap;
	}

	#prompt::after {
		content: "";
		background-color: var(--primary-color);
		display: inline-block;
		width: 0.5vw;
		height: 0.95vw;
		position: relative;
		bottom: -0.15vw;

		animation: blink 1s infinite;
	}

	@keyframes blink {
		0%,
		100% {
			background-color: transparent;
		}
		50% {
			background-color: var(--primary-color);
		}
	}
</style>
