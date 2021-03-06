export const ZONER = {
  '1_2': {
    required: null,
    row: 1,
    name: 'Deadly Consistency',
    type: 'minor',
    img: `/skills/spear_bonushvydmgconsec.webp`,
    description: `+10% damage on consecutive heavy attacks against a single target.`
  },
  '1_3': {
    required: null,
    row: 1,
    name: 'Javelin',
    type: 'major',
    img: `/skills/spear_javelin.webp`,
    description: `Throw your spear, dealing 125% weapon damage and staggering on hit.`,
    cooldown: 15
  },
  '1_4': {
    required: null,
    row: 1,
    name: 'Deadly Reach',
    type: 'minor',
    img: `/skills/spear_bonushvydmgatrng.webp`,
    description: `+10% Critical Chance on attacks against targets that are 3+ meters away.`
  },
  '2_1': {
    required: null,
    row: 2,
    name: 'Refreshing Reach',
    type: 'minor',
    img: `/skills/swordability1_mod1.webp`,
    description: `Successful heavy attacks reduce all Spear cooldowns by 15%.`
  },
  '2_3': {
    required: 'Javelin',
    row: 2,
    name: 'Forceful Impact',
    type: 'minor',
    img: `/skills/spear_javelin_reaction_upgrade.webp`,
    description: `Targets are knocked down when hit by Javelin.`
  },
  '2_4': {
    required: null,
    row: 2,
    name: 'Evasive Maneuvers',
    type: 'minor',
    img: `/skills/bowpassive12.webp`,
    description: `Dodging backwards consumes 20% less stamina for 2s after successful hits.`
  },
  '2_5': {
    required: null,
    row: 2,
    name: 'Sweep',
    type: 'major',
    img: `/skills/spear_sweep.webp`,
    description: `Sweep the target's legs, dealing 75% weapon damage and knocking them down.`,
    cooldown: 10
  },
  '3_1': {
    required: null,
    row: 3,
    name: 'Cyclone',
    type: 'major',
    img: `/skills/spear_cyclone.webp`,
    description: `Spin attack that deals 100% weapon damage, pushes targets back 3 meters and applies 50% Slow for 3s.`,
    cooldown: 12
  },
  '3_2': {
    required: null,
    row: 3,
    name: 'Invigorating Crits',
    type: 'minor',
    img: `/skills/spear_bonusstaminaonkill.webp`,
    description: `Restore 20 stamina on Critical Hits.`
  },
  '3_4': {
    required: null,
    row: 3,
    name: 'Merciless Strength',
    type: 'minor',
    img: `/skills/spear_bonusdmgvsknockeddown.webp`,
    description: `+25% damage against knocked down targets.`
  },
  '3_5': {
    required: 'Sweep',
    row: 3,
    name: 'Tenacious Sweep',
    type: 'minor',
    img: `/skills/spear_sweep_grit.webp`,
    description: `Sweep now gains Grit, making it uninterruptible`
  },
  '4_1': {
    required: 'Cyclone',
    row: 4,
    name: 'Invigorating Combo',
    type: 'minor',
    img: `/skills/spear_cyclone_bonusstaminaonmultihit.webp`,
    description: `Cyclone gains +25 Stamina per hit.`
  },
  '4_3': {
    required: 'Forceful Impact',
    row: 4,
    name: 'Refreshing Precision',
    type: 'minor',
    img: `/skills/spear_javelin_cdronheadshot.webp`,
    description: `Javelin headshots reduce the cooldown of Javelin by 50%.`,
    etc: ['double-up']
  },
  '4_4': {
    required: null,
    row: 4,
    name: 'Defensive Stance',
    type: 'minor',
    img: `/skills/swordpassive14.webp`,
    description: `Gain Fortify after successful heavy attacks, increasing damage absorption by 15.0% for 2.0 seconds.`
  },
  '4_5': {
    required: 'Tenacious Sweep',
    row: 4,
    name: 'Coup de Grace',
    type: 'minor',
    img: `/skills/spear_sweep_followupattack.webp`,
    description: `Press Light Attack during sweep to follow up with a powerful downward stab that deals 125% weapon damage.`
  },
  '5_1': {
    required: 'Invigorating Combo',
    row: 5,
    name: 'Strong Momentum',
    type: 'minor',
    img: `/skills/spear_cyclone_grit.webp`,
    description: `Cylong gains Grit making it uninterruptible.`
  },
  '5_2': {
    required: null,
    row: 5,
    name: 'Strong Conditioning',
    type: 'minor',
    img: `/skills/rapier_evasionpass5_dodgein.webp`,
    description: `+30% stamina regen when your stamina is below 50%.`
  },
  '5_3': {
    required: 'Refreshing Precision',
    row: 5,
    name: 'Deadly Distance',
    type: 'minor',
    img: `/skills/spear_javelin_bonusdmg_longrng.webp`,
    description: `Javelin gain +2.5% damage per meter traveled (+100% max).`
  },
  '6_3': {
    required: null,
    row: 6,
    name: 'Reserved Strength',
    type: 'ultimate',
    img: `/skills/spear_bonusdmgmaxstamina.webp`,
    description: `Gain +25% damage when your stamina is full.`
  }
};

