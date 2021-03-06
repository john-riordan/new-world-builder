export const REAPER = {
  '1_3': {
    required: null,
    row: 1,
    name: 'Reap',
    type: 'major',
    img: `/skills/greataxe_mauraderpass1_empoweredswing.webp`,
    description: `Extend your axe 5m pulling foes to you and dealing 110% weapon damage.
    <br /><br />
    Taunt Gem Compatible: If you have a Carnelian gem equiped in your great axe, This ability cause a 4.0s taunts when it hits. (Taunt causes monsters to focus only on you.)`,
    cooldown: 18
  },
  '1_4': {
    required: null,
    row: 1,
    name: 'Greed',
    type: 'minor',
    img: `/skills/greataxe_ability4_judgementsreach.webp`,
    description: `Light attacks with your Great Axe give you 5% damage for 5s (max 3 stacks).`
  },
  '1_5': {
    required: null,
    row: 1,
    name: `Executioner's Speed`,
    type: 'minor',
    img: `/skills/greataxe_reaperpass5_pursuit.webp`,
    description: `Every 2 consecutive light attacks with a Great Axe grants 3s of 20% Haste (movement speed).`
  },
  '2_1': {
    required: null,
    row: 2,
    name: 'Charge',
    type: 'major',
    img: `/skills/greataxe_ability2_engage.webp`,
    description: `Charge 10m dealing 120% weapon damage when you reach a target or Press LMB.
		<br /><br />
		This ability has Unstoppable (you cannot be interrupted).`,
    cooldown: 20
  },
  '2_2': {
    required: null,
    row: 2,
    name: 'Critical Gains',
    type: 'minor',
    img: `/skills/greataxe_reaperpass1_heavypull.webp`,
    description: `When you make a critical hit with a Great Axe: Heal yourself for 10% of the damage done.`
  },
  '2_3': {
    required: 'Reap',
    row: 2,
    name: 'The Collector',
    type: 'minor',
    img: `/skills/greataxe_ability4pass1_thecollector.webp`,
    description: `Reap's range is now 8 meters.`
  },
  '2_4': {
    required: null,
    row: 2,
    name: `Death's Embrace`,
    type: 'minor',
    img: `/skills/musketpassive11.webp`,
    description: `Great Axe attacks against foes below 50% health: Penetrate armor by 10%`
  },
  '3_1': {
    required: 'Charge',
    row: 3,
    name: `Frenzied Momentum`,
    type: 'minor',
    img: `/skills/hatchetability5_mod1.webp`,
    description: `Charge now deals 120% - 140% weapon damage based on how far you traveled.`
  },
  '3_2': {
    required: null,
    row: 3,
    name: `Frustration`,
    type: 'minor',
    img: `/skills/greataxe_mauraderpass2_resistantgrit.webp`,
    description: `After one of your attacks is blocked gain 15% damage for 10s.`
  },
  '3_5': {
    required: null,
    row: 3,
    name: `Execute`,
    type: 'major',
    img: `/skills/greataxe_ability3_executioner.webp`,
    description: `A powerful overhead attack dealing 200% weapon damage. Execute deals 50% more damage vs foes under 50% health.`,
    cooldown: 25
  },
  '4_2': {
    required: null,
    row: 4,
    name: `Keen Edge`,
    type: 'minor',
    img: `/skills/greataxe_mauraderpass5_unendingslice.webp`,
    description: `Critical hit damage increased by 10%.`
  },
  '4_3': {
    required: 'The Collector',
    row: 4,
    name: `Hunger`,
    type: 'minor',
    img: `/skills/greataxe_ability1pass2_unendingwinds.webp`,
    description: `Heal yourself by 30% of damage done by Reap.`,
    etc: ['double-up']
  },
  '4_4': {
    required: null,
    row: 4,
    name: `Critical Condition`,
    type: 'minor',
    img: `/skills/greataxe_mauraderpass4_painlesswounds.webp`,
    description: `Critical Great Axe attacks against foes below 50% health crit 15% more often.`
  },
  '4_5': {
    required: 'Execute',
    row: 4,
    name: `Unstoppable Greed`,
    type: 'minor',
    img: `/skills/hatchetpassive4.webp`,
    description: `Execute gains Grit, making the attack unstoppable.`
  },
  '5_1': {
    required: 'Frenzied Momentum',
    row: 5,
    name: `Unpredictable Strike`,
    type: 'minor',
    img: `/skills/greataxe_ability2pass2_chargedswing.webp`,
    description: `During Charge you may press RMB to execute a swing attack dealing 140% - 165% weapon damage based on how far you traveled.`,
    etc: ['double-up']
  },
  '5_2': {
    required: null,
    row: 5,
    name: `Feed`,
    type: 'minor',
    img: `/skills/musketpassive3.webp`,
    description: `Heal for 10% of damage done with Great Axe attacks against foes below 30% health.`
  },
  '5_3': {
    required: 'Hunger',
    row: 5,
    name: `Fatal Attraction`,
    type: 'minor',
    img: `/skills/greataxe_ability4pass2_fatalattraction.webp`,
    description: `After you pull with Reap, do a spin attacking dealing 115% weapon damage.`
  },
  '5_5': {
    required: 'Unstoppable Greed',
    row: 5,
    name: `Executioner`,
    type: 'minor',
    img: `/skills/greataxe_ability3pass2_deathbringer.webp`,
    description: `Execute guranteed critical hits targets below 30% health.`
  },
  '6_3': {
    required: null,
    row: 6,
    name: `Blood Lust`,
    type: 'ultimate',
    img: `/skills/greataxe_marauderultimate_maraudersfury.webp`,
    description: `You move 30% faster and deal 15% more damage when looking at a foe within 15 meters.`
  }
};

