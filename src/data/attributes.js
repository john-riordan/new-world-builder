import { weapons } from '$data/weapons';

export const attributes = {
  str: {
    name: 'strength',
    title: 'Strength',
    short: 'Str',
    type: 'Melee focused',
    bonuses: [
      ['<span>+5%</span> damage to melee weapon light attacks', '<span>+10%</span> mining speed'],
      [
        '<span>+10%</span> damage to melee weapon heavy attacks',
        '<span>+20</span> mining encumbrance'
      ],
      [
        '<span>+50</span> stamina damage from melee weapon light and heavy attacks',
        '<span>-10%</span> decrease in weight of mined of mined items'
      ],
      [
        '<span>+10%</span> damage to stunned, slowed, or rooted enemies.',
        '<span>+10%</span> mining speed'
      ],
      [
        'Stamina regen continues while performing light and heavy attacks with a melee weapon',
        '<span>+10%</span> yield increase when mining'
      ],
      [
        'Light and heavy attacks with melee weapons gain <span>GRIT</span>',
        '<span>25%</span> chance to mine ore in a single swing'
      ]
    ]
  },
  con: {
    name: 'constitution',
    title: 'Constitution',
    short: 'Con',
    bonuses: [
      ['All healing consumables last <span>20%</span> longer', '<span>+10%</span> logging speed'],
      [
        'Increase max health by <span>10%</span> of your physcal armor',
        '<span>-10%</span> reduction on durability loss for tools'
      ],
      [
        '<span>-10%</span> to crit damage taken',
        '<span>-10%</span> decrease in weight of logging items'
      ],
      ['<span>+20%</span> increase to armor', '<span>+10%</span> logging speed'],
      [
        '<span>-80%</span> damage deduction when full health',
        '<span>+10%</span> yeild increase when logging'
      ],
      [
        '<span>+20%</span> duration of stun, slow, and root spells',
        '<span>25%</span> chance to chop down a tree in a single swing'
      ]
    ]
  },
  dex: {
    name: 'dexterity',
    title: 'Dexterity',
    short: 'Dex',
    type: 'Ranged focused',
    bonuses: [
      ['<span>+5%</span> chance to critical hit', '<span>+10</span> skinning speed'],
      ['<span>+5</span> thrust damage', '<span>+20%</span> haste for 3s after skinning'],
      [
        'Dodging cost <span>10</span> less stamina',
        '<span>-10%</span> decrease in weight of skinned items'
      ],
      ['<span>10%</span> bonus backstab and headshot damage', '<span>+10%</span> skinning speed'],
      [
        '<span>+10%</span> bonus critical hit damage on stunned, slowed, or rooted enemies.',
        '<span>+10%</span> yield yeild increase when skinning'
      ],
      [
        'Guaranteed critical hit after a dodge roll',
        'Ammo has a <span>15%</span> chance of being returned'
      ]
    ]
  },
  int: {
    name: 'intelligence',
    title: 'Intelligence',
    short: 'Int',
    bonuses: [
      [
        '<span>+10%</span> damage to light and heavy magic attacks',
        '<span>+10%</span> Harvest Speed'
      ],
      [
        '<span>+10%</span> critical hit damage',
        '<span>5%</span> chance for 1 Azoth when harvesting'
      ],
      [
        '<span>+15%</span> to Elemental damage',
        '<span>-10%</span> decreased in weight of harvested items'
      ],
      ['<span>+10</span> mana after a dodge', '<span>+10%</span> harvesting speed'],
      [
        '<span>+30%</span> duration to DoT spells',
        '<span>+10%</span> yield increase when harvesting'
      ],
      [
        '<span>+30% </span>damage on first hit of full health target',
        '<span>-10%</span> reduction in Azoth travel cost'
      ]
    ]
  },
  foc: {
    name: 'focus',
    title: 'Focus',
    short: 'Foc',
    bonuses: [
      ['<span>+10%</span> mana regen rate', '<span>+10%</span> fishing line tension'],
      ['<span>+20</span> to mana pool', '<span>+10%</span> yield increase when salvaging'],
      ['<span>+20%</span> healing output', '<span>-10%</span> decrease in weight of fishing items'],
      ['<span>+20%</span> duration on casting buffs', '<span>+10%</span> fishing line tension'],
      [
        '<span>+30</span> mana on any self or group kill',
        '<span>+10%</span> increase to caught fish size'
      ],
      [
        'When your mana hits 0, gain <span>200%</span> mana regen for 10s (60s cooldown)',
        '<span>-10%</span> cooldown reduction for Inn fast travel'
      ]
    ]
  }
};
