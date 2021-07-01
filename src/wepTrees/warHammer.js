const CDN = 'https://cdn.newworldfans.com/db_images/db/abilities';
export const JUGGERNAUT = {
	'1_1': {
		required: null,
		row: 1,
		name: 'Armor Breaker',
		type: 'major',
		img: `${CDN}/warhammerability1.png`,
		description: `A Powerful swing that penetrates 35% of the Target's armor and deals 120% Weapon damage.`,
		cooldown: 12
	},
	'1_2': {
		required: null,
		row: 1,
		name: 'Epitome Of Bonk!',
		type: 'minor',
		img: `${CDN}/musketpassive11.png`,
		description: `Increase Armor Penetration by 10% for all War Hammer Standard attacks.`
	},
	'1_4': {
		required: null,
		row: 1,
		name: 'Hammer Time',
		type: 'minor',
		img: `${CDN}/firestaffability2_mod1.png`,
		description: `Gain Empower on a Heavy Attack, increasing attack damage by 10% for 2 seconds.`
	},
	'2_1': {
		required: 'Armor Breaker',
		row: 2,
		name: 'Indomitable',
		type: 'minor',
		img: `${CDN}/warhammerability1_mod1.png`,
		description: `Armor Breaker gains Grit, making the attack unstoppable.`
	},
	'2_2': {
		required: null,
		row: 2,
		name: 'Exhaustive Attacks',
		type: 'minor',
		img: `${CDN}/warhammerability1_mod1.png`,
		description: `All War Hammer abilities apply Exhaust, slowing target's stamina regeneration by 10% for 3 seconds (does not stack).`
	},
	'2_3': {
		required: null,
		row: 2,
		name: 'Mighty Gavel',
		type: 'major',
		img: `${CDN}/warhammerability3.png`,
		description: `An overhead leaping attack that crushes down on enemies dealing 120% weapon damage.`,
		cooldown: 22
	},
	'2_5': {
		required: null,
		row: 2,
		name: 'Hardened Steel',
		type: 'minor',
		img: `${CDN}/firestaffability2_mod1.png`,
		description: `Adds Grit to War Hammer Heavy Attacks making them uninterruptible.`
	},
	'3_1': {
		required: 'Indomitable',
		row: 3,
		name: 'Lasting Trauma',
		type: 'minor',
		img: `${CDN}/spear_perforate_bonusrend.png`,
		description: `Armor Breaker applies Rend, reducing damage absorbtion by 20% for 2 seconds.`
	},
	'3_3': {
		required: 'Mighty Gavel',
		row: 3,
		name: 'Summary Judgment',
		type: 'minor',
		img: `${CDN}/swordability1_mod3.png`,
		description: `Increase damage done by Mighty Gavel attack by 20% to targets under 30% health.`
	},
	'3_4': {
		required: null,
		row: 3,
		name: 'Contemption',
		type: 'minor',
		img: `${CDN}/swordpassive14.png`,
		description: `Increase damage done with Heavy Attacks by 15% to targets under 30% health.`
	},
	'3_5': {
		required: null,
		row: 3,
		name: 'Wrecking Ball',
		type: 'major',
		img: `${CDN}/warhammerability6.png`,
		description: `Strike the ground around a target with Hammer dealing 100% weapon damage and flattening the enemy.`,
		cooldown: 15
	},
	'4_2': {
		required: null,
		row: 4,
		name: 'Quick Recovery',
		type: 'minor',
		img: `${CDN}/warhammerability2_mod4.png`,
		description: `Reduce War Hammer cooldowns by 7% with Heavy Attacks.`
	},
	'4_3': {
		required: 'Summary Judgment',
		row: 4,
		name: 'Impact Fracture',
		type: 'minor',
		img: `${CDN}/warhammerability1_mod1.png`,
		description: `Increase stamina damage dealt by Mighty Gavel by 25%.`
	},
	'4_5': {
		required: 'Wrecking Ball',
		row: 4,
		name: 'Safety Measures',
		type: 'minor',
		img: `${CDN}/warhammerability6_mod1.png`,
		description: `On a successful hit, player obtains Fortify, granting 20% damage resistance for 4 seconds.`
	},
	'5_1': {
		required: 'Lasting Trauma',
		row: 5,
		name: 'Opening Act',
		type: 'minor',
		img: `${CDN}/hatchetability3_mod2.png`,
		description: `Increase Armor Breaker damage by 15% against targets with full health.`,
		etc: ['double-up']
	},
	'5_3': {
		required: 'Impact Fracture',
		row: 5,
		name: 'Expedite',
		type: 'minor',
		img: `${CDN}/warhammerability3_mod3.png`,
		description: `After a successful Mighty Gavel attack gain haste, increasing your movement speed by 30% for 3 seconds.`
	},
	'5_4': {
		required: null,
		row: 5,
		name: 'Power Through Pain',
		type: 'minor',
		img: `${CDN}/lifestaffability6_mod2.png`,
		description: `For 1 second after taking damage, deal 20% more damage.`
	},
	'5_5': {
		required: 'Safety Measures',
		row: 5,
		name: 'Breathing Room',
		type: 'minor',
		img: `${CDN}/firestaffability3_mod2.png`,
		description: `All enemies near the target hit with Wrecking Ball are pushed by 2 meters.`
	},
	'6_3': {
		required: 'Expedite',
		row: 6,
		name: 'Justice for All',
		type: 'ultimate',
		img: `${CDN}/warhammerability3_mod4.png`,
		description: `Press Basic Attack during Mighty Gavel to add a second attack that deals 110% weapon damage.`
	}
};

