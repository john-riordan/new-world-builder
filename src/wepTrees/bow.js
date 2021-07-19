export const SKIRMISHER = {
  '1_3': {
    required: null,
    row: 1,
    name: 'Evade Shot',
    type: 'major',
    img: `/skills/bowability2.webp`,
    description: `Leap back 5m and shoot an arrow dealing 125% weapon damage.`,
    cooldown: 15
  },
  '1_4': {
    required: null,
    row: 1,
    name: 'Evasive Tactics',
    type: 'minor',
    img: `/skills/bowpassive5.webp`,
    description: `After you dodge deal 20% more damage for 5s.`
  },
  '1_5': {
    required: null,
    row: 1,
    name: 'Catch Me If You Can',
    type: 'minor',
    img: `/skills/greataxe_reaperpass5_pursuit.webp`,
    description: `If surrounded by 3 or more foes within 3m of you gain 20% Haste (movement speed).`
  },
  '2_2': {
    required: null,
    row: 2,
    name: 'Impale',
    type: 'minor',
    img: `/skills/bowability6_mod2.webp`,
    description: `If you hit a foe with 100% health cause 10% slow for 2s.`
  },
  '2_3': {
    required: 'Evade Shot',
    row: 2,
    name: 'Evasive Knockback',
    type: 'minor',
    img: `/skills/bowability2_mod1.webp`,
    description: `Evade Shot causes knockback of 2m.`
  },
  '2_4': {
    required: null,
    row: 2,
    name: 'Closing In',
    type: 'minor',
    img: `/skills/rapier_ability4mod2_priority.webp`,
    description: `Hitting a for below 50% health reduces bow ability recharge by 5%.`
  },
  '2_5': {
    required: null,
    row: 2,
    name: 'Rain of Arrows',
    type: 'major',
    img: `/skills/bowability6.webp`,
    description: `Shoot a barrage of arrows 7 meters wide that deals 150% weapon damage.`
  },
  '3_1': {
    required: null,
    row: 3,
    name: 'Poison Shot',
    type: 'major',
    img: `/skills/bowability5.webp`,
    description: `Shoot a poison arrow that on hit or land creates a cloud of poison 3m wide that lasts 10s. Foes entering the cloud are poisoned dealing 10% weapon damage per second for 20s.`,
    cooldown: 35
  },
  '3_2': {
    required: null,
    row: 3,
    name: 'Dodge and Weave',
    type: 'minor',
    img: `/skills/bowpassive12.webp`,
    description: `After you dodge gain 10% haste (movement speed) for 2 seconds.`
  },
  '3_4': {
    required: null,
    row: 3,
    name: `Hunter's Insight`,
    type: 'minor',
    img: `/skills/bowpassive8.webp`,
    description: `Hitting a foe with a debuff grants 5 stamina.`
  },
  '3_5': {
    required: 'Rain of Arrows',
    row: 3,
    name: `Barbed Arrows`,
    type: 'minor',
    img: `/skills/rapier_bloodmasterpass4_bleeddamage.webp`,
    description: `Rain of Arrows causes bleed dealing 85% weapon damage over 12s (max 3 stacks).`
  },
  '4_1': {
    required: 'Poison Shot',
    row: 4,
    name: `Infected Arrows`,
    type: 'minor',
    img: `/skills/bowability5_mod1.webp`,
    description: `Poison Shot's poison now does 12% weapon damage per second for 20s.`
  },
  '4_3': {
    required: 'Evasive Knockback',
    row: 4,
    name: `Go the Distance`,
    type: 'minor',
    img: `/skills/bowability2_mod2.webp`,
    description: `Evase Shot grants you 5s of 15% haste (movement speed).`,
    etc: ['double-up']
  },
  '4_4': {
    required: null,
    row: 4,
    name: `Archer's Speed`,
    type: 'minor',
    img: `/skills/firestaffability4_mod3.webp`,
    description: `Gain 10s haste for 5s when you swap to your bow (10s cooldown).`
  },
  '5_1': {
    required: 'Infected Arrows',
    row: 5,
    name: `Direct Hit`,
    type: 'minor',
    img: `/skills/hatchetability1.webp`,
    description: `If you directly hit a target with Poison Shot it deal 200% more damage.`
  },
  '5_2': {
    required: null,
    row: 5,
    name: `Mark`,
    type: 'minor',
    img: `/skills/firestaffability4_mod1.webp`,
    description: `Deal 10% more damager to foes suffering from a debuff.`
  },
  '5_4': {
    required: null,
    row: 5,
    name: `Battle Precision`,
    type: 'minor',
    img: `/skills/bowability5_mod2.webp`,
    description: `Debuffs and DoTs last 20% longer.`
  },
  '5_5': {
    required: 'Barbed Arrows',
    row: 5,
    name: `Hooked Arrows`,
    type: 'minor',
    img: `/skills/bowability6_mod2.webp`,
    description: `Rain of Arrows causes a15% slow for 4s.`,
    etc: ['double-up']
  },
  '6_3': {
    required: null,
    row: 6,
    name: `Knee Shot`,
    type: 'ultimate',
    img: `/skills/bowpassive7.webp`,
    description: `Leg shots cause a 10% slow for 2s.`
  }
};

