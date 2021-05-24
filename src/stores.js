import { writable } from 'svelte/store';

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
			return selected.filter((wep) => wep !== weaponName);
		});
	}
};

const store = writable([]);
export const treeStore = {
	subscribe: store.subscribe,
	addSkill: (skill) => {
		store.update((selected) => {
			return [...new Set([...selected, skill.name])];
		});
	},
	removeSkill: (skill) => {
		store.update((selected) => {
			if (selected.includes(skill.into)) {
				return selected;
			}
			return [...selected.filter((p) => p !== skill.name)];
		});
	}
};
