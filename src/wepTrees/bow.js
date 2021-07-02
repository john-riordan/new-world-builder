const CDN = 'https://cdn.newworldfans.com/db_images/db/abilities';
export const SKIRMISHER = {
	'1_3': {
		required: null,
		row: 1,
		name: 'Evade Shot',
		type: 'major',
		img: `${CDN}/bowability2.png`,
		description: `Leap back 5m and shoot an arrow dealing 125% weapon damage.`,
		cooldown: 15
	},
	'1_4': {
		required: null,
		row: 1,
		name: 'Evasive Tactics',
		type: 'minor',
		img: `${CDN}/bowpassive5.png`,
		description: `After you dodge deal 20% more damage for 5s.`
	},
	'1_5': {
		required: null,
		row: 1,
		name: 'Catch Me If You Can',
		type: 'minor',
		img: `${CDN}/greataxe_reaperpass5_pursuit.png`,
		description: `If surrounded by 3 or more foes within 3m of you gain 33% Haste (movement speed).`
	},
	'2_2': {
		required: null,
		row: 2,
		name: 'Impale',
		type: 'minor',
		img: `${CDN}/bowability6_mod2.png`,
		description: `If you hit a foe with 100% health cause 30% slow for 2s.`
	},
	'2_3': {
		required: 'Evade Shot',
		row: 2,
		name: 'Evasive Knockback',
		type: 'minor',
		img: `${CDN}/bowability2_mod1.png`,
		description: `Evade Shot causes knockback of 2m.`
	},
	'2_4': {
		required: null,
		row: 2,
		name: 'Evasive Knockback',
		type: 'minor',
		img: `${CDN}/rapier_ability4mod2_priority.png`,
		description: `Evade Shot causes knockback of 2m.`
	},
	'2_5': {
		required: null,
		row: 2,
		name: 'Rain of Arrows',
		type: 'major',
		img: `${CDN}/bowability6.png`,
		description: `Shoot a barrage of arrows 7 meters wide that deals 150% weapon damage.`
	},
	'3_1': {
		required: null,
		row: 3,
		name: 'Rapid Shot',
		type: 'major',
		img: `${CDN}/bowability1.png`,
		description: `Shoot 3 consecutive arrows. The first two dealing 100% weapon damage each. The last shot causes a knockback and deal 125% weapon damage.`,
		cooldown: 20
	},
	'3_2': {
		required: null,
		row: 3,
		name: 'Dodge and Weave',
		type: 'minor',
		img: `${CDN}/bowpassive12.png`,
		description: `After you dodge gain 20% haste (movement speed) for 5 seconds.`
	},
	'3_4': {
		required: null,
		row: 3,
		name: `Hunter's Insight`,
		type: 'minor',
		img: `${CDN}/bowpassive8.png`,
		description: `Hitting a foe with a debuff grants 5 stamina.`
	},
	'3_5': {
		required: 'Rain of Arrows',
		row: 3,
		name: `Barbed Arrows`,
		type: 'minor',
		img: `${CDN}/rapier_bloodmasterpass4_bleeddamage.png`,
		description: `Rain of Arrows causes bleed dealing 85% weapon damage over 12s (max 3 stacks).`
	},
	'4_1': {
		required: 'Poison Shot',
		row: 4,
		name: `Infected Arrows`,
		type: 'minor',
		img: `${CDN}/bowability5_mod1.png`,
		description: `Poison Shot's poison now does 12% weapon damage per second for 20s.`
	},
	'4_3': {
		required: 'Evasive Knockback',
		row: 4,
		name: `Go the Distance`,
		type: 'minor',
		img: `${CDN}/bowability2_mod2.png`,
		description: `Evase Shot grants you 5s of 33% haste (movement speed).`,
		etc: ['double-up']
	},
	'4_4': {
		required: null,
		row: 4,
		name: `Archer's Speed`,
		type: 'minor',
		img: `${CDN}/firestaffability4_mod3.png`,
		description: `Gain 20s haste for 5s when you swap to your bow (10s cooldown).`
	},
	'5_1': {
		required: 'Infected Arrows',
		row: 5,
		name: `Direct Hit`,
		type: 'minor',
		img: `${CDN}/hatchetability1.png`,
		description: `If you directly hit a target with Poison Shot it deal 200% more damage.`
	},
	'5_2': {
		required: null,
		row: 5,
		name: `Mark`,
		type: 'minor',
		img: `${CDN}/firestaffability4_mod1.png`,
		description: `Deal 10% more damager to foes suffering from a debuff.`
	},
	'5_4': {
		required: null,
		row: 5,
		name: `Battle Precision`,
		type: 'minor',
		img: `${CDN}/bowability5_mod2.png`,
		description: `Debuffs last 20% longer.`
	},
	'5_5': {
		required: 'Barbed Arrows',
		row: 5,
		name: `Hooked Arrows`,
		type: 'minor',
		img: `${CDN}/bowability6_mod2.png`,
		description: `Rain of Arrows causes a 30% slow for 12s.`,
		etc: ['double-up']
	},
	'6_3': {
		required: null,
		row: 6,
		name: `Knee Shot`,
		type: 'ultimate',
		img: `${CDN}/bowpassive7.png`,
		description: `Leg shots cause a 50% slow for 4s.`
	}
};

