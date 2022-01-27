export const HEALING = {
  '1_1': {
    required: null,
    row: 1,
    name: 'Divine Embrace',
    type: 'major',
    img: `/skills/lifestaffability3.webp`,
    description: `Heal target for <b>150%</b> weapon damage.`,
    cooldown: 6,
    mana: 25
  },
  '1_4': {
    required: null,
    row: 1,
    name: 'Absolved',
    type: 'minor',
    img: `/skills/lifestaffability6_mod2.webp`,
    description: `Lifestaffs Light and Heavy attack no longer take mana.`
  },
  '2_1': {
    required: 'Divine Embrace',
    row: 2,
    name: 'Privilege',
    type: 'minor',
    img: `/skills/lifestaffability3_mod1.webp`,
    description: `Divine Embrace costs 20 Mana.`
  },
  '2_3': {
    required: null,
    row: 2,
    name: 'Sacred Ground',
    type: 'major',
    img: `/skills/lifestaffability3.webp`,
    description: `Create an area on the ground that lasts for 15s and heals <b>20%</b> weapon damage every second.`,
    cooldown: 20,
    mana: 15
  },
  '2_4': {
    required: 'Absolved',
    row: 2,
    name: 'Mending Touch',
    type: 'minor',
    img: `/skills/lifestaffpassive11.webp`,
    description: `Lifestaffs Heavy Attack now removes 1 debuff when passing through an ally.`
  },
  '2_5': {
    required: 'Absolved',
    row: 2,
    name: 'Blissful Touch',
    type: 'minor',
    img: `/skills/warhammerpassive8.webp`,
    description: `Light attacks now heal target for <b>20%</b> weapon damage when hitting an ally.`,
    etc: ['bend-left']
  },
  '3_2': {
    required: null,
    row: 3,
    name: 'Desperate Speed',
    type: 'minor',
    img: `/skills/lifestaffpassive3.webp`,
    description: `When you heal an ally with less than 50% health Life Staff cooldowns are reduced by 10%.`
  },
  '3_3': {
    required: 'Sacred Ground',
    row: 3,
    name: 'Holy Ground',
    type: 'minor',
    img: `/skills/lifestaffability6.webp`,
    description: `Regenerate Stamina and Mana 100% faster while in Sacred Ground.`
  },
  '3_4': {
    required: null,
    row: 3,
    name: 'Revitalize',
    type: 'minor',
    img: `/skills/lifestaffpassive2.webp`,
    description: `When you hit with a light attack reduce all your cooldowns by 5%`
  },
  '3_5': {
    required: null,
    row: 3,
    name: 'Splash of Light',
    type: 'major',
    img: `/skills/lifestaffpassive5.webp`,
    description: `You and all group members are healed for <b>50%</b> weapon damage.`,
    cooldown: 15,
    mana: 15
  },
  '4_1': {
    required: 'Privilege',
    row: 4,
    name: 'Shared Struggle',
    type: 'minor',
    img: `/skills/hatchetpassive5.webp`,
    description: `If your target is below 50% health, heal 1 additional ally within 8m for the same amount.`,
    etc: ['double-up']
  },
  '4_3': {
    required: 'Holy Ground',
    row: 4,
    name: 'Blessed',
    type: 'minor',
    img: `/skills/lifestaffability6_mod1.webp`,
    description: `While allies are in Sacred Ground they are healed for 50% more from all healing.`
  },
  '4_4': {
    required: null,
    row: 4,
    name: 'Arcane Justice',
    type: 'minor',
    img: `/skills/lifestaffpassive5.webp`,
    description: `When hit in battle activate a healing aura for you and nearby friends in a 4m radius healing for 10% weapon damage each second for 6s (cooldown 120s).`
  },
  '4_5': {
    required: 'Splash of Light',
    row: 4,
    name: 'Shared Recovery',
    type: 'minor',
    img: `/skills/lifestaffability1.webp`,
    description: `If you heal a target below 50% health gain 3% of your max mana.`
  },
  '5_1': {
    required: 'Shared Struggle',
    row: 5,
    name: 'Rebound',
    type: 'minor',
    img: `/skills/hatchetability3_mod2.webp`,
    description: `If Divine Embrace's 2nd target is below 50% health, heal another ally within 8m.`
  },
  '5_2': {
    required: null,
    row: 5,
    name: 'Sacred Protection',
    type: 'minor',
    img: `/skills/lifestaffpassive1.webp`,
    description: `While holding a lifestaff increase the base health of all friendlies in your group by 10%.`
  },
  '5_4': {
    required: null,
    row: 5,
    name: 'Intensify',
    type: 'minor',
    img: `/skills/swordpassive10.webp`,
    description: `Heavy Attacks give you increased healing by 10% for 10s (max 3 stacks).`
  },
  '5_5': {
    required: 'Shared Recovery',
    row: 5,
    name: 'Purify',
    type: 'minor',
    img: `/skills/rapier_evasionpass1_perfectionist.webp`,
    description: `Splash of Light removes 1 debuff.`
  },
  '6_3': {
    required: null,
    row: 6,
    name: 'Purify',
    type: 'ultimate',
    img: `/skills/swordability1_mod3.webp`,
    description: `Heal for <b>30%</b> more when you heal an ally below 50% health.`
  }
};

