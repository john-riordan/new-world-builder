const CDN = 'https://cdn.newworldfans.com/db_images/db/abilities';
export const FIRE_MAGE = {
	'1_1': {
		required: null,
		row: 1,
		name: 'Pillar of Fire',
		type: 'major',
		img: `${CDN}/firestaffability2.png`,
		description: `A targeted spell that deals <b>134%</b> weapon damage.`,
		cooldown: 10,
		mana: 15
	},
	'1_2': {
		required: null,
		row: 1,
		name: 'Spell Focus',
		type: 'minor',
		img: `${CDN}/lifestaffability1_mod1.png`,
		description: `Heavy Attacks restore 5% of your max mana on hit.`
	},
	'1_4': {
		required: null,
		row: 1,
		name: 'Fiery Restoration',
		type: 'minor',
		img: `${CDN}/swordability1_mod1.png`,
		description: `Heavy Attacks reduce Fire Staff cooldowns by 10% on hit.`
	},
	'2_1': {
		required: 'Pillar of Fire',
		row: 2,
		name: 'Fiery Restoration',
		type: 'minor',
		img: `${CDN}/firestaffability2_mod1.png`,
		description: `Pillar of Fire deals 40% more damage to foes at full health.`
	},
	'2_3': {
		required: null,
		row: 2,
		name: 'Meteor Shower',
		type: 'major',
		img: `${CDN}/firestaffability3.png`,
		description: `Channel a spell that drops 32 meteors at your target dealing <b>34%</b> weapon damage each hit.`,
		cooldown: 18,
		mana: `5 per second (30 total)`
	},
	'2_5': {
		required: null,
		row: 2,
		name: 'Clear Mind',
		type: 'minor',
		img: `${CDN}/spear_bonusdmgvsgrit.png`,
		description: `While above 50% mana gain 10% Empower (increased damage).`
	},
	'3_1': {
		required: 'First Strike',
		row: 3,
		name: `Arson's Advantage`,
		type: 'minor',
		img: `${CDN}/firestaffability1_mod2.png`,
		description: `Gain 10% of your max mana per enemy hit by Pillar of Fire.`
	},
	'3_3': {
		required: 'First Strike',
		row: 3,
		name: `Immolation`,
		type: 'minor',
		img: `${CDN}/firestaffability3_mod1.png`,
		description: `Hits of Meteor Shower give you 1% of your max mana.`
	},
	'3_4': {
		required: null,
		row: 3,
		name: `Singe`,
		type: 'minor',
		img: `${CDN}/swordpassive5.png`,
		description: `When you get a Critical Hit with the Fire Staff, cause burning, dealing 3% weapon damage each second for 6s.`
	},
	'3_5': {
		required: null,
		row: 3,
		name: 'Fireball',
		type: 'major',
		img: `${CDN}/firestaffability1.png`,
		description: `Fire off a heavy fireball that deals <b>140%</b> weapon damage on impact and leave a 3m burning field that lasts 6s. The burning field dealing <b>10%</b> weapon damage each second.`,
		cooldown: 15,
		mana: 25
	},
	'4_2': {
		required: null,
		row: 4,
		name: `Spellslinger`,
		type: 'minor',
		img: `${CDN}/swordpassive3.png`,
		description: `Your abilities gain an extra 15% chance to critical strike.`
	},
	'4_3': {
		required: 'Immolation',
		row: 4,
		name: `Fiery Determination`,
		type: 'minor',
		img: `${CDN}/swordability7.png`,
		description: `While casting Meteor Shower you are Unstoppable (cannot be interrupted).`
	},
	'4_4': {
		required: null,
		row: 4,
		name: `Clear Casting`,
		type: 'minor',
		img: `${CDN}/rapier_evasionpass1_perfectionist.png`,
		description: `If you haven't taken damage in the last 3s, deal 10% more damage.`
	},
	'4_5': {
		required: 'Fireball',
		row: 4,
		name: `Scorched Earth`,
		type: 'minor',
		img: `${CDN}/firestaffability1_mod1.png`,
		description: `Fireball's burning field persists for 9s.`
	},
	'5_1': {
		required: null,
		row: 5,
		name: `Prophet of a Fire God`,
		type: 'minor',
		img: `${CDN}/spear_bonushvydmgconsec.png`,
		description: `While holding a Fire Staff your critical strike damage is increasd by 20%.`
	},
	'5_2': {
		required: null,
		row: 5,
		name: `Flare`,
		type: 'minor',
		img: `${CDN}/lifestaffpassive11.png`,
		description: `Heavy Attacks no longer consume mana.`
	},
	'5_3': {
		required: 'Fiery Determination',
		row: 5,
		name: `Judgment of Helios`,
		type: 'minor',
		img: `${CDN}/firestaffability1_mod3.png`,
		description: `Cause 25% more meteors to hit during the entire channel of Meteor Shower.`
	},
	'5_5': {
		required: 'Scorched Earth',
		row: 5,
		name: `Catch`,
		type: 'minor',
		img: `${CDN}/lifestaffpassive2.png`,
		description: `Direct hits with Fireball give you 10% of your max mana and reduces your Fire Staff cooldowns by 7%.`
	},
	'6_3': {
		required: null,
		row: 6,
		name: `Catch`,
		type: 'ultimate',
		img: `${CDN}/greataxe_ability6_gravitywell.png`,
		description: `Casting a fire spell places a 2m rune on the ground increasing your spell damage by <b>30%</b> while standing in the rune. The rune lasts for 7s (cooldown 30s).`
	}
};

