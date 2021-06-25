const CDN = 'https://cdn.newworldfans.com/db_images/db/abilities';

export const SWORDMASTER = {
	'1_3': {
		required: null,
		row: 1,
		name: 'Whirling Blade',
		type: 'major',
		img: `${CDN}/swordability1.png`,
		description: `Deal 145% weapon damage to all enemies within 2 meters.`,
		cooldown: 15
	},
	'1_4': {
		required: null,
		row: 1,
		name: 'Empowered Stab',
		type: 'minor',
		img: `${CDN}/swordability3_mod2.png`,
		description: `Successful Heavy Attacks you 30% Empower for 5s.<br /><br />(Empower increases damage)`
	},
	'1_5': {
		required: null,
		row: 1,
		name: 'Achilles Heel',
		type: 'minor',
		img: `${CDN}/warhammerability2_mod2.png`,
		description: `The final attack in your light attack chain causes a 20% slows for 2s`
	},
	'2_1': {
		required: null,
		row: 2,
		name: 'Reverse Stab',
		type: 'major',
		img: `${CDN}/swordability2.png`,
		description: `A stab attack that deals 175% weapon damage.`,
		cooldown: 20
	},
	'2_2': {
		required: null,
		row: 2,
		name: 'Precision',
		type: 'minor',
		img: `${CDN}/swordpassive1.png`,
		description: `Swords critical strike chance increased by 10%`
	},
	'2_3': {
		required: 'Whirling Blade',
		row: 2,
		name: 'Opportunity',
		type: 'minor',
		img: `${CDN}/swordability1_mod2.png`,
		description: `Whirling Blade causes 20% Rend for 5s.<br /><br />(Rend reduces targets armor)`
	},
	'2_4': {
		required: null,
		row: 2,
		name: 'Freeing Justice',
		type: 'minor',
		img: `${CDN}/greataxe_ability4pass2_fatalattraction.png`,
		description: `Successfully hitting with a Heavy Attack causes you to lose all debuffs.`
	},
	'3_1': {
		required: 'Reverse Stab',
		row: 3,
		name: 'Unstoppable Stab',
		type: 'minor',
		img: `${CDN}/swordability2_mod1.png`,
		description: `Reverse Stab now has Grit, making the attack unstoppable.`
	},
	'3_2': {
		required: null,
		row: 3,
		name: 'Mobility',
		type: 'minor',
		img: `${CDN}/firestaffability4_mod3.png`,
		description: `Move 33% faster while blocking.`
	},
	'3_4': {
		required: null,
		row: 3,
		name: 'Counter Attack',
		type: 'minor',
		img: `${CDN}/rapier_ability4mod1_insult_to_injury.png`,
		description: `When you block an attack gain 10% increased damage for 20s.`
	},
	'3_5': {
		required: null,
		row: 3,
		name: 'Leaping Strike',
		type: 'major',
		img: `${CDN}/swordability3.png`,
		description: `Leap 4 meters and deal 125% weapon damage.`,
		cooldown: 25
	},
	'4_2': {
		required: null,
		row: 4,
		name: 'Opportunist',
		type: 'minor',
		img: `${CDN}/warhammerpassive2.png`,
		description: `Deal 20% more damage to to slowed enemies.`
	},
	'4_3': {
		required: 'Opportunity',
		row: 4,
		name: 'Tactical Strike',
		type: 'minor',
		img: `${CDN}/swordability1_mod1.png`,
		description: `Whirling Blade cooldown reduced by 10% for every enemy hit by Whirling Blade.`,
		etc: ['double-up']
	},
	'4_5': {
		required: 'Leaping Strike',
		row: 4,
		name: 'Final Strike',
		type: 'minor',
		img: `${CDN}/swordability3_mod1.png`,
		description: `If you hit a foe below 30% health deal 50% more damage`
	},
	'5_1': {
		required: 'Unstoppable Stab',
		row: 5,
		name: 'Tactician',
		type: 'minor',
		img: `${CDN}/swordability2_mod2.png`,
		description: `On successful hit with Reverse Stab, all Sword cooldowns are reduced by 25%.`,
		etc: ['double-up']
	},
	'5_2': {
		required: null,
		row: 5,
		name: 'Confidence',
		type: 'minor',
		img: `${CDN}/lifestaffpassive12.png`,
		description: `While health is full deal 15% more damage.`
	},
	'5_4': {
		required: null,
		row: 5,
		name: 'Critical Precision',
		type: 'minor',
		img: `${CDN}/rapier_evasionpass4_artofbattle.png`,
		description: `On critical hit can 20% haste for 5s.<br /><br />(Haste increases movement speed)`
	},
	'5_5': {
		required: null,
		row: 5,
		name: 'Cowardly Punishment',
		type: 'minor',
		img: `${CDN}/bowability6_mod2.png`,
		description: `If Leaping Strike hits a target in the back, slow the target for 8s.`
	},
	'6_3': {
		required: null,
		row: 6,
		name: 'Leadership',
		type: 'ultimate',
		img: `${CDN}/swordability7.png`,
		description: `While holding a sword all group members damage is increased by 10%.`
	}
};