export const HUNTER = {
  '1_2': {
    required: null,
    row: 1,
    name: 'Long Range',
    type: 'minor',
    img: `/skills/bowpassive4.webp`,
    description: `Deal 20% more damage to foes at least 10m away.`
  },
  '1_3': {
    required: null,
    row: 1,
    name: 'Penetrating Shot',
    type: 'major',
    img: `/skills/bowability3.webp`,
    description: `Shoot an arrow dealing 150% weapon damage that passes through targets and continues for 100 meters.`,
    cooldown: 18
  },
  '1_4': {
    required: null,
    row: 1,
    name: 'Aim True',
    type: 'minor',
    img: `/skills/bowability4_mod1.webp`,
    description: `Heavy attacks arrows fly faster and deal 30% more damage.`
  },
  '2_2': {
    required: null,
    row: 2,
    name: 'Finishing Shot',
    type: 'minor',
    img: `/skills/lifestaffpassive12.webp`,
    description: `If your target is below 50% health deal 20% more damage.`
  },
  '2_3': {
    required: 'Penetrating Shot',
    row: 2,
    name: 'Blood Soaked Arrow',
    type: 'minor',
    img: `/skills/bowability3_mod1.webp`,
    description: `Increase Penetrating Shot damage by 10% after each hit (max 50% damage).`
  },
  '2_4': {
    required: null,
    row: 2,
    name: 'Unbreakable Focus',
    type: 'minor',
    img: `/skills/swordpassive14.webp`,
    description: `Receive 20% less damage while aiming.`
  },
  '2_5': {
    required: null,
    row: 2,
    name: 'Splinter Shot',
    type: 'major',
    img: `/skills/bowability4.webp`,
    description: `Shoot an arrow out 10 meters it then splits into 3 arrows dealing 50% weapon damage.`,
    cooldown: 22
  },
  '3_1': {
    required: null,
    row: 3,
    name: 'Rapid Shot',
    type: 'major',
    img: `/skills/bowability1.webp`,
    description: `Shoot 3 consecutive arrows. The first two dealing 100% weapon damage each. The last shot causes a knockback and deal 125% weapon damage.`,
    cooldown: 20
  },
  '3_3': {
    required: 'Blood Soaked Arrow',
    row: 3,
    name: 'Deep Strike',
    type: 'minor',
    img: `/skills/bowability3_mod2.webp`,
    description: `Penetrating Shot deals 20% more damage to target 20m or more away.`
  },
  '3_4': {
    required: null,
    row: 3,
    name: 'Opening Strike',
    type: 'minor',
    img: `/skills/swordpassive5.webp`,
    description: `Heavy attacks deal 20% more damage to foes with 100% health.`
  },
  '3_5': {
    required: 'Splinter Shot',
    row: 3,
    name: 'Scatter Shot',
    type: 'minor',
    img: `/skills/bowability4_mod2.webp`,
    description: `Splinter Shot splits into 5 arrows.`
  },
  '4_1': {
    required: 'Rapid Shot',
    row: 4,
    name: 'Rapid Accuracy',
    type: 'minor',
    img: `/skills/bowability1_mod1.webp`,
    description: `If all 3 arrows hit the same target Rapid shot's cooldown is reduced by 50%.`
  },
  '4_2': {
    required: null,
    row: 4,
    name: 'Surprise Attack',
    type: 'minor',
    img: `/skills/bowpassive2.webp`,
    description: `Deal 20% extra damage if you haven't damage a for in the last 10s.`
  },
  '4_4': {
    required: null,
    row: 4,
    name: 'Arrow Range',
    type: 'minor',
    img: `/skills/musketability5.webp`,
    description: `Increased arrow distance before gravity dropoff starts by 100%.`
  },
  '5_1': {
    required: 'Rapid Accuracy',
    row: 5,
    name: 'Final Blow',
    type: 'minor',
    img: `/skills/bowability1_mod2.webp`,
    description: `The 3rd shot of Rapid Shot deals 25% extra damage.`
  },
  '5_2': {
    required: null,
    row: 5,
    name: 'Hawkeye',
    type: 'minor',
    img: `/skills/swordpassive13.webp`,
    description: `When you land a headshot heal yourself for 10% of damage done.`
  },
  '5_4': {
    required: null,
    row: 5,
    name: 'Bullseye',
    type: 'minor',
    img: `/skills/musketpassive4.webp`,
    description: `Bow critical strike chance increased by 10%.`
  },
  '5_5': {
    required: 'Scatter Shot',
    row: 5,
    name: 'Calculated',
    type: 'minor',
    img: `/skills/hatchetability5_mod4.webp`,
    description: `Reduce the cooldown of Splinter Shot by 10%.`,
    etc: ['double-up']
  },
  '6_3': {
    required: null,
    row: 6,
    name: 'Concussion',
    type: 'ultimate',
    img: `/skills/musketpassive5.webp`,
    description: `When you land a headshot, deal 20% more damage with a 50% chance to get your arrow back.`
  }
};
