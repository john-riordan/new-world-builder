const CDN = 'https://cdn.newworldfans.com/db_images/db/abilities';

export const BLOOD = {
  '1_1': {
    required: null,
    row: 1,
    name: 'Tondo',
    type: 'major',
    img: `${CDN}/rapier_ability1_slash.png`,
    description: `Slash so quickly it extends the reach of your blade. This strike deals direct damage but also applies a bleed that will deal 100% weapon damage over 12 seconds. This can stack up to 3 times refreshing previous applications.`,
    cooldown: 11
  },
  '1_2': {
    required: null,
    row: 1,
    name: 'Refreshing Strikes',
    type: 'minor',
    img: `${CDN}/rapier_bloodmasterpass2_heavybleeds.png`,
    description: `Reduce all cooldowns by 1% on any hit.`
  },
  '1_4': {
    required: null,
    row: 1,
    name: 'Engarde',
    type: 'minor',
    img: `${CDN}/rapier_bloodmasterpass3_redcurtains.png`,
    description: `Deal 10% more damage when your target has greater than 50% health.`
  },
  '1_5': {
    required: null,
    row: 1,
    name: 'Flurry',
    type: 'major',
    img: `${CDN}/rapier_ability2_flurry.png`,
    description: `Enter a posed stance and unleash a series of five quick thrust attacks with each strike dealing more damage. Flurry can be dodge canceled at any time.`,
    cooldown: 16
  },
  '2_2': {
    required: null,
    row: 2,
    name: 'Unerring',
    type: 'minor',
    img: `${CDN}/rapier_bloodmasterpass4_bleeddamage.png`,
    description: `Deal 5% more damage to targets with a Rapier bleed.`
  },
  '2_3': {
    required: null,
    row: 2,
    name: 'Flourish and Finish',
    type: 'major',
    img: `${CDN}/rapier_ability3_flourish.png`,
    description: `Flourish performs an attack knocking back enemies. Pressing 'Light Attack' at the end of Flourish will continue this ability by automatically performing 'Finish'. Finish lunges forward, consuming all Rapier bleeds on any target hit dealing 110% of their damage immediately.`,
    cooldown: 20
  },
  '2_5': {
    required: 'Flurry',
    row: 2,
    name: 'Overwhelm',
    type: 'minor',
    img: `${CDN}/rapier_ability2mod2_all_in.png`,
    description: `Each hit of flurry does 25% more block damage.`
  },
  '3_1': {
    required: 'Tondo',
    row: 3,
    name: 'Thirst for Blood',
    type: 'minor',
    img: `${CDN}/rapier_ability1mod1_pressure.png`,
    description: `When applying the first bleed stack to an opponent this cooldown is reduced by 10.0%.`,
    etc: ['double-up']
  },
  '3_3': {
    required: 'Flourish and Finish',
    row: 3,
    name: 'With Flair',
    type: 'minor',
    img: `${CDN}/rapier_ability3mod1_grit.png`,
    description: `Gain Grit on both Flourish and Finish (attack cannot be interrupted).`
  },
  '3_4': {
    required: null,
    row: 3,
    name: 'Light Edge',
    type: 'minor',
    img: `${CDN}/rapier_bloodmasterpass5_doubleslash.png`,
    description: `Increase damage from both middle swipe attacks in the light attack chain by 8%.`
  },
  '3_5': {
    required: 'Overwhelm',
    row: 3,
    name: 'Fleeting Strikes',
    type: 'minor',
    img: `${CDN}/rapier_ability2mod1_hastyflurry.png`,
    description: `Each hit of Flurry reduces the cooldown by 7%.`
  },
  '4_1': {
    required: 'Thirst for Blood',
    row: 4,
    name: 'And Again',
    type: 'minor',
    img: `${CDN}/rapier_ability1mod2_compoundattack.png`,
    description: `If you hit any target, even on a blocked hit, reduce Tondo's cooldown by 25%.`
  },
  '4_2': {
    required: null,
    row: 4,
    name: 'Heavy Puncture',
    type: 'minor',
    img: `${CDN}/rapier_bloodmasterpass1_lightbleeds.png`,
    description: `Any heavy attack on a bleeding enemy will extend their Rapier bleeds by 2 seconds. This will also apply to future stacked applications of the same bleed extending the entire stack.`
  },
  '4_3': {
    required: 'With Flair',
    row: 4,
    name: 'Swagger',
    type: 'minor',
    img: `${CDN}/rapier_ability3mod2_stamina.png`,
    description: `+20 Stamina when successfully hitting a target with Finish.`
  },
  '4_5': {
    required: 'Fleeting Strikes',
    row: 4,
    name: 'To the Bone',
    type: 'minor',
    img: `${CDN}/rapier_ability2mod3_continuedweakness.png`,
    description: `Each hit of Flurry extends bleeds by 1s. This also applies to future stacked applications of the same bleed endtending the entire stack.`
  },
  '5_1': {
    required: 'And Again',
    row: 5,
    name: 'Proper Spacing',
    type: 'minor',
    img: `${CDN}/rapier_evasionpass2_controlledbreathing.png`,
    description: `Increase the damage of Tondo by 100% if you are at least 4 meters away from your target.`
  },
  '5_3': {
    required: 'Swagger',
    row: 5,
    name: 'Fuel',
    type: 'minor',
    img: `${CDN}/rapier_bloodmasterpass2_heavybleeds.png`,
    description: `Each tick of damage from Tondo's bleed reduces the cooldown of Flourish and Finish by 3.5%.`
  },
  '5_5': {
    required: 'To the Bone',
    row: 5,
    name: 'Finalize',
    type: 'minor',
    img: `${CDN}/rapier_evasionpass4_artofbattle.png`,
    description: `The last hit of Flurry causes the enemy the stagger.`
  },
  '6_3': {
    required: 'Fuel',
    row: 6,
    name: 'Bloody End',
    type: 'ultimate',
    img: `${CDN}/rapier_ability3mod3_deadlyfinish.png`,
    description: `Finish deatls 150% of bleed damage instead of only 110%.`
  }
};

