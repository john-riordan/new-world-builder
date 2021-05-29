import { THROWING, BERZERKER } from './wepTrees/hatchet';

export const weapons = {
	straightSword: {
		name: 'straightSword',
		title: 'Sraight Sword',
		tree1: {
			name: 'swordmaster'
		},
		tree2: {
			name: 'defender'
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
	greatAxe: {
		name: 'greatAxe',
		title: 'Great Axe',
		tree1: {
			name: 'reaper'
		},
		tree2: {
			name: 'mauler'
		}
	},
	warHammer: {
		name: 'warHammer',
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
	fireStaff: {
		name: 'fireStaff',
		title: 'Fire Staff',
		tree1: {
			name: 'fireMage'
		},
		tree2: {
			name: 'pyroMancer'
		}
	},
	lifeStaff: {
		name: 'lifeStaff',
		title: 'Life Staff',
		tree1: {
			name: 'healing'
		},
		tree2: {
			name: 'protector'
		}
	},
	iceGauntlet: {
		name: 'iceGauntlet',
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
		list: [weapons.straightSword, weapons.rapier, weapons.hatchet]
	},
	{
		title: 'Two-Handed Weapons',
		list: [weapons.spear, weapons.greatAxe, weapons.warHammer]
	},
	{
		title: 'Ranged Weapons',
		list: [weapons.bow, weapons.musket, { name: null }]
	},
	{
		title: 'Magic',
		list: [weapons.fireStaff, weapons.lifeStaff, weapons.iceGauntlet]
	}
];
