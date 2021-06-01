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
		bonuses: {
			50: ['+5% damage to melee weapon light attacks', '+10% mining speed'],
			100: ['+10% damage to melee weapon heavy attacks', '+20 mining encumbrance'],
			150: [
				'+50 stamina damage from melee weapon light and heavy attacks',
				'-10% decrease in weight of mined of mined items'
			],
			200: ['+10% damage to stunned, slowed, or rooted enemies.', '+10% mining speed'],
			250: [
				'Stamina regen continues while performing light and heavy attacks with a melee weapon',
				'+10% yield increase when mining'
			],
			300: [
				'Light and heavy attacks with melee weapons gain GRIT',
				'25% chance to mine ore in a single swing'
			]
		}
	},
	dex: {
		name: 'dexterity',
		title: 'Dexterity',
		type: 'Ranged focused',
		primary: [weapons.bow.name, weapons.rapier.name, weapons.spear.name, weapons.musket.name],
		secondary: [weapons.straightSword.name, weapons.hatchet.name],
		bonuses: {
			50: ['+5% chance to critical hit', '+10 skinning speed'],
			100: ['+5 thrust damage', '+20% haste for 3s after skinning'],
			150: ['Dodging cost 10 less stamina', '-10% decrease in weight of skinned items'],
			200: ['10% bonus backstab and headshot damage', '+10% skinning speed'],
			250: [
				'+10% bonus critical hit damage on stunned, slowed, or rooted enemies.',
				'+10% yield yeild increase when skinning'
			],
			300: ['Guaranteed critical hit after a dodge roll', 'Ammo has a 15% chance of being returned']
		}
	},
	int: {
		name: 'intelligence',
		title: 'Intelligence',
		bonuses: {}
	},
	foc: {
		name: 'focus',
		title: 'Focus',
		bonuses: {}
	},
	con: {
		name: 'constitution',
		title: 'Constitution',
		bonuses: {}
	}
};
