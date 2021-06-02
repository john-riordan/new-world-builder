import { weapons } from './weapons';

export const attributes = {
	str: {
		name: 'strength',
		title: 'Strength',
		type: 'Melee focused',
		primary: [
			weapons.warHammer.name,
			weapons.greatAxe.name,
			weapons.straightSword.name,
			weapons.hatchet.name
		],
		secondary: [weapons.spear.name],
		bonuses: [
			['<span>+5%</span> damage to melee weapon light attacks', '<span>+10%</span> mining speed'],
			[
				'<span>+10%</span> damage to melee weapon heavy attacks',
				'<span>+20</span> mining encumbrance'
			],
			[
				'<span>+50</span> stamina damage from melee weapon light and heavy attacks',
				'<span>-10%</span> decrease in weight of mined of mined items'
			],
			[
				'<span>+10%</span> damage to stunned, slowed, or rooted enemies.',
				'<span>+10%</span> mining speed'
			],
			[
				'Stamina regen continues while performing light and heavy attacks with a melee weapon',
				'<span>+10%</span> yield increase when mining'
			],
			[
				'Light and heavy attacks with melee weapons gain <span>GRIT</span>',
				'<span>25%</span> chance to mine ore in a single swing'
			]
		]
	},
	dex: {
		name: 'dexterity',
		title: 'Dexterity',
		type: 'Ranged focused',
		primary: [weapons.bow.name, weapons.rapier.name, weapons.spear.name, weapons.musket.name],
		secondary: [weapons.straightSword.name, weapons.hatchet.name],
		bonuses: [
			['+5% chance to critical hit', '+10 skinning speed'],
			['+5 thrust damage', '+20% haste for 3s after skinning'],
			['Dodging cost 10 less stamina', '-10% decrease in weight of skinned items'],
			['10% bonus backstab and headshot damage', '+10% skinning speed'],
			[
				'+10% bonus critical hit damage on stunned, slowed, or rooted enemies.',
				'+10% yield yeild increase when skinning'
			],
			['Guaranteed critical hit after a dodge roll', 'Ammo has a 15% chance of being returned']
		]
	},
	int: {
		name: 'intelligence',
		title: 'Intelligence',
		bonuses: []
	},
	foc: {
		name: 'focus',
		title: 'Focus',
		bonuses: []
	},
	con: {
		name: 'constitution',
		title: 'Constitution',
		bonuses: []
	}
};
