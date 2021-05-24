import { treeStore } from './stores';

export const weapons = {
	'Straight Sword': {
		name: 'Straight Sword',
		tree1: {
			name: 'Berzerker',
			store: Object.assign({}, treeStore)
		},
		tree2: {
			name: 'Throwing',
			store: Object.assign({}, treeStore)
		}
	},
	Rapier: {
		name: 'Rapier',
		tree1: {
			name: 'Blood',
			store: Object.assign({}, treeStore)
		},
		tree2: {
			name: 'Grace',
			store: Object.assign({}, treeStore)
		}
	}
};

export const wepClasses = [
	{
		title: 'One-Handed Weapons',
		list: [weapons['Straight Sword'], weapons['Rapier'], { name: 'Hatchet' }]
	},
	{
		title: 'Two-Handed Weapons',
		list: [{ name: 'Spear' }, { name: 'Great Axe' }, { name: 'War Hammer' }]
	},
	{
		title: 'Ranged Weapons',
		list: [{ name: 'Bow' }, { name: 'Musket' }, { name: null }]
	},
	{
		title: 'Magic',
		list: [{ name: 'Fire Staff' }, { name: 'Life Staff' }, { name: 'Ice Gauntlet' }]
	}
];
