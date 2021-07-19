export const ICE_TEMPEST = {
  '1_2': {
    required: null,
    row: 1,
    name: 'Cold Reach',
    type: 'minor',
    img: `/skills/icemagic_passive1.webp`,
    description: `Increase damage of light and heavy attacks by <b>15%</b> for targets farther than 15 meters.`
  },
  '1_3': {
    required: null,
    row: 1,
    name: 'Ice Spikes',
    type: 'major',
    img: `/skills/icemagic_ability1.webp`,
    description: `Creates a trail of spikes that start from the player and go out in a straight line for 8 meters. The path ends with a Mighty Spike that will cause large damage and pushback. Pressing LMB before reaching the end of the path will spawn the Mighty Spike early.`,
    cooldown: 10,
    mana: 15
  },
  '1_4': {
    required: null,
    row: 1,
    name: 'Critical Rejuvenation',
    type: 'minor',
    img: `/skills/icemagic_passive2.webp`,
    description: `Recover 15 mana after triggering a critical hit on a target.`
  },
  '2_2': {
    required: null,
    row: 2,
    name: 'Energized Critical',
    type: 'minor',
    img: `/skills/icemagic_passive3.webp`,
    description: `Increase critical damage of Ice Spells by 15% when at full stamina.`
  },
  '2_3': {
    required: 'Ice Spikes',
    row: 2,
    name: 'Refreshing Spikes',
    type: 'minor',
    img: `/skills/icemagic_ability1_mod1.webp`,
    description: `Cooldown for this ability decreased by 10% if enemy is hit by Major Spike.`
  },
  '2_5': {
    required: null,
    row: 2,
    name: 'Ice Storm',
    type: 'major',
    img: `/skills/icemagic_ability2.webp`,
    description: `A ranged attack that damages and slows enemies within a 5 meter radius frosted area. 25% slow, 20 meter range, and 5 second duration.`,
    cooldown: 20,
    mana: 25
  },
  '3_1': {
    required: null,
    row: 3,
    name: 'Wind Chill',
    type: 'major',
    img: `/skills/icemagic_ability3.webp`,
    description: `Attack that blasts a focused beam of freezing winds forward that will push back any enemies in its area causing damage. Wind Chill will last for 2 seconds, have a range of 7 meters, and can be directed by the facing of the player. Player is able to move during the attack.`,
    cooldown: 15,
    mana: 20
  },
  '3_3': {
    required: 'Refreshing Spikes',
    row: 3,
    name: 'Empowered Spikes',
    type: 'minor',
    img: `/skills/icemagic_ability1_mod2.webp`,
    description: `Mighty Spike Damage increased by 20% when hitting an enemy below 30% health.`
  },
  '3_4': {
    required: null,
    row: 3,
    name: 'Gathering Storm',
    type: 'minor',
    img: `/skills/icemagic_passive4.webp`,
    description: `Hit with three consecutive light attacks to grant player 15 mana.`
  },
  '3_5': {
    required: 'Ice Storm',
    row: 3,
    name: 'Weakening Gust',
    type: 'minor',
    img: `/skills/icemagic_ability2_mod1.webp`,
    description: `Incoming damage is increased by 10% for 3 seconds to enemies in Ice Storm if below 50% health.`
  },
  '4_1': {
    required: 'Wind Chill',
    row: 4,
    name: 'Enduring Chill',
    type: 'minor',
    img: `/skills/icemagic_ability3_mod1.webp`,
    description: `Increase duration of Wind Chill by 1 second.`
  },
  '4_3': {
    required: 'Empowering Spikes',
    row: 4,
    name: 'Deadly Path',
    type: 'minor',
    img: `/skills/icemagic_ability1_mod3.webp`,
    description: `Increases damage by 10% and adds stagger to the path of spikes. Does not increase Mighty Spike damage.`
  },
  '4_4': {
    required: null,
    row: 4,
    name: 'Critical Frost',
    type: 'minor',
    img: `/skills/icemagic_passive5.webp`,
    description: `Increase critical chance if hitting an enemy in a frosted area or with Frostbite by 20%.`
  },
  '4_5': {
    required: 'Weakening  Gusy',
    row: 4,
    name: 'Storm Summoner',
    type: 'minor',
    img: `/skills/icemagic_ability2_mod2.webp`,
    description: `Ice Storm mana cost is decreased by 80% at full mana.`
  },
  '5_1': {
    required: 'Enduring Chill',
    row: 5,
    name: 'Chilling Blase',
    type: 'minor',
    img: `/skills/icemagic_ability4_mod1.webp`,
    description: `Increase the damage of the last 2 meters of Wind Chill by 25%.`
  },
  '5_2': {
    required: null,
    row: 5,
    name: 'Heavy Freeze',
    type: 'minor',
    img: `/skills/icemagic_passive6.webp`,
    description: `Heavy attack will freeze a target if hit in Ice Storm or with frostbite for 1 second.`
  },
  '5_3': {
    required: 'Deadly Path',
    row: 5,
    name: 'Spiky Reach',
    type: 'minor',
    img: `/skills/icemagic_ability1_mod4.webp`,
    description: `Ice Shards fire from the sides of the Mighty Spike to hit a wider area. Each Shard will have a 6 meter range and hit for 75% of the Mighty Spike’s damage.`
  },
  '5_5': {
    required: 'Storm Summoner',
    row: 5,
    name: 'Punishing Storm',
    type: 'minor',
    img: `/skills/icemagic_ability2_mod3.webp`,
    description: `Increases damage by 10% for each enemy in Ice Storm.`
  },
  '6_3': {
    required: null,
    row: 6,
    name: 'Ultimate Chill',
    type: 'ultimate',
    img: `/skills/greataxe_ultimate1.webp`,
    description: `Ice abilities chill targets increasing ice damage by 35% for 3 seconds.`
  }
};

