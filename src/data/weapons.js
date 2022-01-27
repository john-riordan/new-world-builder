import { SWORDMASTER, DEFENDER } from './wepTrees/sword';
import { THROWING, BERZERKER } from './wepTrees/hatchet';
import { BLOOD, GRACE } from './wepTrees/rapier';
import { ZONER, IMPALER } from './wepTrees/spear';
import { REAPER, MAULER } from './wepTrees/greatAxe';
import { JUGGERNAUT, CROWD_CRUSHER } from './wepTrees/warHammer';
import { SKIRMISHER, HUNTER } from './wepTrees/bow';
import { SHARPSHOOTER, TRAPPER } from './wepTrees/musket';
import { FIRE_MAGE, PYROMANCER } from './wepTrees/fireStaff';
import { HEALING, PROTECTOR } from './wepTrees/lifeStaff';
import { ICE_TEMPEST, BUILDER } from './wepTrees/iceGauntlet';

export const weapons = {
  'straight-sword': {
    name: 'straight-sword',
    title: 'Sraight Sword',
    damage_type: 'slash',
    primary: 'str',
    secondary: 'dex',
    tree1: {
      name: 'swordmaster',
      skills: SWORDMASTER,
      color: '--skill-red'
    },
    tree2: {
      name: 'defender',
      skills: DEFENDER,
      color: '--skill-red'
    }
  },
  rapier: {
    name: 'rapier',
    title: 'Rapier',
    damage_type: 'thrust',
    primary: 'dex',
    secondary: 'int',
    tree1: {
      name: 'blood',
      skills: BLOOD,
      color: '--skill-red'
    },
    tree2: {
      name: 'grace',
      skills: GRACE,
      color: '--skill-red'
    }
  },
  hatchet: {
    name: 'hatchet',
    title: 'Hatchet',
    damage_type: 'slash',
    primary: 'str',
    secondary: 'dex',
    tree1: {
      name: 'berzerker',
      skills: BERZERKER,
      color: '--skill-orange'
    },
    tree2: {
      name: 'throwing',
      skills: THROWING,
      color: '--skill-olive'
    }
  },
  spear: {
    name: 'spear',
    title: 'Spear',
    damage_type: 'thrust',
    primary: 'dex',
    secondary: 'str',
    tree1: {
      name: 'zoner',
      skills: ZONER,
      color: '--skill-olive'
    },
    tree2: {
      name: 'impaler',
      skills: IMPALER,
      color: '--skill-red'
    }
  },
  'great-axe': {
    name: 'great-axe',
    title: 'Great Axe',
    damage_type: 'slash',
    primary: 'str',
    tree1: {
      name: 'reaper',
      skills: REAPER,
      color: '--skill-red'
    },
    tree2: {
      name: 'mauler',
      skills: MAULER,
      color: '--skill-red'
    }
  },
  'war-hammer': {
    name: 'war-hammer',
    title: 'War Hammer',
    damage_type: 'strike',
    primary: 'str',
    tree1: {
      name: 'juggernaut',
      skills: JUGGERNAUT,
      color: '--skill-red'
    },
    tree2: {
      name: 'crowdCrusher',
      skills: CROWD_CRUSHER,
      color: '--skill-purple'
    }
  },
  bow: {
    name: 'bow',
    title: 'Bow',
    damage_type: 'thrust',
    primary: 'dex',
    tree1: {
      name: 'skirmisher',
      skills: SKIRMISHER,
      color: '--skill-olive'
    },
    tree2: {
      name: 'hunter',
      skills: HUNTER,
      color: '--skill-olive'
    }
  },
  musket: {
    name: 'musket',
    title: 'Musket',
    damage_type: 'thrust',
    primary: 'dex',
    secondary: 'int',
    tree1: {
      name: 'sharpshooter',
      skills: SHARPSHOOTER,
      color: '--skill-olive'
    },
    tree2: {
      name: 'trapper',
      skills: TRAPPER,
      color: '--skill-purple'
    }
  },
  'fire-staff': {
    name: 'fire-staff',
    title: 'Fire Staff',
    damage_type: 'fire',
    primary: 'int',
    tree1: {
      name: 'fireMage',
      skills: FIRE_MAGE,
      color: '--skill-blue'
    },
    tree2: {
      name: 'pyroMancer',
      skills: PYROMANCER,
      color: '--skill-blue'
    }
  },
  'life-staff': {
    name: 'life-staff',
    title: 'Life Staff',
    damage_type: 'nature',
    primary: 'foc',
    tree1: {
      name: 'healing',
      skills: HEALING,
      color: '--skill-turq'
    },
    tree2: {
      name: 'protector',
      skills: PROTECTOR,
      color: '--skill-turq'
    }
  },
  'ice-gauntlet': {
    name: 'ice-gauntlet',
    title: 'Ice Gauntlet',
    damage_type: 'ice',
    primary: 'int',
    tree1: {
      name: 'iceTempest',
      skills: ICE_TEMPEST,
      color: '--skill-blue'
    },
    tree2: {
      name: 'builder',
      skills: BUILDER,
      color: '--skill-blue'
    }
  }
};

export const wepClasses = [
  {
    title: 'One-Handed Weapons',
    list: [weapons['straight-sword'], weapons.rapier, weapons.hatchet]
  },
  {
    title: 'Two-Handed Weapons',
    list: [weapons.spear, weapons['great-axe'], weapons['war-hammer']]
  },
  {
    title: 'Ranged Weapons',
    list: [weapons.bow, weapons.musket, { name: null }]
  },
  {
    title: 'Magic',
    list: [weapons['fire-staff'], weapons['life-staff'], weapons['ice-gauntlet']]
  }
];
