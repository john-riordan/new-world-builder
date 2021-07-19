export const SHARPSHOOTER = {
  '1_2': {
    required: null,
    row: 1,
    name: 'Critical Reload',
    type: 'minor',
    img: `/skills/musketability1_mod1.webp`,
    description: `Landing 3 Headshots with 10 seconds of each other grants an instant reload.`
  },
  '1_3': {
    required: null,
    row: 1,
    name: 'Power Shot',
    type: 'major',
    img: `/skills/musketability1.webp`,
    description: `Overload musket with gun powder, causing the next shot to deal 150% Weapon Damage. Does not stack or combine with other overload shots.`,
    cooldown: 15
  },
  '1_4': {
    required: null,
    row: 1,
    name: 'Called Shot',
    type: 'minor',
    img: `/skills/musketpassive11.webp`,
    description: `Increase Musket damage by 15% if aimed down sight for more than 3 seconds.`
  },
  '2_1': {
    required: null,
    row: 2,
    name: 'Powder Burn',
    type: 'major',
    img: `/skills/musketpassive11.webp`,
    description: `Overload musket with gun powder, causing the next shot to deal 110% Weapon Damage and cause a Burn status effect that deals 20% Weapon Damage per second for 9 seconds. Does not stack or combine with other overload shots.`,
    cooldown: 15
  },
  '2_2': {
    required: null,
    row: 2,
    name: 'Greater Accuracy',
    type: 'minor',
    img: `/skills/bowpassive2.webp`,
    description: `Accuracy penalty while moving and aiming removed.`
  },
  '2_3': {
    required: 'Power Shot',
    row: 2,
    name: 'Initial Engagement',
    type: 'minor',
    img: `/skills/musketability1_mod2.webp`,
    description: `When you hit with power shot gain Empower, causing attacks to deal an additional 10% damage for 5 seconds.`
  },
  '2_5': {
    required: null,
    row: 2,
    name: 'Empowering Headshot',
    type: 'minor',
    img: `/skills/musketpassive5.webp`,
    description: `On successful headshot: Grant Empower, increasing all Musket shot's damage by 10% for 5 seconds.`
  },
  '3_1': {
    required: 'Powder Burn',
    row: 3,
    name: 'Backdraft',
    type: 'minor',
    img: `/skills/firestaffability5_mod1.webp`,
    description: `Standard Musket shots deal 12% additional damage while target is on fire.`
  },
  '3_2': {
    required: null,
    row: 3,
    name: 'Ballistic Advantage',
    type: 'minor',
    img: `/skills/musketpassive1.webp`,
    description: `Removes damage fall-off from standard musket shots on targets more than 50 meters away.`
  },
  '3_3': {
    required: 'Initial Engagement',
    row: 3,
    name: 'First Blood',
    type: 'minor',
    img: `/skills/musketpassive3.webp`,
    description: `10% additional damage to targets with full health.`
  },
  '3_5': {
    required: null,
    row: 3,
    name: `Shooter's Stance`,
    type: 'major',
    img: `/skills/musketability2.webp`,
    description: `Player enters a shooting aim stance to enhance shooting performance. While in stance mobility is reduced to zero and reload time is reduced by 75%. Mode will exit after three shots.`,
    cooldown: 20
  },
  '4_1': {
    required: 'Backdraft',
    row: 4,
    name: 'Chronic Trauma',
    type: 'minor',
    img: `/skills/firestaffability2_mod2.webp`,
    description: `If Powder Burn is a headshot extend the burn to 13 seconds.`
  },
  '4_3': {
    required: 'First Blood',
    row: 4,
    name: 'Bullseye',
    type: 'minor',
    img: `/skills/hatchetability2_mod3.webp`,
    description: `Power Shot headshots reduce the cooldown of Power Shot by 15%.`
  },
  '4_4': {
    required: null,
    row: 4,
    name: 'Called Shot Resupply',
    type: 'minor',
    img: `/skills/hatchetability2_mod3.webp`,
    description: `Standard attack headshots reduce all musket ability cooldowns by 10%.`
  },
  '4_5': {
    required: `Shooter's Stance`,
    row: 4,
    name: 'Shoot More',
    type: 'minor',
    img: `/skills/musketability2_mod1.webp`,
    description: `Shoot's Stance shots increased to 5.`
  },
  '5_2': {
    required: null,
    row: 5,
    name: 'Hit Your Mark',
    type: 'minor',
    img: `/skills/musketpassive1.webp`,
    description: `Increased Headshot and critical hit damage the further the target is from you (max of 30% at 100 meters).
    <br /><br />
    Does not forgo damage fall off.`
  },
  '5_4': {
    required: null,
    row: 5,
    name: 'Heightened Precision',
    type: 'minor',
    img: `/skills/musketpassive2.webp`,
    description: `While aiming, successful hits with a musket grant a stackable 2.5% damage increase. This effect ends when you stop aiming down sight or more than 5 seconds between shots (max 10 stacks).`
  },
  '5_5': {
    required: 'Shoot More',
    row: 5,
    name: 'Marksman',
    type: 'minor',
    img: `/skills/musketability3_mod2.webp`,
    description: `If 3 consecutive shots hit the same target, reduce all other Musket cooldowns by 25%.`
  },
  '6_3': {
    required: null,
    row: 6,
    name: 'Sniper',
    type: 'ultimate',
    img: `/skills/musketpassive4.webp`,
    description: `Adds an optional 3x zoom view for all musket aim shots. Use Mouse Wheel up and down to zoom in and out while aiming.
    <br /><br />
    Also grants a 25% damage increase to all Headshots.`
  }
};

