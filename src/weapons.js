import { SWORDMASTER, DEFENDER } from './wepTrees/sword';
import { THROWING, BERZERKER } from './wepTrees/hatchet';
import { BLOOD, GRACE } from './wepTrees/rapier';
import { ZONER, IMPALER } from './wepTrees/spear';
import { REAPER, MAULER } from './wepTrees/greatAxe';

export const weapons = {
	'straight-sword': {
		name: 'straight-sword',
		title: 'Sraight Sword',
		damage_type: 'slash',
		tree1: {
			name: 'swordmaster',
			skills: SWORDMASTER,
			color: '--skill-red'
		},
		tree2: {
			name: 'defender',
			skills: DEFENDER,
			color: '--skill-red'
		}
	},
	rapier: {
		name: 'rapier',
		title: 'Rapier',
		damage_type: 'thrust',
		tree1: {
			name: 'blood',
			skills: BLOOD,
			color: '--skill-red'
		},
		tree2: {
			name: 'grace',
			skills: GRACE,
			color: '--skill-red'
		}
	},
	hatchet: {
		name: 'hatchet',
		title: 'Hatchet',
		damage_type: 'slash',
		tree1: {
			name: 'berzerker',
			skills: BERZERKER,
			color: '--skill-orange'
		},
		tree2: {
			name: 'throwing',
			skills: THROWING,
			color: '--skill-olive'
		}
	},
	spear: {
		name: 'spear',
		title: 'Spear',
		damage_type: 'thrust',
		tree1: {
			name: 'zoner',
			skills: ZONER,
			color: '--skill-olive'
		},
		tree2: {
			name: 'impaler',
			skills: IMPALER,
			color: '--skill-red'
		}
	},
	'great-axe': {
		name: 'great-axe',
		title: 'Great Axe',
		damage_type: 'slash',
		tree1: {
			name: 'reaper',
			skills: REAPER,
			color: '--skill-red'
		},
		tree2: {
			name: 'mauler',
			skills: MAULER,
			color: '--skill-red'
		}
	},
	'war-hammer': {
		name: 'war-hammer',
		title: 'War Hammer',
		damage_type: 'strike',
		tree1: {
			name: 'juggernaut',
			color: '--skill-red'
		},
		tree2: {
			name: 'crowdCrusher',
			color: '--skill-purple'
		}
	},
	bow: {
		name: 'bow',
		title: 'Bow',
		damage_type: 'thrust',
		tree1: {
			name: 'skirmisher',
			color: '--skill-olive'
		},
		tree2: {
			name: 'hunter',
			color: '--skill-olive'
		}
	},
	musket: {
		name: 'musket',
		title: 'Musket',
		damage_type: 'thrust',
		tree1: {
			name: 'sharpshooter',
			color: '--skill-olive'
		},
		tree2: {
			name: 'trapper',
			color: '--skill-purple'
		}
	},
	'fire-staff': {
		name: 'fire-staff',
		title: 'Fire Staff',
		damage_type: 'fire',
		tree1: {
			name: 'fireMage',
			color: '--skill-blue'
		},
		tree2: {
			name: 'pyroMancer',
			color: '--skill-blue'
		}
	},
	'life-staff': {
		name: 'life-staff',
		title: 'Life Staff',
		damage_type: 'nature',
		tree1: {
			name: 'healing',
			color: '--skill-turq'
		},
		tree2: {
			name: 'protector',
			color: '--skill-turq'
		}
	},
	'ice-gauntlet': {
		name: 'ice-gauntlet',
		title: 'Ice Gauntlet',
		damage_type: 'ice',
		tree1: {
			name: 'iceTempest',
			color: '--skill-blue'
		},
		tree2: {
			name: 'builder',
			color: '--skill-blue'
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
