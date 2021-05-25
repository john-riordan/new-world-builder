import { writable, derived } from 'svelte/store';

// Set up individual wep trees
const wepTree = writable([]);
const treeStore = {
	subscribe: wepTree.subscribe,
	length: () => wepTree.length,
	addSkill: (skill) => {
		wepTree.update((selected) => {
			return [...new Set([...selected, skill.name])];
		});
	},
	removeSkill: (skill) => {
		wepTree.update((selected) => {
			if (selected.includes(skill.into)) {
				return selected;
			}
			return [...selected.filter((p) => p !== skill.name)];
		});
	},
	resetTree: (wepIndex, treeIndex) => {
		console.log(`Resetting wep ${wepIndex} tree ${treeIndex}`);
		wepTree.set([]);
	}
};

export const trees = [
	[Object.assign({}, treeStore), Object.assign({}, treeStore)],
	[Object.assign({}, treeStore), Object.assign({}, treeStore)]
];

// Array of selected weapons
const weps = writable([]);
export const selectedWeps = {
	subscribe: weps.subscribe,
	addWep: (weaponName) => {
		weps.update((selected) => {
			if (selected.length < 2 && !selected.includes(weaponName)) {
				return [...selected, weaponName];
			}

			return selected;
		});
	},
	removeWep: (weaponName) => {
		weps.update((selected) => {
			const removedIndex = selected.indexOf(weaponName);

			if (removedIndex === 0 || removedIndex === 1) {
				// Reset both trees
				trees[removedIndex].forEach((tree, i) => {
					tree.resetTree(removedIndex, i);
				});
			}

			return selected.filter((wep) => wep !== weaponName);
		});
	}
};

export const buildStore = {
	weps: selectedWeps,
	trees: trees
};

export const wep0Pts = derived([trees[0][0], trees[0][1]], ([$wep0tree0, $wep0tree1]) => {
	return $wep0tree0.length + $wep0tree1.length;
});
export const wep1Pts = derived([trees[1][0], trees[1][1]], ([$wep1tree0, $wep1tree1]) => {
	return $wep1tree0.length + $wep1tree1.length;
});

export const shareLink = derived(
	[weps, trees[0][0], trees[0][1], trees[1][0], trees[1][1]],
	([$weps, $wep0tree0, $wep0tree1, $wep1tree0, $wep1tree1]) => {
		const params = {
			weps: $weps,
			w0t0: $wep0tree0,
			w0t1: $wep0tree1,
			w1t0: $wep1tree0,
			w1t1: $wep1tree1
		};

		return new URLSearchParams(params).toString();
	}
);
