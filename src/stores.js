import { writable, derived } from 'svelte/store';
import { weapons } from './weapons';
import { attributes } from './attributes';
import { ATTR_PTS, SKILL_PTS, MIN_ATTR_PTS } from './constants';

// -----------------------------------------
// Attribute points
export const str = writable(5);
export const dex = writable(5);
export const int = writable(5);
export const foc = writable(5);
export const con = writable(5);
export const attrs = derived([str, dex, int, foc, con], ([$str, $dex, $int, $foc, $con]) => {
	const breakpoint = 50;

	let bonuses = [];

	const strBonus = Array.from(Array(Math.trunc($str / breakpoint))).map((_, index) => {
		return attributes.str.bonuses[index];
	});
	const dexBonus = Array.from(Array(Math.trunc($dex / breakpoint))).map((_, index) => {
		return attributes.dex.bonuses[index];
	});
	const intBonus = Array.from(Array(Math.trunc($int / breakpoint))).map((_, index) => {
		return attributes.int.bonuses[index];
	});
	const focBonus = Array.from(Array(Math.trunc($foc / breakpoint))).map((_, index) => {
		return attributes.foc.bonuses[index];
	});
	const conBonus = Array.from(Array(Math.trunc($con / breakpoint))).map((_, index) => {
		return attributes.con.bonuses[index];
	});

	if (strBonus.length) bonuses.push(strBonus);
	if (dexBonus.length) bonuses.push(dexBonus);
	if (intBonus.length) bonuses.push(intBonus);
	if (focBonus.length) bonuses.push(focBonus);
	if (conBonus.length) bonuses.push(conBonus);

	const attrKeys = ['str', 'dex', 'int', 'foc', 'con'];
	const orderedAttrs = [$str, $dex, $int, $foc, $con]
		.map((attr, i) => ({ key: attrKeys[i], pts: attr }))
		.sort((z, a) => a.pts - z.pts);

	return {
		available: ATTR_PTS - $str - $dex - $int - $foc - $con,
		anyPtsAllocated: $str + $dex + $int + $foc + $con > 25,
		primary: orderedAttrs[0].pts > MIN_ATTR_PTS ? orderedAttrs[0] : null,
		secondary: orderedAttrs[1].pts > MIN_ATTR_PTS ? orderedAttrs[1] : null,
		bonuses: bonuses.filter(Boolean).flat(2)
	};
});

// -----------------------------------------
// Set up individual wep trees
const treeStoreSchema = { rows: [], list: [] };
function TreeStore(store) {
	this.store = store;
	this.subscribe = this.store.subscribe;
	this.length = () => this.store.list.length;
	this.addSkill = (skill) => {
		this.store.update((selected) => {
			return {
				...selected,
				rows: [...selected.rows, skill.row],
				list: [...new Set([...selected.list, skill.name])]
			};
		});
	};
	this.removeSkill = (skill) => {
		this.store.update((selected) => {
			const indexToRemove = selected.rows.indexOf(skill.row);

			return {
				...selected,
				rows: [...selected.rows.splice(indexToRemove, 1)],
				list: [...selected.list.filter((p) => p !== skill.name)]
			};
		});
	};
	this.resetTree = (wepIndex, treeIndex) => {
		console.log(`Resetting wep ${wepIndex} tree ${treeIndex}`);
		this.store.set({ ...treeStoreSchema });
	};
}

export const trees = [
	[new TreeStore(writable(treeStoreSchema)), new TreeStore(writable(treeStoreSchema))],
	[new TreeStore(writable(treeStoreSchema)), new TreeStore(writable(treeStoreSchema))]
];

/// -----------------------------------------
// Array of selected weapons (0, 1)
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

// -----------------------------------------
// Points allocated to trees
export const wep0Pts = derived([trees[0][0], trees[0][1]], ([$wep0tree0, $wep0tree1]) => {
	return $wep0tree0.list.length + $wep0tree1.list.length;
});
export const wep1Pts = derived([trees[1][0], trees[1][1]], ([$wep1tree0, $wep1tree1]) => {
	return $wep1tree0.list.length + $wep1tree1.list.length;
});
export const wepPtsRemaining = derived([wep0Pts, wep1Pts], ([$wep0Pts, $wep1Pts]) => {
	return $wep0Pts + $wep1Pts < SKILL_PTS;
});

// -----------------------------------------
// Rendered weapon
export const renderedWep = writable(null);
export const renderedWepData = derived(renderedWep, ($renderedWep) => {
	if (weapons[$renderedWep]) {
		return {
			tree1: weapons[$renderedWep].tree1.skills,
			tree2: weapons[$renderedWep].tree2.skills
		};
	}

	return {};
});

// -----------------------------------------
// Generate share link
export const shareLink = derived(
	[weps, trees[0][0], trees[0][1], trees[1][0], trees[1][1]],
	([$weps, $wep0tree0, $wep0tree1, $wep1tree0, $wep1tree1]) => {
		const params = {
			weps: $weps,
			w0t0: $wep0tree0.list,
			w0t1: $wep0tree1.list,
			w1t0: $wep1tree0.list,
			w1t1: $wep1tree1.list
		};

		console.log($wep0tree0);

		return new URLSearchParams(params).toString();
	}
);
