export const SWORDMASTER = {
  '1_3': {
    required: null,
    row: 1,
    name: 'Whirling Blade',
    type: 'major',
    img: `/skills/swordability1.webp`,
    description: `Deal 145% weapon damage to all enemies within 2 meters.`,
    cooldown: 15
  },
  '1_4': {
    required: null,
    row: 1,
    name: 'Empowered Stab',
    type: 'minor',
    img: `/skills/swordability3_mod2.webp`,
    description: `Successful Heavy Attacks you 30% Empower for 5s.<br /><br />(Empower increases damage)`
  },
  '1_5': {
    required: null,
    row: 1,
    name: 'Achilles Heel',
    type: 'minor',
    img: `/skills/warhammerability2_mod2.webp`,
    description: `The final attack in your light attack chain causes a 20% slows for 2s`
  },
  '2_1': {
    required: null,
    row: 2,
    name: 'Reverse Stab',
    type: 'major',
    img: `/skills/swordability2.webp`,
    description: `A stab attack that deals 175% weapon damage.`,
    cooldown: 20
  },
  '2_2': {
    required: null,
    row: 2,
    name: 'Precision',
    type: 'minor',
    img: `/skills/swordpassive1.webp`,
    description: `Swords critical strike chance increased by 10%`
  },
  '2_3': {
    required: 'Whirling Blade',
    row: 2,
    name: 'Opportunity',
    type: 'minor',
    img: `/skills/swordability1_mod2.webp`,
    description: `Whirling Blade causes 5% Rend for 10s.<br /><br />(Rend reduces targets armor)`
  },
  '2_4': {
    required: null,
    row: 2,
    name: 'Freeing Justice',
    type: 'minor',
    img: `/skills/greataxe_ability4pass2_fatalattraction.webp`,
    description: `Successfully hitting with a Heavy Attack causes you to lose all debuffs.`
  },
  '3_1': {
    required: 'Reverse Stab',
    row: 3,
    name: 'Unstoppable Stab',
    type: 'minor',
    img: `/skills/swordability2_mod1.webp`,
    description: `Reverse Stab now has Grit, making the attack unstoppable.`
  },
  '3_2': {
    required: null,
    row: 3,
    name: 'Mobility',
    type: 'minor',
    img: `/skills/firestaffability4_mod3.webp`,
    description: `Move 33% faster while blocking.`
  },
  '3_4': {
    required: null,
    row: 3,
    name: 'Counter Attack',
    type: 'minor',
    img: `/skills/rapier_ability4mod1_insult_to_injury.webp`,
    description: `When you block an attack gain 10% increased damage for 20s.`
  },
  '3_5': {
    required: null,
    row: 3,
    name: 'Leaping Strike',
    type: 'major',
    img: `/skills/swordability3.webp`,
    description: `Leap 4 meters and deal 135% weapon damage.`,
    cooldown: 25
  },
  '4_2': {
    required: null,
    row: 4,
    name: 'Opportunist',
    type: 'minor',
    img: `/skills/warhammerpassive2.webp`,
    description: `Deal 10% more damage to to slowed enemies.`
  },
  '4_3': {
    required: 'Opportunity',
    row: 4,
    name: 'Tactical Strike',
    type: 'minor',
    img: `/skills/swordability1_mod1.webp`,
    description: `Whirling Blade cooldown reduced by 10% for every enemy hit by Whirling Blade.`,
    etc: ['double-up']
  },
  '4_5': {
    required: 'Leaping Strike',
    row: 4,
    name: 'Final Strike',
    type: 'minor',
    img: `/skills/swordability3_mod1.webp`,
    description: `If you hit a foe below 30% health deal 50% more damage`
  },
  '5_1': {
    required: 'Unstoppable Stab',
    row: 5,
    name: 'Tactician',
    type: 'minor',
    img: `/skills/swordability2_mod2.webp`,
    description: `On successful hit with Reverse Stab, all Sword cooldowns are reduced by 25%.`,
    etc: ['double-up']
  },
  '5_2': {
    required: null,
    row: 5,
    name: 'Confidence',
    type: 'minor',
    img: `/skills/lifestaffpassive12.webp`,
    description: `While health is full deal 15% more damage.`
  },
  '5_4': {
    required: null,
    row: 5,
    name: 'Critical Precision',
    type: 'minor',
    img: `/skills/rapier_evasionpass4_artofbattle.webp`,
    description: `On critical hit can 20% haste for 5s.<br /><br />(Haste increases movement speed)`
  },
  '5_5': {
    required: 'Final Strike',
    row: 5,
    name: 'Cowardly Punishment',
    type: 'minor',
    img: `/skills/bowability6_mod2.webp`,
    description: `If Leaping Strike hits a target in the back, slow the target for 8s.`
  },
  '6_3': {
    required: null,
    row: 6,
    name: 'Leadership',
    type: 'ultimate',
    img: `/skills/swordability7.webp`,
    description: `While holding a sword all group members damage is increased by 10%.`
  }
};