export const MAULER = {
  '1_2': {
    required: null,
    row: 1,
    name: `Mauler's Resolve`,
    type: 'minor',
    img: `/skills/spear_bonusdmgvslowhp.webp`,
    description: `When hit while holding a Great Axe and below 50% health gain 40 stamina (20s cooldown).`
  },
  '1_3': {
    required: null,
    row: 1,
    name: `Maelstrom`,
    type: 'major',
    img: `/skills/greataxe_ability5_maelstrom.webp`,
    description: `Fast-spinning attack that pulls targets closer to you and deals 100% weapon damage.`,
    cooldown: 20
  },
  '1_4': {
    required: null,
    row: 1,
    name: `Heavy Pull`,
    type: 'minor',
    img: `/skills/greataxe_reaperpass1_heavypull.webp`,
    description: `Heavy attacks with a Great Axe pull foes closer to you.`
  },
  '2_1': {
    required: null,
    row: 2,
    name: `Whirlwind`,
    type: 'major',
    img: `/skills/greataxe_ability1_whirlwind.webp`,
    description: `Spin attack dealing 50% weapon damage to all nearby foes. If you hit a foe spin again (max 4 spins). You can move while spinning. This attack cannot critical hit.`,
    cooldown: 30
  },
  '2_3': {
    required: 'Maelstrom',
    row: 2,
    name: `Storms Reach`,
    type: 'minor',
    img: `/skills/greataxe_ability5pass1_deadlyseas.webp`,
    description: `Extends the reach of Maelstroms pull range by 50%.`
  },
  '2_4': {
    required: null,
    row: 2,
    name: `Enduring Pull`,
    type: 'minor',
    img: `/skills/greataxe_mauraderpass3_hardenedheavy.webp`,
    description: `Heavy attacks with a Great Axe gain Grit, making the attack unstoppable.`
  },
  '3_1': {
    required: 'Whirlwind',
    row: 3,
    name: `Gusting Winds`,
    type: 'minor',
    img: `/skills/greataxe_ability1pass1_strengtheningwinds.webp`,
    description: `Whirlwind's maximum number of rotations is increased to 7.`
  },
  '3_2': {
    required: null,
    row: 3,
    name: `Gravity`,
    type: 'minor',
    img: `/skills/greataxe_reaperpass2_enduringpull.webp`,
    description: `After you pull an enemy your foe is held 10% longer.`
  },
  '3_3': {
    required: `Storms Reach`,
    row: 3,
    name: `Absorb`,
    type: 'minor',
    img: `/skills/greataxe_reaperpass2_enduringpull.webp`,
    description: `Maelstrom consumes all projectives while active.`
  },
  '3_5': {
    required: null,
    row: 3,
    name: `Gravity Well`,
    type: 'major',
    img: `/skills/greataxe_ability6_gravitywell.webp`,
    description: `Throw an axe to create a vortex that pulls foes to its center for 3s. Ends with a damaging Burst dealing 125% weapon damage. Range 10m.`,
    cooldown: 30
  },
  '4_1': {
    required: 'Gusting Winds',
    row: 4,
    name: `Unending Winds`,
    type: 'minor',
    img: `/skills/greataxe_ability1pass3_gustingwinds.webp`,
    description: `Whirlwind's movement speed increased by 50%`
  },
  '4_3': {
    required: 'Absorb',
    row: 4,
    name: `No Reprieve`,
    type: 'minor',
    img: `/skills/greataxe_ability5pass3_noreprieve.webp`,
    description: `Maelstrom does an extra spin attack pulling in foes and dealing 100% weapon damage.`
  },
  '4_4': {
    required: null,
    row: 4,
    name: `Revenge`,
    type: 'minor',
    img: `/skills/greataxe_reaperpass3_weakenedrestraint.webp`,
    description: `When you block an attack with a Great Axe gain 5% damage for 5s (max 3 stacks).`
  },
  '4_5': {
    required: 'Gravity Well',
    row: 4,
    name: `Crowded Well`,
    type: 'minor',
    img: `/skills/greataxe_ability6pass1_crowdedwell.webp`,
    description: `Increase burst damage by 10% for each foe caught in the vortex.`
  },
  '5_1': {
    required: 'Unending Winds',
    row: 5,
    name: `Surrounded`,
    type: 'minor',
    img: `/skills/greataxe_ability1pass2_unendingwinds.webp`,
    description: `If you have 3 or more foes around you deal 30% more damage.`
  },
  '5_2': {
    required: null,
    row: 5,
    name: `Center of Attention`,
    type: 'minor',
    img: `/skills/spear_bonusdmgvsgrit.webp`,
    description: `While holding a Great Axe gain 10% damage when 3 or more foes are within 4 meters.`
  },
  '5_4': {
    required: null,
    row: 5,
    name: `Crowded Protection`,
    type: 'minor',
    img: `/skills/greataxe_reaperpass4_crowdedprotection.webp`,
    description: `While holding a Great Axe gain 10% armor when 3 or more foes are within 4 meters.`
  },
  '5_5': {
    required: 'Crowded Well',
    row: 5,
    name: `Unyeilding`,
    type: 'minor',
    img: `/skills/greataxe_ability5pass2_refreshingwell.webp`,
    description: `Allies gain 20% Fortify while standing in your well (Fortify reduces damage taken).`
  },
  '6_3': {
    required: null,
    row: 6,
    name: `Mauler's Fury`,
    type: 'ultimate',
    img: `/skills/greataxe_reaperultimate_defiantstature.webp`,
    description: `Great Axe attacks increase damage by 5% for 3s (max 10 stacks).`
  }
};
