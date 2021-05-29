const CDN = 'https://cdn.newworldfans.com/db_images/db/abilities';
export const THROWING = {
	'1_1': {
		required: null,
		row: 1,
		name: 'Rending Throw',
		type: 'major',
		img: `${CDN}/hatchetability2.png`
	},
	'1_2': {
		required: null,
		row: 1,
		name: 'Aimed Throw',
		type: 'minor',
		img: `${CDN}/hatchetability1.png`
	},
	'1_4': {
		required: null,
		row: 1,
		name: 'Critical Throw',
		type: 'minor',
		img: `${CDN}/hatchetpassive3.png`
	},
	'2_1': {
		required: 'Rending Throw',
		row: 2,
		name: 'Targeted Impact',
		type: 'minor',
		img: `${CDN}/firestaffability6_mod2.png`
	},
	'2_3': {
		required: null,
		row: 2,
		name: 'Social Distancing',
		type: 'major',
		img: `${CDN}/hatchetability2_mod1.png`
	},
	'2_4': {
		required: 'Critical Throw',
		row: 2,
		name: 'On Fire',
		type: 'minor',
		img: `${CDN}/hatchetpassive2.png`
	},
	'2_5': {
		required: 'Critical Throw',
		row: 2,
		name: 'Rejuvinating Crits',
		type: 'minor',
		img: `${CDN}/lifestaffpassive4.png`,
		etc: ['bend-left']
	},
	'3_1': {
		required: 'Targeted Impact',
		row: 3,
		name: 'Opportunistic',
		type: 'minor',
		img: `${CDN}/lifestaffability6_mod1.png`
	},
	'3_2': {
		required: null,
		row: 3,
		name: 'Refreshing Throws',
		type: 'minor',
		img: `${CDN}/hatchetpassive1.png`
	},
	'3_3': {
		required: 'Social Distancing',
		row: 3,
		name: 'Quick Power',
		type: 'minor',
		img: `${CDN}/greataxe_reaperpass5_pursuit.png`
	},
	'3_5': {
		required: null,
		row: 3,
		name: 'Infected Throw',
		type: 'major',
		img: `${CDN}/hatchetability3.png`
	},
	'4_3': {
		required: 'Quick Power',
		row: 4,
		name: 'Stay Back',
		type: 'minor',
		img: `${CDN}/musketpassive6.png`
	},
	'4_4': {
		required: null,
		row: 4,
		name: 'Exploitation',
		type: 'minor',
		img: `${CDN}/hatchetpassive4.png`
	},
	'4_5': {
		required: 'Infected Throw',
		row: 4,
		name: 'Mortal Power',
		type: 'minor',
		img: `${CDN}/hatchetability3_mod2.png`
	},
	'5_1': {
		required: 'Opportunistic',
		row: 5,
		name: 'Second Wind',
		type: 'minor',
		img: `${CDN}/hatchetability5_mod4.png`,
		etc: ['double-up']
	},
	'5_2': {
		required: null,
		row: 5,
		name: 'Boot and Rally',
		type: 'minor',
		img: `${CDN}/rapier_ability6mod1_breath.png`
	},
	'5_4': {
		required: null,
		row: 5,
		name: 'Adrenaline Rush',
		type: 'minor',
		img: `${CDN}/bowpassive5.png`
	},
	'5_5': {
		required: 'Mortal Power',
		row: 5,
		name: 'Aerial Transmission',
		type: 'minor',
		img: `${CDN}/bowability5.png`
	},
	'6_3': {
		required: 14,
		row: 6,
		name: 'Persistent Hinderance',
		type: 'ultimate',
		img: `${CDN}/lifestaffpassive7.png`
	}
};

export const BERZERKER = {
	'1_2': {
		required: null,
		name: 'Enraged Strikes',
		type: 'minor',
		img: `${CDN}/hatchetability3_mod2.png`
	},
	'1_3': {
		required: null,
		name: 'Berserk',
		type: 'major',
		img: `${CDN}/hatchetability5.png`
	},
	'1_4': {
		required: null,
		name: 'Accumulated Power',
		type: 'minor',
		img: `${CDN}/firestaffability4_mod1.png`
	},
	'2_1': {
		required: null,
		name: 'Feral Rush',
		type: 'major',
		img: `${CDN}/hatchetability4.png`
	},
	'2_3': {
		required: 'Berserk',
		name: 'On The Hunt',
		type: 'minor',
		img: `${CDN}/hatchetability5_mod1.png`
	},
	'2_4': {
		required: 3,
		name: 'Relentless Fury',
		type: 'minor',
		img: `${CDN}/lifestaffability6_mod1.png`
	},
	'2_5': {
		required: 3,
		name: 'Desperate Refresh',
		type: 'minor',
		img: `${CDN}/swordability6_mod1.png`
	},
	'3_1': {
		required: 'Feral Rush',
		name: 'Dispatch',
		type: 'minor',
		img: `${CDN}/hatchetability3_mod2.png`
	},
	'3_2': {
		required: 5,
		name: 'Against All Odds',
		type: 'minor',
		img: `${CDN}/hatchetpassive2.png`
	},
	'3_3': {
		required: 'On The Hunt',
		name: 'Berserking Refresh',
		type: 'minor',
		img: `${CDN}/hatchetability6_mod1.png`
	},
	'3_5': {
		required: 5,
		name: 'Raging Torrent',
		type: 'major',
		img: `${CDN}/hatchetability1_mod3.png`
	},
	'4_1': {
		required: 'Dispatch',
		name: 'Crippling Strikes',
		type: 'minor',
		img: `${CDN}/hatchetability5_mod2.png`
	},
	'4_3': {
		required: 'Berserking Refresh',
		name: 'Berserking Purge',
		type: 'minor',
		img: `${CDN}/hatchetability6.png`
	},
	'4_4': {
		required: 9,
		name: 'Fortifying Strikes',
		type: 'minor',
		img: `${CDN}/hatchetpassive4.png`
	},
	'4_5': {
		required: 'Raging Torrent',
		name: 'Aggressive Approach',
		type: 'minor',
		img: `${CDN}/greataxe_reaperpass5_pursuit.png`
	},
	'5_2': {
		required: 10,
		name: 'Frenzied Purge',
		type: 'minor',
		img: `${CDN}/hatchetability6.png`
	},
	'5_3': {
		required: 'Berserking Purge',
		name: 'Uninterruptible Berserk',
		type: 'minor',
		img: `${CDN}/hatchetability5_mod2.png`
	},
	'5_5': {
		required: 10,
		name: 'Final Blow',
		type: 'minor',
		img: `${CDN}/hatchetpassive2.png`
	},
	'6_3': {
		required: 11,
		name: 'Defy Death',
		type: 'ult',
		img: `${CDN}/hatchetability5_mod5.png`
	}
};
