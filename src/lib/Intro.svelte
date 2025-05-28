<script lang="ts">
	import {onMount} from "svelte";
	import {introState} from "../sharedStates/intro.svelte";

	const _introState = introState();

	onMount(() => {
		_introState.loadText();
	});
</script>

<div id="Title">
	{#if _introState.displayedTitle}
		<h2>
			{_introState.displayedTitle}
		</h2>
		<h4>
			{_introState.displayedDesc}
		</h4>
	{/if}
</div>

<style>
	#Title {
		white-space: pre-wrap;
	}
</style>