export const DEFENDER = {
  '1_2': {
    required: null,
    row: 1,
    name: 'Sturdy Shield',
    type: 'minor',
    img: `/skills/swordpassive14.webp`,
    description: `Gain an additional 15% physical armor.`
  },
  '1_3': {
    required: null,
    row: 1,
    name: 'Shield Rush',
    type: 'major',
    img: `/skills/swordability5.webp`,
    description: `Rush Forward 5 meters knocking back foes and dealing 125% weapon damage.`,
    cooldown: 20
  },
  '1_4': {
    required: null,
    row: 1,
    name: 'Sturdy Grip',
    type: 'minor',
    img: `/skills/rapier_ability4mod1_insult_to_injury.webp`,
    description: `Stamina damage is reduced by 15% when blocking a melee attack with a shield.`
  },
  '2_1': {
    required: null,
    row: 2,
    name: 'Shield Bash',
    type: 'major',
    img: `/skills/swordability4.webp`,
    description: `Deals 50% weapon damage and stuns foes in front of you for 2s.<br /><br />Taunt gem compatible:<br />If you have a Carnelian gem equipped in your sword, this ability taunts for 6s to all enemies hit.`,
    cooldown: 25
  },
  '2_2': {
    required: null,
    row: 2,
    name: 'Elemental Resistance',
    type: 'minor',
    img: `/skills/swordpassive11.webp`,
    description: `Reduce damage from all magical types by 10%.`
  },
  '2_4': {
    required: null,
    row: 2,
    name: 'Defensive Training',
    type: 'minor',
    img: `/skills/warhammerability1_mod1.webp`,
    description: `When you block an attack gain 10% Fortify for for 5s.`
  },
  '2_5': {
    required: null,
    row: 2,
    name: 'High Grip',
    type: 'minor',
    img: `/skills/swordpassive8.webp`,
    description: `Stamina damage is reduced by 15% when blocking a ranged attack with a shield.`
  },
  '3_1': {
    required: 'Shield Bash',
    row: 3,
    name: 'Intimidating Bash',
    type: 'minor',
    img: `/skills/warhammerability3_mod1.webp`,
    description: `Shield bash gains greatly increased threat and 100% more damage.`
  },
  '3_2': {
    required: null,
    row: 3,
    name: 'One with the Shield',
    type: 'minor',
    img: `/skills/rapier_ability1mod1_pressure.webp`,
    description: `When you block with a shield all shield cooldowns are reduced by 1%.`
  },
  '3_3': {
    required: 'Shield Rush',
    row: 3,
    name: 'Improved Rush',
    type: 'minor',
    img: `/skills/greataxe_ability5_maelstrom.webp`,
    description: `On successful hit all enemies within 5m gain 10% Weaken for 4s.<br /><br />(Weaken reduces damage)`,
    etc: ['double-up']
  },
  '3_5': {
    required: null,
    row: 3,
    name: 'Final Stand',
    type: 'major',
    img: `/skills/swordability6.webp`,
    description: `For 8s all incoming damage is reduced by 30%.<br /><br />Taunt gem compatible:<br />If you have a carnelian gem equipped in your sword, this ability taunts all enemies within 8m for 6s.`,
    cooldown: 45
  },
  '4_2': {
    required: null,
    row: 4,
    name: 'Final Blow',
    type: 'minor',
    img: `/skills/swordability3_mod2.webp`,
    description: `The 3rd swing of your light attack deals 15% more damage and generates more threat.`
  },
  '4_4': {
    required: null,
    row: 4,
    name: 'Fortitude',
    type: 'minor',
    img: `/skills/swordpassive9.webp`,
    description: `While holding a Sword, current and max health are increased by 10%.`
  },
  '4_5': {
    required: 'Final Stand',
    row: 4,
    name: 'Final Count Down',
    type: 'minor',
    img: `/skills/swordpassive7.webp`,
    description: `If your health is above 50%, Final Stand's damage reduction is increased by 20%.`
  },
  '5_1': {
    required: 'Intimidating Bash',
    row: 5,
    name: 'Concussive Bash',
    type: 'minor',
    img: `/skills/swordability4_mod1.webp`,
    description: `Shield Bash stun duration increased by 1s.`,
    etc: ['double-up']
  },
  '5_3': {
    required: 'Improved Rush',
    row: 5,
    name: 'Intimidating Rush',
    type: 'minor',
    img: `/skills/swordability5_mod1.webp`,
    description: `On successful hit all enemies within 5m are slowed by 30% for 4s.`,
    etc: ['double-up']
  },
  '5_4': {
    required: null,
    row: 5,
    name: 'Recuperation',
    type: 'minor',
    img: `/skills/swordpassive13.webp`,
    description: `All incoming healing and regeneration increased by 10%.`
  },
  '5_5': {
    required: 'Final Count Down',
    row: 5,
    name: 'Restoration',
    type: 'minor',
    img: `/skills/swordpassive10.webp`,
    description: `Gain 15% of your max health when Final Stand ends.`
  },
  '6_3': {
    required: null,
    row: 6,
    name: 'Defensive Formation',
    type: 'ultimate',
    img: `/skills/firestaffability3_mod2.webp`,
    description: `While blocking reduce damage to all allies within 2m by 30%.`
  }
};
