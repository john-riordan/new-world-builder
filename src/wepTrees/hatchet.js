const CDN = 'https://cdn.newworldfans.com/db_images/db/abilities';
export const BERZERKER = {
	'1_2': {
		required: null,
		name: 'Enraged Strikes',
		row: 1,
		type: 'minor',
		img: `${CDN}/hatchetability3_mod2.png`,
		description: `If target is below 30% health. Light and Heavy attacks deal 20% more damage.`
	},
	'1_3': {
		required: null,
		row: 1,
		name: 'Berserk',
		type: 'major',
		img: `${CDN}/hatchetability5.png`,
		description: `Triggers a Berserk Mode that increases all attack damage by 20% while active. Berserk Mode will be active for 15 seconds.
		<br /><br />
		Taunt Gem Compatible: If you have a Carnelian gem equiped in your hatchet, This ability cause a 8s taunts to all enemies within 8m (Taunt causes monsters to focus only on you).`,
		cooldown: 15
	},
	'1_4': {
		required: null,
		row: 1,
		name: 'Accumulated Power',
		type: 'minor',
		img: `${CDN}/firestaffability4_mod1.png`,
		description: `After 3 successful light attacks against the same target: gain Empower, granting a 30% damage increase for 3 seconds or until the next attack.`
	},
	'2_1': {
		required: null,
		row: 2,
		name: 'Feral Rush',
		type: 'major',
		img: `${CDN}/hatchetability4.png`,
		description: `A sprinting melee attack that causes the player to leap forward, hitting twice. The first hit deals 100% and the 2nd deals 115% weapon damage.`,
		cooldown: 12
	},
	'2_3': {
		required: 'Berserk',
		row: 2,
		name: 'On The Hunt',
		type: 'minor',
		img: `${CDN}/hatchetability5_mod1.png`,
		description: `Increases movement speed by 20% while in Berserk Mode.`
	},
	'2_4': {
		required: 3,
		row: 2,
		name: 'Relentless Fury',
		type: 'minor',
		img: `${CDN}/lifestaffability6_mod1.png`,
		description: `After a successful Heavy attack: gain Empower granting a 30% damage increase for 3 seconds or after 4 attacks.`
	},
	'2_5': {
		required: 3,
		row: 2,
		name: 'Desperate Refresh',
		type: 'minor',
		img: `${CDN}/swordability6_mod1.png`,
		description: `All cooldowns are reduced by 5% when hitting an enemy with an attack while your HP is below 30%`
	},
	'3_1': {
		required: 'Feral Rush',
		row: 3,
		name: 'Dispatch',
		type: 'minor',
		img: `${CDN}/hatchetability3_mod2.png`,
		description: `If target is below 30% health, Feral Rush deals 20% more damage.`
	},
	'3_2': {
		required: 5,
		row: 3,
		name: 'Against All Odds',
		type: 'minor',
		img: `${CDN}/hatchetpassive2.png`,
		description: `Increase base damage by 10% for every enemy within 5 meters of player.`
	},
	'3_3': {
		required: 'On The Hunt',
		row: 3,
		name: 'Berserking Refresh',
		type: 'minor',
		img: `${CDN}/hatchetability6_mod1.png`,
		description: `When Berserking ends, heal yourself for 30% your max health.`
	},
	'3_5': {
		required: 5,
		row: 3,
		name: 'Raging Torrent',
		type: 'major',
		img: `${CDN}/hatchetability1_mod3.png`,
		description: `Perform four fast attacks each dealing 80% weapon damage.`,
		cooldown: 15
	},
	'4_1': {
		required: 'Dispatch',
		row: 4,
		name: 'Crippling Strikes',
		type: 'minor',
		img: `${CDN}/hatchetability5_mod2.png`,
		description: `If Feral Rush hits a target in the back, it roots them immobilizing the target for 2 seconds.`
	},
	'4_3': {
		required: 'Berserking Refresh',
		row: 4,
		name: 'Berserking Purge',
		type: 'minor',
		img: `${CDN}/hatchetability6.png`,
		description: `Triggering Berserk removes all Crowd Control effects (stuns, slow, roots) from the player.`
	},
	'4_4': {
		required: 9,
		row: 4,
		name: 'Fortifying Strikes',
		type: 'minor',
		img: `${CDN}/hatchetpassive4.png`,
		description: `Hitting the asme target with 3 light attacks grants Fortify, increasing damage absorbption by 15% for 3 seconds.`
	},
	'4_5': {
		required: 'Raging Torrent',
		row: 4,
		name: 'Aggressive Approach',
		type: 'minor',
		img: `${CDN}/greataxe_reaperpass5_pursuit.png`,
		description: `Hitting a target with Raging Torrent grants Haste, increasing movement speed by 20% for 6 seconds.`
	},
	'5_2': {
		required: 10,
		row: 5,
		name: 'Frenzied Purge',
		type: 'minor',
		img: `${CDN}/hatchetability6.png`,
		description: `When hitting an enemy while below 30% health: Remove all Bleed, Burn, and Poison effects from the player. 60s cooldown.`
	},
	'5_3': {
		required: 'Berserking Purge',
		row: 5,
		name: 'Uninterruptible Berserk',
		type: 'minor',
		img: `${CDN}/hatchetability5_mod2.png`,
		description: `While in Berserk, your attacks are uninterruptible during Berserk and you cannot be staggered.`
	},
	'5_5': {
		required: 10,
		row: 5,
		name: 'Final Blow',
		type: 'minor',
		img: `${CDN}/hatchetpassive2.png`,
		description: `Press Light Attack at the end of raging torrent to deal a final attack dealing 115% weapon damage.`
	},
	'6_3': {
		required: 11,
		row: 6,
		name: 'Defy Death',
		type: 'ult',
		img: `${CDN}/hatchetability5_mod5.png`,
		description: `When you receive lethal damage: Avoid death, reduce to 50 HP and gain immortality for 3 seconds (75s cooldown).`
	}
};