export const IMPALER = {
  '1_1': {
    required: null,
    name: 'Precise Jabs',
    row: 1,
    type: 'minor',
    img: `/skills/spear_fortifyvsgrit.webp`,
    description: `+5% Critical Chance on light attacks.`
  },
  '1_3': {
    required: null,
    name: 'Skewer',
    row: 1,
    type: 'major',
    img: `/skills/spear_skewer.webp`,
    description: `Rush forward and skewer your target, dealing 125% weapon damage. Applies Bleed (10% weapon damage) every 1s for 10s.`,
    cooldown: 15
  },
  '1_5': {
    required: null,
    name: 'Refreshing Jabs',
    row: 1,
    type: 'minor',
    img: `/skills/spear_cdronlight.webp`,
    description: `All spear cooldowns are reduced by 10% on the second hit of the light attack chain.`
  },
  '2_1': {
    required: null,
    name: 'Perforate',
    row: 2,
    type: 'major',
    img: `/skills/spear_perforate.webp`,
    description: `Three quick piercing strikes that each deal 70% weapon damage and apply Rend, reducing the target's damage absorption by 5% for 10s.`,
    cooldown: 12
  },
  '2_2': {
    required: null,
    name: 'Crippling Jabs',
    row: 2,
    type: 'minor',
    img: `/skills/swordability5_mod1.webp`,
    description: `The last hit of the light attack chain applies 30% Slow for 3s to targets below 30% health.`
  },
  '2_3': {
    required: 'Skewer',
    name: 'Deadly Ambush',
    row: 2,
    type: 'minor',
    img: `/skills/spear_skewer_bonusdmgvsmaxhp.webp`,
    description: `+20% damage against targets that have full health.`
  },
  '2_4': {
    required: null,
    name: 'Finishing Blows',
    row: 2,
    type: 'minor',
    img: `/skills/spear_bonusdmgvslowhp.webp`,
    description: `+15% damage against targets with less than 30% health.`
  },
  '3_2': {
    required: null,
    name: 'Unerring Precision',
    row: 3,
    type: 'minor',
    img: `/skills/spear_bonusdmgvsgrit.webp`,
    description: `+20% damage against targets with active grit.`
  },
  '3_3': {
    required: 'Deadly Ambush',
    name: 'Follow Through',
    row: 3,
    type: 'minor',
    img: `/skills/spear_skewer_empoweronkill.webp`,
    description: `Gain empower on critical hits, increasing damage by 20% for 10s.`
  },
  '3_5': {
    required: null,
    name: 'Vault Kick',
    row: 3,
    type: 'major',
    img: `/skills/spear_vaultkick.webp`,
    description: `Use your spear to vault forward and kick your target, dealing 75% weapon damage. Applies Stun for 1.5s.
    <br /><br />
    Taunt Gem Compatible: If you have a Carnelian gem equiped in your spear, This ability cause a 2s taunts when it hits. (Taunt causes monsters to focus only on you.)`,
    cooldown: 15
  },
  '4_1': {
    required: 'Perforate',
    name: 'Rupturing Strikes',
    row: 4,
    type: 'minor',
    img: `/skills/spear_perforate_bonusrend.webp`,
    description: `Rend increased to 10% per strike against targets above 50% health.`,
    etc: ['double-up']
  },
  '4_3': {
    required: 'Follow Through',
    name: 'Deep Wound',
    row: 4,
    type: 'minor',
    img: `/skills/spear_skewer_bonusbleeddmg.webp`,
    description: `Increase Skewer bleed duration to 15s.`
  },
  '4_4': {
    required: null,
    name: 'Aggressive Maneuvers',
    row: 4,
    type: 'minor',
    img: `/skills/rapier_bloodmasterpass1_lightbleeds.webp`,
    description: `The first successful hit with an ability within 2s of dodging reduces all Spear cooldowns by 20%.`
  },
  '4_5': {
    required: 'Vault Kick',
    name: 'Relentless Blows',
    row: 4,
    type: 'minor',
    img: `/skills/swordability1_mod2.webp`,
    description: `Gain Empower after successful hits with Vault Kick on targets below 50% health, increasing damage by 20% for 5s.`
  },
  '5_1': {
    required: 'Rupturing Strikes',
    name: 'Impactful Strikes',
    row: 5,
    type: 'minor',
    img: `/skills/spear_perforate_bonusblockpushback.webp`,
    description: `Target is staggered if you successfully land all three hits of Perforate.`
  },
  '5_2': {
    required: null,
    name: 'Exacerbating Crits',
    row: 5,
    type: 'minor',
    img: `/skills/spear_cdronbleedkill.webp`,
    description: `Critical hits extend the duration of Spear debuffs by 20%.`
  },
  '5_4': {
    required: null,
    name: 'Exposed Wounds',
    row: 5,
    type: 'minor',
    img: `/skills/rapier_bloodmasterpass4_bleeddamage.webp`,
    description: `+15% critical strike chance against bleeding targets.`
  },
  '5_5': {
    required: 'Relentless Blows',
    name: 'Continuous Motion',
    row: 5,
    type: 'minor',
    img: `/skills/swordability1_mod1.webp`,
    description: `Cooldowns for other spear abilities are reduced by 30% on successful hits of Vault Kick.`
  },
  '6_3': {
    required: null,
    name: 'Exploited Weakness',
    row: 6,
    type: 'ultimate',
    img: `/skills/spear_bonusdmgvsdebuff.webp`,
    description: `+10% damage per debuff on target (30% max).`
  }
};
