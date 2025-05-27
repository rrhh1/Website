<script lang="ts">
	import {tick} from "svelte";
	import {chatHistory} from "../assets/dynamic";

	let history: Record<string, string>[] = $state([]);
	chatHistory.subscribe((messages) => {
		history = messages;

		const scrollToBottom = () => {
			const promptElement = document.getElementById("prompt");
			if (promptElement) {
				promptElement.scrollIntoView({behavior: "smooth"});
			}
		};

		tick().then(() => {
			scrollToBottom();
		});
	});
</script>

<main id="history">
	{#each history as message}
		<h4 id="history-prompt">
			&gt; user@website:~${message.path}
			<span style="color: orange;">{message.command}</span>{" " + message.args}
		</h4>
		{#if message.response}
			<h4 id="history-response">{message.response}</h4>
			<br />
			<br />
		{/if}
	{/each}
</main>

<style>
	#history {
		white-space: pre-wrap;
	}

	#history-prompt {
		margin-top: 0px;
		margin-bottom: 0px;
	}

	#history-response {
		margin-top: 0px;
		margin-bottom: 0px;
	}
</style>