export const THROWING = {
	'1_1': {
		required: null,
		row: 1,
		name: 'Rending Throw',
		type: 'major',
		img: `${CDN}/hatchetability2.png`,
		description: `Throw an axe dealing 110% weapon damage and applying Rend, reducing target's damage absorption by 10% for 4s.`,
		cooldown: 15
	},
	'1_2': {
		required: null,
		row: 1,
		name: 'Aimed Throw',
		type: 'minor',
		img: `${CDN}/hatchetability1.png`,
		description: `Replaces block with an Aimed Throw that deals 90% weapon damage. Hold RMB to enter aimed stance. Each throw consumes 30 Stamina.`
	},
	'1_4': {
		required: null,
		row: 1,
		name: 'Critical Throw',
		type: 'minor',
		img: `${CDN}/hatchetpassive3.png`,
		description: `Thrown axes are now capable of triggering headshot or random critical hit.
		<br /><br />
		Also increases critical hit chance of all attacks by 5%.
		`
	},
	'2_1': {
		required: 'Rending Throw',
		row: 2,
		name: 'Targeted Impact',
		type: 'minor',
		img: `${CDN}/firestaffability6_mod2.png`,
		description: `Rend increased to 20% and duration extended to 6 seconds if further than 8 meters from target.`
	},
	'2_3': {
		required: null,
		row: 2,
		name: 'Social Distancing',
		type: 'major',
		img: `${CDN}/hatchetability2_mod1.png`,
		description: `Throw an axe forward and dodge backwards, dealing 120% weapon damage and slowing targets by 15% for 3 seconds.`,
		cooldown: 15
	},
	'2_4': {
		required: 'Critical Throw',
		row: 2,
		name: 'On Fire',
		type: 'minor',
		img: `${CDN}/hatchetpassive2.png`,
		description: `Every 3rd successfully thrown axe is a guaranteed Crit.`
	},
	'2_5': {
		required: 'Critical Throw',
		row: 2,
		name: 'Rejuvinating Crits',
		type: 'minor',
		img: `${CDN}/lifestaffpassive4.png`,
		description: `Successful Critical Hits with Light Attacks or Aimed Throws regenerates 20 Stamina.`,
		etc: ['bend-left']
	},
	'3_1': {
		required: 'Targeted Impact',
		row: 3,
		name: 'Opportunistic',
		type: 'minor',
		img: `${CDN}/lifestaffability6_mod1.png`,
		description: `Rending Throw deals an additional 20% damage if the target already has an active debuff.`
	},
	'3_2': {
		required: null,
		row: 3,
		name: 'Refreshing Throws',
		type: 'minor',
		img: `${CDN}/hatchetpassive1.png`,
		description: `Light Attacks and Aimed Throws against targets with an active debuff reduces all cooldowns by 5%.`
	},
	'3_3': {
		required: 'Social Distancing',
		row: 3,
		name: 'Quick Power',
		type: 'minor',
		img: `${CDN}/greataxe_reaperpass5_pursuit.png`,
		description: `Your Movement Speed is increased to 30% for 3s if Social Distancing hit a target with an active debuff.`
	},
	'3_5': {
		required: null,
		row: 3,
		name: 'Infected Throw',
		type: 'major',
		img: `${CDN}/hatchetability3.png`,
		description: `Throw an axe that deals 130% weapon damage and triggers Disease and weakens target for 5s.

		(Disease reduces targets healing efficiency by 30%)
		(Weaken reduces target's damage by 10%).`,
		cooldown: 15
	},
	'4_3': {
		required: 'Quick Power',
		row: 4,
		name: 'Stay Back',
		type: 'minor',
		img: `${CDN}/musketpassive6.png`,
		description: `Increses Social Distancing slow to 25% for 4 seconds.`
	},
	'4_4': {
		required: null,
		row: 4,
		name: 'Exploitation',
		type: 'minor',
		img: `${CDN}/hatchetpassive4.png`,
		description: `All attacks deal 15% additional damage to targets with an active debuff.`
	},
	'4_5': {
		required: 'Infected Throw',
		row: 4,
		name: 'Mortal Power',
		type: 'minor',
		img: `${CDN}/hatchetability3_mod2.png`,
		description: `Increase Infected Throw's disease and weaken duration to 8s on targets below 30% health.`
	},
	'5_1': {
		required: 'Opportunistic',
		row: 5,
		name: 'Second Wind',
		type: 'minor',
		img: `${CDN}/hatchetability5_mod4.png`,
		description: `Using Rending Throw on a target with an active debuff reduces the cooldown by 20%.`,
		etc: ['double-up']
	},
	'5_2': {
		required: null,
		row: 5,
		name: 'Boot and Rally',
		type: 'minor',
		img: `${CDN}/rapier_ability6mod1_breath.png`,
		description: `Light Attacks and Aimed Throws regenerate 20 stamina when hitting targets with an active debuff.`
	},
	'5_4': {
		required: null,
		row: 5,
		name: 'Adrenaline Rush',
		type: 'minor',
		img: `${CDN}/bowpassive5.png`,
		description: `Dodging within 2 seconds of triggering an ability consumes 25% less stamina.`
	},
	'5_5': {
		required: 'Mortal Power',
		row: 5,
		name: 'Aerial Transmission',
		type: 'minor',
		img: `${CDN}/bowability5.png`,
		description: `Infected Throw creates a 3 meter disease AoE on impact that lingers in place for 3 seconds.`
	},
	'6_3': {
		required: 14,
		row: 6,
		name: 'Persistent Hinderance',
		type: 'ultimate',
		img: `${CDN}/lifestaffpassive7.png`,
		description: `Successful throwing axe hits extend all hatchet debuff durations by 2 seconds.`
	}
};
