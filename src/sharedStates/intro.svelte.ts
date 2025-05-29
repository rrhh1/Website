import {description, TitleName} from "../assets/constants/intro_strings";
import {loadState} from "./loading.svelte";

let displayedTitle: string = $state("");
let displayedDesc: string = $state("");

export const introState = (): Record<string, any> => {
	const titleToDisplay = TitleName;
	const descToDisplay = description;

	const INTERVAL_TIME = 5; //milliseconds
	const _loadState = loadState();

	const loadText = () => {
		_loadState.setLoading(true);

		displayedTitle = "";
		displayedDesc = "";

		let index1 = 0;
		let interval1 = setInterval(() => {
			if (index1 < titleToDisplay.length) {
				displayedTitle += titleToDisplay[index1];
				index1++;
			} else {
				clearInterval(interval1);
			}
		}, INTERVAL_TIME);

		setTimeout(() => {
			let index2 = 0;
			let interval2 = setInterval(() => {
				if (index2 < descToDisplay.length) {
					if (index2 < descToDisplay.length) {
						displayedDesc += descToDisplay[index2];
						index2++;
					}
				} else {
					clearInterval(interval2);
				}
			}, INTERVAL_TIME);
		}, INTERVAL_TIME * titleToDisplay.length + 200);

		setTimeout(() => {
			loadState().setLoading(false);
		}, INTERVAL_TIME * (titleToDisplay.length + descToDisplay.length) + 400);
	};

	const resetText = () => {
		displayedTitle = "";
		displayedDesc = "";
	};

	return {
		loadText: loadText,
		resetText: resetText,
		get displayedTitle() {
			return displayedTitle;
		},
		get displayedDesc() {
			return displayedDesc;
		},
	};
};