export const BUILDER = {
  '1_2': {
    required: null,
    row: 1,
    name: 'Blocking Stamina',
    type: 'minor',
    img: `/skills/icemagic_passive7.webp`,
    description: `Blocking with Ice Gauntlet will convert mana to stamina on hit. 3 mana to 15 stamina.`
  },
  '1_3': {
    required: null,
    row: 1,
    name: 'Ice Pylon',
    type: 'major',
    img: `/skills/icemagic_ability4.webp`,
    description: `A placed Ice Pylon that fires ice projectiles at enemies within a 20 meter range for 15 seconds or until killed. Ice Pylon creates a 1 meter radius frost area that enables frost powers.`,
    cooldown: 10,
    mana: 15
  },
  '1_4': {
    required: null,
    row: 1,
    name: 'Quick Frost',
    type: 'minor',
    img: `/skills/icemagic_passive8.webp`,
    description: `Increase speed by 10% in a frosted area.`
  },
  '2_1': {
    required: null,
    row: 2,
    name: 'Ice Shower',
    type: 'major',
    img: `/skills/icemagic_ability5.webp`,
    description: `Summon a shower of ice that creates a frosted area approximately 1 meter by 5 meters. Enemies that enter the Ice Shower will be stricken with a powerful Frostbite. Frostbite blocks sprinting and dodging, slows speed by 50%, and will remain on target for 3 second after exiting the Ice Shower. Ice Shower has a lifetime of 4 seconds.`,
    cooldown: 20,
    mana: 25
  },
  '2_3': {
    required: 'Ice Pylon',
    row: 2,
    name: 'Greater Pylon',
    type: 'minor',
    img: `/skills/icemagic_ability4_mod1.webp`,
    description: `Increases damage of Ice Pylon by 10% to slowed targets.`
  },
  '2_4': {
    required: null,
    row: 2,
    name: 'Empowered Frost',
    type: 'minor',
    img: `/skills/icemagic_passive9.webp`,
    description: `Regain 3 mana for each spell cast while in a frosted area.`
  },
  '3_1': {
    required: 'Ice Shower',
    row: 3,
    name: 'Enduring Shower',
    type: 'minor',
    img: `/skills/icemagic_ability5_mod1.webp`,
    description: `Increase Ice Shower duration to 7 seconds.`
  },
  '3_2': {
    required: null,
    row: 3,
    name: 'Frozen Touch',
    type: 'minor',
    img: `/skills/icemagic_passive10.webp`,
    description: `Slow enemies by 25% for 2 seconds when they hit you with a melee attack while you have 100% health.`
  },
  '3_3': {
    required: 'Greater Pylon',
    row: 3,
    name: 'Pylon Regen',
    type: 'minor',
    img: `/skills/icemagic_ability4_mod2.webp`,
    description: `Ice Pylon regenerates to full health 5 seconds after last damage taken.`
  },
  '3_5': {
    required: null,
    row: 3,
    name: 'Entombed',
    type: 'major',
    img: `/skills/icemagic_ability6.webp`,
    description: `Player can entomb themselves in ice to become invulnerable and greatly increase mana regen. The Ice Tomb has a lifetime of 10 seconds and can be destroyed. Players have two options to cancel Entomb, exit by pressing RMB or break out of the Ice Tomb by pressing LMB causing a damaging knockback for 20 mana.`,
    cooldown: 30,
    mana: 0
  },
  '4_1': {
    required: 'Enduring Shower',
    row: 4,
    name: 'Quick Shower',
    type: 'minor',
    img: `/skills/icemagic_ability5_mod2.webp`,
    description: `Any ally, including self, will get a 25% speed boost for 2 seconds when entering Ice Shower.`
  },
  '4_3': {
    required: 'Pylon Regen',
    row: 4,
    name: 'Pylon Dodge',
    type: 'minor',
    img: `/skills/icemagic_ability4_mod3.webp`,
    description: `Dodging with full stamina increases Ice Pylon rate of fire for 3 seconds.`
  },
  '4_4': {
    required: null,
    row: 4,
    name: 'Refreshing Frost',
    type: 'minor',
    img: `/skills/icemagic_passive11.webp`,
    description: `Reduce all active cooldowns for ice abilities by 20% when casting an ability in a frosted area.`
  },
  '4_5': {
    required: 'Entombed',
    row: 4,
    name: 'Strengthened Tomb',
    type: 'minor',
    img: `/skills/icemagic_ability6_mod1.webp`,
    description: `Increases defense by 25% for 3 seconds after breaking out of Entombed.`
  },
  '5_1': {
    required: 'Quick Shower',
    row: 5,
    name: 'Frigid Showers',
    type: 'minor',
    img: `/skills/icemagic_ability3_mod2.webp`,
    description: `Frostbite applies Rend to target, reducing defense by 10%.`
  },
  '5_2': {
    required: null,
    row: 5,
    name: 'Defiant Freeze',
    type: 'minor',
    img: `/skills/icemagic_passive12.webp`,
    description: `Casting an Ice ability creates an ice hardened layer granting 20% fortify for 2 seconds.`
  },
  '5_3': {
    required: 'Pylon Dodge',
    row: 5,
    name: 'Pylon Refresh',
    type: 'minor',
    img: `/skills/icemagic_ability4_mod4.webp`,
    description: `A successful hit extends Ice Pylon's lifetime by 1 second.`
  },
  '5_5': {
    required: 'Strengthened Tomb',
    row: 5,
    name: 'Cleansing Tomb',
    type: 'minor',
    img: `/skills/icemagic_ability6_mod2.webp`,
    description: `Cleanse all debuffs when being Entombed.`
  },
  '6_3': {
    required: 'Pylon Refresh',
    row: 6,
    name: 'Ultimate Frost',
    type: 'ultimate',
    img: `/skills/greataxe_ultimate2.webp`,
    description: `Doubles Ice Pylon's health and extends Ice Pylon frost radius to 5 meters. Standing in this area doubles Quick Frost and Empowered Frost bonuses.`
  }
};
