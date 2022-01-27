import { writable, derived } from 'svelte/store';

import { weapons } from '$data/weapons.js';
import { SKILL_PTS } from '$lib/constants';

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
      const indexToRemove = selected.rows.findIndex((num) => num === skill.row);

      const rows = [...selected.rows];

      if (indexToRemove >= -1) {
        rows.splice(indexToRemove, 1);

        return {
          ...selected,
          rows: [...rows],
          list: [...selected.list.filter((p) => p !== skill.name)]
        };
      }

      return { ...selected };
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
export const weps = writable([]);
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
export const wep0Skills = derived(
  [selectedWeps, trees[0][0], trees[0][1]],
  ([$selectedWeps, $tree1Store, $tree2Store]) => {
    const skillList = [...$tree1Store.list, ...$tree2Store.list];
    const wep = $selectedWeps[0] ? weapons[$selectedWeps[0]] : null;
    const skills = wep
      ? [
          ...Object.values(wep.tree1.skills).map((skill) => ({ ...skill, color: wep.tree1.color })),
          ...Object.values(wep.tree2.skills).map((skill) => ({ ...skill, color: wep.tree2.color }))
        ]
      : null;

    return skillList
      .map((skill) => skills.find((s) => s.name === skill && s.type === 'major'))
      .filter(Boolean);
  }
);
export const wep1Pts = derived([trees[1][0], trees[1][1]], ([$wep1tree0, $wep1tree1]) => {
  return $wep1tree0.list.length + $wep1tree1.list.length;
});
export const wep1Skills = derived(
  [selectedWeps, trees[1][0], trees[1][1]],
  ([$selectedWeps, $tree1Store, $tree2Store]) => {
    const skillList = [...$tree1Store.list, ...$tree2Store.list];
    const wep = $selectedWeps[1] ? weapons[$selectedWeps[1]] : null;
    const skills = wep
      ? [
          ...Object.values(wep.tree1.skills).map((skill) => ({ ...skill, color: wep.tree1.color })),
          ...Object.values(wep.tree2.skills).map((skill) => ({ ...skill, color: wep.tree2.color }))
        ]
      : null;

    return skillList
      .map((skill) => skills.find((s) => s.name === skill && s.type === 'major'))
      .filter(Boolean);
  }
);
export const wepPtsRemaining = derived([wep0Pts, wep1Pts], ([$wep0Pts, $wep1Pts]) => {
  return $wep0Pts + $wep1Pts < SKILL_PTS;
});