export const DEFENDER = {
	'1_2': {
		required: null,
		row: 1,
		name: 'Sturdy Shield',
		type: 'minor',
		img: `${CDN}/swordpassive14.png`,
		description: `Shields provide 15% more armor.`
	},
	'1_3': {
		required: null,
		row: 1,
		name: 'Shield Rush',
		type: 'major',
		img: `${CDN}/swordability5.png`,
		description: `Rush Forward 5 meters knocking back foes and dealing 125% weapon damage.`,
		cooldown: 20
	},
	'1_4': {
		required: null,
		row: 1,
		name: 'Sturdy Grip',
		type: 'minor',
		img: `${CDN}/rapier_ability4mod1_insult_to_injury.png`,
		description: `Stamina damage is reduced by 25% when blocking a melee attack with a shield.`
	},
	'2_1': {
		required: null,
		row: 2,
		name: 'Shield Bash',
		type: 'major',
		img: `${CDN}/swordability4.png`,
		description: `Deals 50% weapon damage and stuns foes in front of you for 2s.<br /><br />Taunt gem compatible:<br />If you have a Carnelian gem equipped in your sword, this ability taunts for 6s to all enemies hit.`,
		cooldown: 25
	},
	'2_2': {
		required: null,
		row: 2,
		name: 'Elemental Resistance',
		type: 'minor',
		img: `${CDN}/swordpassive11.png`,
		description: `Reduce damage from all magical types by 10%.`
	},
	'2_4': {
		required: null,
		row: 2,
		name: 'Defensive Training',
		type: 'minor',
		img: `${CDN}/warhammerability1_mod1.png`,
		description: `When you block an attack gain 10% Fortify for for 5s.`
	},
	'2_5': {
		required: null,
		row: 2,
		name: 'High Grip',
		type: 'minor',
		img: `${CDN}/swordpassive8.png`,
		description: `Stamina damage is reduced by 25% when blocking a ranged attack with a shield.`
	},
	'3_1': {
		required: 'Shield Bash',
		row: 3,
		name: 'Intimidating Bash',
		type: 'minor',
		img: `${CDN}/warhammerability3_mod1.png`,
		description: `Shield bash gains greatly increased threat and 100% more damage.`
	},
	'3_2': {
		required: null,
		row: 3,
		name: 'One with the Shield',
		type: 'minor',
		img: `${CDN}/rapier_ability1mod1_pressure.png`,
		description: `When you block with a shield all shield cooldowns are reduced by 1%.`
	},
	'3_3': {
		required: 'Shield Rush',
		row: 3,
		name: 'Improved Rush',
		type: 'minor',
		img: `${CDN}/greataxe_ability5_maelstrom.png`,
		description: `On successful hit all enemies within 5m gain 10% Weaken for 4s.<br /><br />(Weaken reduces damage)`,
		etc: ['double-up']
	},
	'3_5': {
		required: null,
		row: 3,
		name: 'Final Stand',
		type: 'major',
		img: `${CDN}/swordability6.png`,
		description: `For 8s all incoming damage is reduced by 30%.<br /><br />Taunt gem compatible:<br />If you have a carnelian gem equipped in your sword, this ability taunts all enemies within 8m for 6s.`,
		cooldown: 45
	},
	'4_2': {
		required: null,
		row: 4,
		name: 'Final Blow',
		type: 'minor',
		img: `${CDN}/swordability3_mod2.png`,
		description: `The 3rd swing of your light attack deals 30% more damage and generates more threat.`
	},
	'4_4': {
		required: null,
		row: 4,
		name: 'Fortitude',
		type: 'minor',
		img: `${CDN}/swordpassive9.png`,
		description: `While holding a Sword, current and max health are increased by 10%.`
	},
	'4_5': {
		required: 'Final Stand',
		row: 4,
		name: 'Final Count Down',
		type: 'minor',
		img: `${CDN}/swordpassive7.png`,
		description: `If your health is above 50%, Final Stand's damage reduction is increased by 20%.`
	},
	'5_1': {
		required: 'Intimidating Bash',
		row: 5,
		name: 'Concussive Bash',
		type: 'minor',
		img: `${CDN}/swordability4_mod1.png`,
		description: `Shield Bash stun duration increased by 1s.`,
		etc: ['double-up']
	},
	'5_3': {
		required: 'Improved Rush',
		row: 5,
		name: 'Intimidating Rush',
		type: 'minor',
		img: `${CDN}/swordability5_mod1.png`,
		description: `On successful hit all enemies within 5m are slowed by 30% for 4s.`,
		etc: ['double-up']
	},
	'5_4': {
		required: null,
		row: 5,
		name: 'Recuperation',
		type: 'minor',
		img: `${CDN}/swordpassive13.png`,
		description: `All incoming healing and regeneration increased by 10%.`
	},
	'5_5': {
		required: 'Final Count Down',
		row: 5,
		name: 'Restoration',
		type: 'minor',
		img: `${CDN}/swordpassive10.png`,
		description: `Gain 15% of your max health when Final Stand ends.`
	},
	'6_3': {
		required: null,
		row: 6,
		name: 'Defensive Formation',
		type: 'ultimate',
		img: `${CDN}/firestaffability3_mod2.png`,
		description: `While blocking reduce damage to all allies within 2m by 30%.`
	}
};
