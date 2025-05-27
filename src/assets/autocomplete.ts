class TrieNode {
	children: Record<string, TrieNode>;
	isEndOfWord: boolean;

	constructor() {
		this.children = {};
		this.isEndOfWord = false;
	}
}

class TrieTree {
	root: TrieNode;

	constructor(words: string[]) {
		const createTrieTree = (words: string[]) => {
			const root: TrieNode = {children: {}, isEndOfWord: false};
			words.forEach((word) => {
				let currentNode = root;
				for (const char of word) {
					if (!currentNode.children[char]) {
						currentNode.children[char] = {children: {}, isEndOfWord: false};
					}
					currentNode = currentNode.children[char];
				}
				currentNode.isEndOfWord = true;
			});

			return root;
		};

		this.root = createTrieTree(words);
	}

	getAutocompleteSuggestions = (prefix: string): string[] => {
		const suggestions: string[] = [];
		let currentNode: TrieNode | null = this.root;

		for (const char of prefix) {
			if (!currentNode || !currentNode.children[char]) {
				return suggestions; // No suggestions if the prefix doesn't match
			}
			currentNode = currentNode.children[char];
		}

		const findWords = (node: TrieNode, currentPrefix: string) => {
			if (node.isEndOfWord) {
				suggestions.push(currentPrefix);
			}
			for (const char in node.children) {
				findWords(node.children[char], currentPrefix + char);
			}
		};

		findWords(currentNode, prefix);
		return suggestions;
	};
}

export default TrieTree;
