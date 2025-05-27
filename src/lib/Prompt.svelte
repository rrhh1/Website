<script lang="ts">
	import {command_info, commands} from "../assets/constants";
	import {directory} from "../assets/dynamic";
	import {handleCommand} from "../controllers/prompt_controller";

	let prompt: string[] = $state(["", ""]);
	let index = $state(0);

	const isValid = (char: string): boolean => {
		return /^[a-zA-Z0-9.]$/.test(char);
	};

	const onKeyPress = (event: KeyboardEvent) => {
		switch (event.key) {
			case "Enter":
				// Handle the command input
				console.log("Command entered:", $state.snapshot(prompt));

				// Command logic
				const promptString = prompt.join(" ").trim();
				handleCommand(promptString, $directory);

				// Clear the input after processing
				prompt = ["", ""];
				index = 0;
				break;

			case "Backspace":
				// Remove the last character from the prompt
				if (index == 1 && prompt[1].length === 0) {
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

			default:
				if (isValid(event.key)) {
					prompt[index] += event.key;
				}
		}
	};
</script>

<svelte:window on:keydown={onKeyPress} />

<main>
	<h4 id="prompt">
		&gt; user@website:~${$directory.path}
		<span style="color: orange;">{prompt[0]}</span>{#if index == 1}{" " + prompt[1]}{/if}
	</h4>
</main>

<style>
	#prompt::after {
		content: "";
		background-color: var(--primary-color);
		display: inline-block;
		width: 0.5rem;
		height: 1.2rem;
		position: relative;
		bottom: -2px;

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