export const GRACE = {
  '1_2': {
    required: null,
    row: 1,
    name: 'Desperation',
    type: 'minor',
    img: `${CDN}/rapier_evasionpass5_dodgein.png`,
    description: `Deal 10% more damage when your stamina is below 40%.`
  },
  '1_3': {
    required: null,
    row: 1,
    name: 'Evade',
    type: 'major',
    img: `${CDN}/rapier_ability6_evade.png`,
    description: `Perform a small, reliable sidestep in your current movement direction that cancels any current activity and provides momentary invulnerability. 'Light Attack's made during Evade are performed exceptionally fast.`,
    cooldown: 6
  },
  '1_4': {
    required: null,
    row: 1,
    name: 'Controlled Breathing',
    type: 'minor',
    img: `${CDN}/rapier_evasionpass2_controlledbreathing.png`,
    description: `+3 Stamina on any hit.`
  },
  '2_1': {
    required: null,
    row: 2,
    name: 'Riposte',
    type: 'major',
    img: `${CDN}/rapier_ability4_riposte.png`,
    description: `Enter into a defensive stance for 1 second. If struck during this ability, counter the attacker stunning them briefly for 1.5 seconds. You are briefly invulnerable upon a successful Riposte.
		<br /><br />
		Taunt Gem Compatible: If you have a Carnelian gem equiped in your rapier, This ability cause a 4s taunts to all foes within 5m. (Taunt causes monsters to focus only on you.)`,
    cooldown: 20
  },
  '2_3': {
    required: 'Evade',
    row: 2,
    name: 'Breathe In',
    type: 'minor',
    img: `${CDN}/rapier_ability6mod1_breath.png`,
    description: `Gain +20 stamina immediately on case of Evade.`
  },
  '2_4': {
    required: null,
    row: 2,
    name: 'Perfectionist',
    type: 'minor',
    img: `${CDN}/rapier_evasionpass1_perfectionist.png`,
    description: `Deal 10% more damage when your health is full.`
  },
  '2_5': {
    required: null,
    row: 2,
    name: 'Fleche',
    type: 'major',
    img: `${CDN}/rapier_ability5_aeriallunge.png`,
    description: `Leave the ground lunging forward for 10m in a stabbing motion piercing through enemies dealing 145% damage.`,
    cooldown: 17
  },
  '3_1': {
    required: 'Riposte',
    row: 3,
    name: 'Insult to Injury',
    type: 'minor',
    img: `${CDN}/rapier_ability4mod1_insult_to_injury.png`,
    description: `If Riposte is triggered successfully, all your attack become uninterruptable for 3s.`
  },
  '3_2': {
    required: null,
    row: 3,
    name: 'Red Curtains',
    type: 'minor',
    img: `${CDN}/rapier_bloodmasterpass2_heavybleeds.png`,
    description: `Critical strikes reduce all cooldown by 5%.`
  },
  '3_3': {
    required: 'Breathe In',
    row: 3,
    name: 'Allegro',
    type: 'minor',
    img: `${CDN}/rapier_bloodmasterpass2_heavybleeds.png`,
    description: `Gain 20% movement speed for 3s after casting Evade.`
  },
  '3_5': {
    required: 'Fleche',
    row: 3,
    name: 'Quick Lunge',
    type: 'minor',
    img: `${CDN}/rapier_ability5mod1_renewedvigor.png`,
    description: `Killing with Fleche reduces its cooldown by 80%.`
  },
  '4_1': {
    required: 'Insult to Injury',
    row: 4,
    name: 'Priority',
    type: 'minor',
    img: `${CDN}/rapier_ability4mod2_priority.png`,
    description: `Reduce the cooldown of other Rapier abilities by 20% when landing a Riposte stun.`
  },
  '4_3': {
    required: 'Allegro',
    row: 4,
    name: 'Adagio',
    type: 'minor',
    img: `${CDN}/rapier_ability6mod3_majortempo.png`,
    description: `Evading forwards gains 15% increased damage on your next light attack. Ends on hit or after 1s.`
  },
  '4_4': {
    required: null,
    row: 4,
    name: 'Swiftness',
    type: 'minor',
    img: `${CDN}/rapier_evasionpass4_artofbattle.png`,
    description: `+3% Haste for 4s on any hit. Stacks up to 5 times.`
  },
  '4_5': {
    required: 'Quick Lunge',
    row: 4,
    name: 'Backside',
    type: 'minor',
    img: `${CDN}/rapier_bloodmasterpass5_doubleslash.png`,
    description: `After casting Fletch, your next critical strike attack will have its damage increased by 15% for 5s.`
  },
  '5_1': {
    required: 'Priority',
    row: 5,
    name: 'Lasting Consequence',
    type: 'minor',
    img: `${CDN}/rapier_ability2mod2_all_in.png`,
    description: `Increase Riposte's stun to 2s.`
  },
  '5_3': {
    required: 'Adagio',
    row: 5,
    name: 'Crescendo',
    type: 'minor',
    img: `${CDN}/rapier_ability6mod4_bursttempo.png`,
    description: `Light attacks reduce the cooldown of Evade by 30% each.`
  },
  '5_5': {
    required: 'Backside',
    row: 5,
    name: 'Interruption',
    type: 'minor',
    img: `${CDN}/rapier_ability5mod2_wake.png`,
    description: `Pressing Light Attack any time during Fleche will stop and perform a static, continuation attack dealing 115% damage.`
  },
  '6_3': {
    required: null,
    row: 6,
    name: 'Momentum',
    type: 'ultimate',
    img: `${CDN}/rapier_evasionpass3_momentum.png`,
    description: `Gain 25% increased damage on your next light or heavy attack after performing an ability. Ends on hit or after 3s.`
  }
};
