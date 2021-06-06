import { SWORDMASTER, DEFENDER } from './wepTrees/sword';
import { THROWING, BERZERKER } from './wepTrees/hatchet';

export const weapons = {
	'straight-sword': {
		name: 'straight-sword',
		title: 'Sraight Sword',
		tree1: {
			name: 'swordmaster',
			skills: SWORDMASTER
		},
		tree2: {
			name: 'defender',
			skills: DEFENDER
		}
	},
	rapier: {
		name: 'rapier',
		title: 'Rapier',
		tree1: {
			name: 'blood'
		},
		tree2: {
			name: 'grace'
		}
	},
	hatchet: {
		name: 'hatchet',
		title: 'Hatchet',
		tree1: {
			name: 'berzerker',
			skills: BERZERKER
		},
		tree2: {
			name: 'throwing',
			skills: THROWING
		}
	},
	spear: {
		name: 'spear',
		title: 'Spear',
		tree1: {
			name: 'zoner'
		},
		tree2: {
			name: 'impaler'
		}
	},
	'great-axe': {
		name: 'great-axe',
		title: 'Great Axe',
		tree1: {
			name: 'reaper'
		},
		tree2: {
			name: 'mauler'
		}
	},
	'war-hammer': {
		name: 'war-hammer',
		title: 'War Hammer',
		tree1: {
			name: 'juggernaut'
		},
		tree2: {
			name: 'crowdCrusher'
		}
	},
	bow: {
		name: 'bow',
		title: 'Bow',
		tree1: {
			name: 'skirmisher'
		},
		tree2: {
			name: 'hunter'
		}
	},
	musket: {
		name: 'musket',
		title: 'Musket',
		tree1: {
			name: 'sharpshooter'
		},
		tree2: {
			name: 'trapper'
		}
	},
	'fire-staff': {
		name: 'fire-staff',
		title: 'Fire Staff',
		tree1: {
			name: 'fireMage'
		},
		tree2: {
			name: 'pyroMancer'
		}
	},
	'life-staff': {
		name: 'life-staff',
		title: 'Life Staff',
		tree1: {
			name: 'healing'
		},
		tree2: {
			name: 'protector'
		}
	},
	'ice-gauntlet': {
		name: 'ice-gauntlet',
		title: 'Ice Gauntlet',
		tree1: {
			name: 'iceTempest'
		},
		tree2: {
			name: 'builder'
		}
	}
};

export const wepClasses = [
	{
		title: 'One-Handed Weapons',
		list: [weapons['straight-sword'], weapons.rapier, weapons.hatchet]
	},
	{
		title: 'Two-Handed Weapons',
		list: [weapons.spear, weapons['great-axe'], weapons['war-hammer']]
	},
	{
		title: 'Ranged Weapons',
		list: [weapons.bow, weapons.musket, { name: null }]
	},
	{
		title: 'Magic',
		list: [weapons['fire-staff'], weapons['life-staff'], weapons['ice-gauntlet']]
	}
];