export const PROTECTOR = {
  '1_1': {
    required: null,
    row: 1,
    name: 'Orb of Protection',
    type: 'major',
    img: `/skills/firestaffability1.webp`,
    description: `Shoot out a light projectile that grants <b>15%</b> Fortify for 20s, heals an ally for <b>10%</b> of weapon damage, and deals <b>146%</b> weapon damage when it hits an enemy.
    <br /><br />
    (Fortify reduces incoming damage)`,
    cooldown: 10,
    mana: 16
  },
  '1_2': {
    required: null,
    row: 1,
    name: 'Bend Light',
    type: 'minor',
    img: `/skills/bowpassive5.webp`,
    description: `After a dodge roll your heals are 20% more effective for 5s.`
  },
  '1_3': {
    required: null,
    row: 1,
    name: 'Defensive Light',
    type: 'minor',
    img: `/skills/lifestaffability3_mod2.webp`,
    description: `When you block a Melee attack gain 5% max mana.`
  },
  '2_1': {
    required: 'Orb of Protection',
    row: 2,
    name: 'Protectors Blessing',
    type: 'minor',
    img: `/skills/firestaffability1_mod2.webp`,
    description: `If Orb of Projection hit an ally they gainREcovery for 10s.
    <br /><br />
    (Recovery heals for 7.5% Weapon Damage every second).`
  },
  '2_4': {
    required: null,
    row: 2,
    name: 'Protectors Touch',
    type: 'minor',
    img: `/skills/warhammerpassive5.webp`,
    description: `Lifestaffs Light and Heavy grant 15% Fortify for 3s when hitting an enemy.
    <br /><br />
    (Fortify reduces incoming damage.)`
  },
  '2_5': {
    required: null,
    row: 2,
    name: 'Beacon',
    type: 'minor',
    img: `/skills/hatchetpassive3.webp`,
    description: `Shoot out a light projectile that deals <b>146%</b> weapon damage to enemies, attaches to it's target and heals all nearby allies for <b>20%</b> weapon damage each second for 10s.`,
    cooldown: 35,
    mana: 16
  },
  '3_1': {
    required: 'Protectors Blessing',
    row: 3,
    name: 'Shared Protection',
    type: 'minor',
    img: `/skills/spear_bonusdmgvsdebuff.webp`,
    description: `If you successfully hit an ally, you also gain Fortify and Recovery.`
  },
  '3_2': {
    required: null,
    row: 3,
    name: `Protector's Strength`,
    type: 'minor',
    img: `/skills/swordpassive13.webp`,
    description: `If you have a buff heal for 10% more.`
  },
  '3_3': {
    required: null,
    row: 3,
    name: `Lights Embrace`,
    type: 'major',
    img: `/skills/lifestaffability4_mod3.webp`,
    description: `Targeted heal for <b>100%</b> weapon damage +30% more for each buff on that target.`,
    cooldown: 4,
    mana: 18
  },
  '3_5': {
    required: 'Beacon',
    row: 3,
    name: `Infused Light`,
    type: 'minor',
    img: `/skills/lifestaffability6_mod2.webp`,
    description: `Beacons area of effect is now 50% larger.`
  },
  '4_1': {
    required: 'Shared Protection',
    row: 4,
    name: `Aegis`,
    type: 'minor',
    img: `/skills/firestaffability3_mod2.webp`,
    description: `When Orb of Protection hits, it effects all allies within a 3m radius`
  },
  '4_3': {
    required: `Light's Embrace`,
    row: 4,
    name: `Inspire`,
    type: 'minor',
    img: `/skills/spear_cyclone_bonusstaminaonmultihit.webp`,
    description: `When you heal a target with Lights Embrace target receives 25 stamina`
  },
  '4_4': {
    required: null,
    row: 4,
    name: `Balance`,
    type: 'minor',
    img: `/skills/musketpassive8.webp`,
    description: `When you get hit while below 50% health, gain 10% Haste for 5s (cooldown 20s).`
  },
  '4_5': {
    required: `Infused Light`,
    row: 4,
    name: `Radiance's Blessing`,
    type: 'minor',
    img: `/skills/spear_bonusdmgvslowhp.webp`,
    description: `Beacon lasts 5s longer`
  },
  '5_2': {
    required: null,
    row: 5,
    name: `Spirits United`,
    type: 'minor',
    img: `/skills/lifestaffpassive7.webp`,
    description: `Increases mana regeneration for you and group members by 3%.`
  },
  '5_3': {
    required: `Inspire`,
    row: 5,
    name: `Connection`,
    type: 'minor',
    img: `/skills/warhammerability5.webp`,
    description: `When you heal a target with Lights Embrace gain 1% of your max mana for each buff your target has.`
  },
  '5_4': {
    required: null,
    row: 5,
    name: `Glowing Focus`,
    type: 'minor',
    img: `/skills/musketability3_mod2.webp`,
    description: `Buffs you grant last 20% longer`
  },
  '5_5': {
    required: `Radiance's Blessing`,
    row: 5,
    name: `Speed of Light`,
    type: 'minor',
    img: `/skills/hatchetability4_mod1.webp`,
    description: `When Beacon heals a target it also applies 20% Haste for 3s (haste increases movement speed).`
  },
  '6_3': {
    required: 'Connection',
    row: 6,
    name: `Magnify`,
    type: 'ultimate',
    img: `/skills/spear_perforate_bonusblockpushback.webp`,
    description: `When you heal with Light's Embrace extend lifestaff buffs by <b>2s</b>.`
  }
};
