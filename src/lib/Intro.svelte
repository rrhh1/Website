<script lang="ts">
	import {onMount} from "svelte";
	import {introState} from "../sharedStates/intro.svelte";

	const _introState = introState();

	onMount(() => {
		_introState.loadText();
	});
</script>

<div id="Title">
	<h2>
		{_introState.displayedTitle}
	</h2>
	<h3>
		{_introState.displayedDesc}
	</h3>
</div>

<style>
	#Title {
		white-space: pre-wrap;
	}
</style>
