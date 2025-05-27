let loading = $state(true);

export const loadState = (): Record<string, any> => {
	const setLoading = (value: boolean) => {
		loading = value;
	};

	return {
		get isLoading() {
			return loading;
		},
		setLoading: setLoading,
	};
};