export const TRAPPER = {
  '1_1': {
    required: null,
    row: 1,
    name: 'Salt On The Wounds',
    type: 'minor',
    img: `/skills/hatchetability3_mod2.webp`,
    description: `15% increased damage to targets below 30% health.`
  },
  '1_3': {
    required: null,
    row: 1,
    name: 'Traps',
    type: 'major',
    img: `/skills/musketability4.webp`,
    description: `Throw a trap that last for 20 seconds. When triggered it causes target to be Rooted, immobilizing target for 3 seconds.`,
    cooldown: 20
  },
  '1_5': {
    required: null,
    row: 1,
    name: 'Back It Up',
    type: 'minor',
    img: `/skills/musketability3.webp`,
    description: `Walking/Strafing movement speed Increased by 10% when an enemy is within 8 meters of player.`
  },
  '2_1': {
    required: null,
    row: 2,
    name: 'Stopping Power',
    type: 'major',
    img: `/skills/musketability2_mod2.webp`,
    description: `Overload musket with gun powder, causing the next shot to deal 120% Weapon Damage, staggering target and knocking them back 3 meters. Does not stack or combine with other Overloaded shots.`,
    cooldown: 18
  },
  '2_2': {
    required: null,
    row: 2,
    name: 'Weakened Defense',
    type: 'minor',
    img: `/skills/spear_vaultkick_empoweronblockbreak.webp`,
    description: `Doubles the stamina damage from standard shots dealt to enemies blocking with shields and deal 10% of Armor Penetration to targets that aren't blocking with a shield.`
  },
  '2_3': {
    required: 'Traps',
    row: 2,
    name: 'Trapped Damage',
    type: 'minor',
    img: `/skills/musketability4_mod1.webp`,
    description: `Traps apply Rend to target increasing damage to trapped targets by 20% for 3 seconds.`
  },
  '2_4': {
    required: null,
    row: 2,
    name: 'Empowering Weakness',
    type: 'minor',
    img: `/skills/spear_vaultkick_empoweronblockbreak.webp`,
    description: `Hitting a target with an active debuff triggers Empower, increasing player's damage to be increased by 10% for 5 seconds.`
  },
  '3_1': {
    required: 'Stopping Power',
    row: 3,
    name: 'Lasting Impression',
    type: 'minor',
    img: `/skills/spear_vaultkick_alwaysdostaminadmg.webp`,
    description: `Targets hit with Stopping Power are Exhausted; reducing stamina regeneration speed by 10% for 8 seconds.`
  },
  '3_2': {
    required: null,
    row: 3,
    name: 'Hustle',
    type: 'minor',
    img: `/skills/bowpassive5.webp`,
    description: `After a Dodge gain Haste, increasing movement speed by 10% for 3 seconds.`
  },
  '3_5': {
    required: null,
    row: 3,
    name: 'Sticky Bomb',
    type: 'major',
    img: `/skills/musketability6.webp`,
    description: `A bomb that can be thrown a short range and sticks to anything it makes contact with. Detonation will occur 5 seconds after impact dealing 175% weapon damage to all targets within 3 meters.`,
    cooldown: 12
  },
  '4_2': {
    required: null,
    row: 4,
    name: 'Energy Burst',
    type: 'minor',
    img: `/skills/rapier_ability6mod2_minortempo.webp`,
    description: `Attacking a target with an active debuff restores 20 stamina.`
  },
  '4_3': {
    required: 'Trapped Damage',
    row: 4,
    name: 'Scent of Blood',
    type: 'minor',
    img: `/skills/musketability4_mod1.webp`,
    description: `Regen 100% of weapon damage dealt as health when dealing damage to trapped targets.`,
    etc: ['double-up']
  },
  '4_4': {
    required: null,
    row: 4,
    name: 'Tactical Reload',
    type: 'minor',
    img: `/skills/bowpassive5.webp`,
    description: `When you dodge reload your musket (can only trigger once every 6s).`
  },
  '4_5': {
    required: 'Sticky Bomb',
    row: 4,
    name: 'Unflinching Walk',
    type: 'minor',
    img: `/skills/spear_vaultkick_alwaysdostaminadmg.webp`,
    description: `Sticky Bomb grants you 40 stamina when it deals damage with an explosion.`
  },
  '5_1': {
    required: 'Lasting Impression',
    row: 5,
    name: 'Supplementary Repulsion',
    type: 'minor',
    img: `/skills/musketpassive6.webp`,
    description: `Targets hit with Stopping Power are slowed by 10% for 8s.`,
    etc: ['double-up']
  },
  '5_3': {
    required: 'Scent of Blood',
    row: 5,
    name: 'Double Trap',
    type: 'minor',
    img: `/skills/musketability4_mod2.webp`,
    description: `You can now have 2 active traps.`
  },
  '5_4': {
    required: null,
    row: 5,
    name: `Kick 'em When They're Down`,
    type: 'minor',
    img: `/skills/spear_skewer_bonusdmgvsmaxhp.webp`,
    description: `Deal 10% extra damage to targets with an active debuff.`
  },
  '5_5': {
    required: 'Unflinching Walk',
    row: 5,
    name: `Sticky Slow`,
    type: 'minor',
    img: `/skills/musketpassive6.webp`,
    description: `Direct hits with Sticky Bomb cause the target to be slowed by 15% for 5s.`
  },
  '6_3': {
    required: null,
    row: 6,
    name: `Lethal Combo`,
    type: 'ultimate',
    img: `/skills/lifestaffpassive7.webp`,
    description: `Increase Muskey damage by 25% agaisnt targets affected by Trapper status effects.`
  }
};