export const HUNTER = {
	'1_2': {
		required: null,
		row: 1,
		name: 'Long Range',
		type: 'minor',
		img: `${CDN}/bowpassive4.png`,
		description: `Deal 20% more damage to foes at least 10m away.`
	},
	'1_3': {
		required: null,
		row: 1,
		name: 'Penetrating Shot',
		type: 'major',
		img: `${CDN}/bowability3.png`,
		description: `Shoot an arrow dealing 150% weapon damage that passes through targets and continues for 100 meters.`,
		cooldown: 18
	},
	'1_4': {
		required: null,
		row: 1,
		name: 'Aim True',
		type: 'minor',
		img: `${CDN}/bowability4_mod1.png`,
		description: `Heavy attacks arrows fly faster and deal 30% more damage.`
	},
	'2_2': {
		required: null,
		row: 2,
		name: 'Finishing Shot',
		type: 'minor',
		img: `${CDN}/lifestaffpassive12.png`,
		description: `If your target is below 50% health deal 20% more damage.`
	},
	'2_3': {
		required: 'Penetrating Shot',
		row: 2,
		name: 'Blood Soaked Arrow',
		type: 'minor',
		img: `${CDN}/bowability3_mod1.png`,
		description: `Increase Penetrating Shot damage by 10% after each hit (max 50% damage).`
	},
	'2_4': {
		required: null,
		row: 2,
		name: 'Unbreakable Focus',
		type: 'minor',
		img: `${CDN}/swordpassive14.png`,
		description: `Receive 20% less damage while aiming.`
	},
	'2_5': {
		required: null,
		row: 2,
		name: 'Splinter Shot',
		type: 'major',
		img: `${CDN}/bowability4.png`,
		description: `Shoot an arrow out 10 meters it then splits into 3 arrows dealing 50% weapon damage.`,
		cooldown: 22
	},
	'3_1': {
		required: null,
		row: 3,
		name: 'Rapid Shot',
		type: 'major',
		img: `${CDN}/bowability1.png`,
		description: `Shoot 3 consecutive arrows. The first two dealing 100% weapon damage each. The last shot causes a knockback and deal 125% weapon damage.`,
		cooldown: 20
	},
	'3_3': {
		required: 'Blood Soaked Arrow',
		row: 3,
		name: 'Deep Strike',
		type: 'minor',
		img: `${CDN}/bowability3_mod2.png`,
		description: `Penetrating Shot deals 20% more damage to target 20m or more away.`
	},
	'3_4': {
		required: null,
		row: 3,
		name: 'Opening Strike',
		type: 'minor',
		img: `${CDN}/swordpassive5.png`,
		description: `Heavy attacks deal 20% more damage to foes iwth 100% health.`
	},
	'3_5': {
		required: 'Splinter Shot',
		row: 3,
		name: 'Scatter Shot',
		type: 'minor',
		img: `${CDN}/bowability4_mod2.png`,
		description: `Splinter Shot splits into 5 arrows.`
	},
	'4_1': {
		required: 'Rapid Shot',
		row: 4,
		name: 'Rapid Accuracy',
		type: 'minor',
		img: `${CDN}/bowability1_mod1.png`,
		description: `If all 3 arrows hit the same target Rapid shot's cooldown is reduced by 50%.`
	},
	'4_2': {
		required: null,
		row: 4,
		name: 'Surprise Attack',
		type: 'minor',
		img: `${CDN}/bowpassive2.png`,
		description: `Deal 20% extra damage if you haven't damage a for in the last 10s.`
	},
	'4_4': {
		required: null,
		row: 4,
		name: 'Arrow Range',
		type: 'minor',
		img: `${CDN}/musketability5.png`,
		description: `Increased arrow distance before gravity dropoff starts by 100%.`
	},
	'5_1': {
		required: 'Rapid Accuracy',
		row: 5,
		name: 'Final Blow',
		type: 'minor',
		img: `${CDN}/bowability1_mod2.png`,
		description: `The 3rd shot of Rapid Shot deals 25% extra damage.`
	},
	'5_2': {
		required: null,
		row: 5,
		name: 'Hawkeye',
		type: 'minor',
		img: `${CDN}/swordpassive13.png`,
		description: `When you land a headshot heal yourself for 10% of damage done.`
	},
	'5_4': {
		required: null,
		row: 5,
		name: 'Bullseye',
		type: 'minor',
		img: `${CDN}/musketpassive4.png`,
		description: `Bow critical strike chance increased by 10%.`
	},
	'5_5': {
		required: 'Scatter Shot',
		row: 5,
		name: 'Calculated',
		type: 'minor',
		img: `${CDN}/hatchetability5_mod4.png`,
		description: `Reduce the cooldown of Splinter Shot by 10%.`,
		etc: ['double-up']
	},
	'6_3': {
		required: null,
		row: 6,
		name: 'Concussion',
		type: 'ultimate',
		img: `${CDN}/musketpassive5.png`,
		description: `When you land a headshot, deal 20% more damage with a 100% chance to get your arrow back.`
	}
};
