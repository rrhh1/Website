<script lang="ts">
	import {onMount} from "svelte";
	import {description, TitleName} from "../assets/constants";

	let displayedTitle: string = $state("");
	let displayedDesc = $state("");

	const INTERVAL_TIME = 5; // milliseconds

	let titleToDisplay: string = TitleName;
	let introToDisplay: string = description;

	const loadText = () => {
		let index1 = 0;
		let interval1 = setInterval(() => {
			if (index1 < titleToDisplay.length) {
				displayedTitle += titleToDisplay[index1];
				index1++;
			} else {
				clearInterval(interval1);
			}
		}, INTERVAL_TIME);

		setTimeout(
			() => {
				let index2 = 0;
				let interval2 = setInterval(() => {
					if (index2 < introToDisplay.length) {
						if (index2 < introToDisplay.length) {
							displayedDesc += introToDisplay[index2];
							index2++;
						}
					} else {
						clearInterval(interval2);
					}
				}, INTERVAL_TIME);
			},
			INTERVAL_TIME * titleToDisplay.length + 200
		);
	};

	onMount(() => {
		displayedTitle = "";
		displayedDesc = "";
		loadText();
	});
</script>

<div id="Title">
	<h2>
		{displayedTitle}
	</h2>
	<h3>
		{displayedDesc}
	</h3>
</div>

<style>
	#Title {
		white-space: pre-wrap;
	}
</style>