export const CROWD_CRUSHER = {
	'1_2': {
		required: null,
		row: 1,
		name: 'Outnumbered',
		type: 'minor',
		img: `${CDN}/swordpassive14.png`,
		description: `Increase Physical and Elemental armor by 5% for every enemy within 5 meters.`
	},
	'1_3': {
		required: null,
		row: 1,
		name: 'Clear Out',
		type: 'major',
		img: `${CDN}/warhammerability2.png`,
		description: `A wide swing that knocks enemies back 4 meters to create distance, deals 110% weapon damage.`,
		cooldown: 15
	},
	'1_4': {
		required: null,
		row: 1,
		name: 'I Can Do This All Day',
		type: 'minor',
		img: `${CDN}/spear_vaultkick_empoweronblockbreak.png`,
		description: `Reduce Stamina consumption by 30.0% when Blocking Melee Attacks.`
	},
	'2_1': {
		required: null,
		row: 2,
		name: 'Shockwave',
		type: 'major',
		img: `${CDN}/warhammerability5.png`,
		description: `Slam the Hammer into the ground causing a 3.0 meter radius AOE earthquake that deals 90.0% weapon damage. Applies Stun to all impacted targets for 1.75 Seconds.
		<br /><br />
		Taunt Gem Compatible: If you have a Carnelian gem equiped in your war hammer, This ability cause a 6.0s taunts when it hits. (Taunt causes monsters to focus only on you.)`,
		cooldown: 20
	},
	'2_3': {
		required: 'Clear Out',
		row: 2,
		name: 'Power Cleaner',
		type: 'minor',
		img: `${CDN}/warhammerability2_mod1.png`,
		description: `Hitting a target with Clear Out grants Fortify, providing a 10% defense bonus for 4 seconds to all friendlies within 6 meters.`
	},
	'2_4': {
		required: null,
		row: 2,
		name: 'Guarded Sprint',
		type: 'minor',
		img: `${CDN}/musketpassive2.png`,
		description: `Reduce damage taken by 10% while sprinting.`
	},
	'2_5': {
		required: null,
		row: 2,
		name: 'Acceleration',
		type: 'minor',
		img: `${CDN}/warhammerability2_mod4.png`,
		description: `Reduce War Hammer cooldowns by 7% when using light attacks against targets with an active debuff.`
	},
	'3_1': {
		required: 'Shockwave',
		row: 3,
		name: 'Frailty',
		type: 'minor',
		img: `${CDN}/warhammerability5_mod1.png`,
		description: `The trauma of the attack causes Weaken, decreasing the damage dealt from the target's attacks by 10% for 5 seconds.`
	},
	'3_2': {
		required: null,
		row: 3,
		name: 'Facilitated Expedeition',
		type: 'minor',
		img: `${CDN}/warhammerability3_mod3.png`,
		description: `Gain haste increasing movement speed by 10% for 2s after hitting a target with an active debuff.`
	},
	'3_4': {
		required: null,
		row: 3,
		name: 'Concussive Impact',
		type: 'minor',
		img: `${CDN}/warhammerability2_mod3.png`,
		description: `+15% damage against targets affected by War Hammer debuffs.`
	},
	'3_5': {
		required: null,
		row: 3,
		name: 'Path of Destiny',
		type: 'major',
		img: `${CDN}/warhammerability4.png`,
		description: `A powerful ground strike that erupts a linear wave of energy in front of the player, dealing 125% weapon damage to all targets in its path.`,
		cooldown: 22
	},
	'4_1': {
		required: 'Frailty',
		row: 4,
		name: 'Meteoric Crater',
		type: 'minor',
		img: `${CDN}/warhammerability5_mod2.png`,
		description: `Expands the effective range of the Shockwave to a 4 meter radius.`
	},
	'4_3': {
		required: 'Power Cleaner',
		row: 4,
		name: 'Clean and Refreshed',
		type: 'minor',
		img: `${CDN}/warhammerability2_mod4.png`,
		description: `Clear Out's cooldown is reduced by 5% per enemy hit with the ability.`,
		etc: ['double-up']
	},
	'4_4': {
		required: null,
		row: 4,
		name: 'Prevailing Spirit',
		type: 'minor',
		img: `${CDN}/swordpassive10.png`,
		description: `Regain 35% of damage dealt as health when using a Crowd Crusher ability.`
	},
	'4_5': {
		required: 'Path of Destiny',
		row: 4,
		name: 'Seismic Waves',
		type: 'minor',
		img: `${CDN}/warhammerability4_mod2.png`,
		description: `Path of Destiny now staggers all targets in its path.`
	},
	'5_2': {
		required: null,
		row: 5,
		name: 'Resurgence',
		type: 'minor',
		img: `${CDN}/swordpassive11.png`,
		description: `After 2 Light Attacks with the War Hammer debuff durations on you are reduced by 25%. Can only trigger one every 5 seconds.`
	},
	'5_3': {
		required: 'Clean and Refreshed',
		row: 5,
		name: 'Swing Away',
		type: 'minor',
		img: `${CDN}/warhammerability3_mod3.png`,
		description: `Using Clear Out on a target grants Haste, increasing movement speed by 30% for 3 seconds.`
	},
	'5_5': {
		required: 'Seismic Waves',
		row: 5,
		name: 'Stimulated Reduction',
		type: 'minor',
		img: `${CDN}/warhammerability2_mod4.png`,
		description: `Ability cooldowns are reduced by 5% for each enemy hit with Path of Destiny.`
	},
	'6_3': {
		required: null,
		row: 6,
		name: 'Aftershock',
		type: 'ultimate',
		img: `${CDN}/warhammerability2_mod4.png`,
		description: `Ability cooldowns are reduced by 5% for each enemy hit with Path of Destiny.`
	}
};