export const PYROMANCER = {
	'1_2': {
		required: null,
		row: 1,
		name: 'Pyromania',
		type: 'minor',
		img: `${CDN}/hatchetability3_mod2.png`,
		description: `Damage is increased by 20% while holding a Fire Staff and below 50% max health`
	},
	'1_3': {
		required: null,
		row: 1,
		name: 'Flame Thrower',
		type: 'major',
		img: `${CDN}/firestaffability4.png`,
		description: `Create a jet of flame from the tip of staff dealing <b>34%</b> weapon damage each second. Each hit catches enemies on fire dealing <b>3%</b> weapon damage each second for 6s.`,
		cooldown: 8,
		mana: `4 per second`
	},
	'2_1': {
		required: null,
		row: 2,
		name: 'Incinerate',
		type: 'major',
		img: `${CDN}/firestaffability6.png`,
		description: `Cause a fiery explosion dealing <b>130%</b> weapon damage and knocking back all enemies 2m. Catches enemies on fire dealing <b>3%</b> weapon damage each second for 6s.`,
		cooldown: 12,
		mana: 22
	},
	'2_2': {
		required: null,
		row: 2,
		name: 'Heat Up',
		type: 'minor',
		img: `${CDN}/musketpassive9.png`,
		description: `When you block a Melee attack, restore 5% of your max mana.`
	},
	'2_3': {
		required: 'Flame Thrower',
		row: 2,
		name: `Fire's Reach`,
		type: 'minor',
		img: `${CDN}/firestaffability4_mod2.png`,
		description: `Increase the range of FlameThrower by 50%.`
	},
	'2_4': {
		required: null,
		row: 2,
		name: `Let it Burn`,
		type: 'minor',
		img: `${CDN}/warhammerability6_mod1.png`,
		description: `Whenever burn deals damage, gain 10% Fortify for 2s (Fortify reduces damage taken).`
	},
	'3_1': {
		required: 'Incinerate',
		row: 3,
		name: `Scorched`,
		type: 'minor',
		img: `${CDN}/firestaffability6_mod1.png`,
		description: `Each hit of Incinerate causes an additional stack of burning.`
	},
	'3_2': {
		required: null,
		row: 3,
		name: `Kindle`,
		type: 'minor',
		img: `${CDN}/firestaffability5_mod2.png`,
		description: `Burning last 20% longer.`
	},
	'3_3': {
		required: `Fire's Reach`,
		row: 3,
		name: `Infernal Flames`,
		type: 'minor',
		img: `${CDN}/firestaffability4_mod1.png`,
		description: `Increase the base damage of FlameThrower by 25%.`
	},
	'3_5': {
		required: null,
		row: 3,
		name: `Burn Out`,
		type: 'major',
		img: `${CDN}/firestaffability5.png`,
		description: `Dash forward leaving a wall of fire behind you. Residual flames will catch enemies on fire dealing <b>5%</b> weapon damage each second for 13s.`,
		cooldown: 20,
		mana: 30
	},
	'4_1': {
		required: `Scorched`,
		row: 4,
		name: `Cauterize Wounds`,
		type: 'minor',
		img: `${CDN}/spear_bonusdmgvslowhp.png`,
		description: `Restore 20% of damage dealt by Incinerate.`
	},
	'4_3': {
		required: `Infernal Flames`,
		row: 4,
		name: `Pyro Dancer`,
		type: 'minor',
		img: `${CDN}/musketability3_mod2.png`,
		description: `Flame Thrower has no cooldown.`
	},
	'4_4': {
		required: null,
		row: 4,
		name: `Watch it Burn`,
		type: 'minor',
		img: `${CDN}/spear_skewer.png`,
		description: `Light attacks cause the enemy to catch fire dealing 3% weapon damage each second for 6s.`
	},
	'4_5': {
		required: 'Burn Out',
		row: 4,
		name: `All In`,
		type: 'minor',
		img: `${CDN}/firestaffability5_mod1.png`,
		description: `Fire Staff cooldowns are reduced by 2% for each foe hit by Burn Out.`
	},
	'5_1': {
		required: 'Cauterize Wounds',
		row: 5,
		name: `Flame Out!`,
		type: 'minor',
		img: `${CDN}/firestaffability6_mod3.png`,
		description: `Incinerate hits twice.`
	},
	'5_2': {
		required: null,
		row: 5,
		name: `Trial by Fire`,
		type: 'minor',
		img: `${CDN}/greataxe_ability6pass1_crowdedwell.png`,
		description: `When you are struck, create a field of fire around you dealing 5% weapon damage to all to nearby enemies in a 4m radius. Activates when struck in battle and lasts for 10 seconds. (cooldown 120s).`
	},
	'5_4': {
		required: null,
		row: 5,
		name: `Combat Speed`,
		type: 'minor',
		img: `${CDN}/rapier_evasionpass4_artofbattle.png`,
		description: `When you activate a Fire Staff ability gain 10% Haste for 5s (cooldown 10s).`
	},
	'5_5': {
		required: null,
		row: 5,
		name: `Heat it Up`,
		type: 'minor',
		img: `${CDN}/firestaffability4_mod2.png`,
		description: `Burn Out travels 50% further.`
	},
	'6_3': {
		required: null,
		row: 6,
		name: `Reheat`,
		type: 'ultimate',
		img: `${CDN}/lifestaffability4_mod2.png`,
		description: `After 6s without activating an ability, your mana regen is increasd by 400%.`
	}
};
