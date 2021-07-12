export const monsters = {
	ancient: {
		name: 'ancient',
		title: 'Ancients',
		weakness: [
			{
				damage_type: 'strike',
				amount: 1
			},
			{
				damage_type: 'lightning',
				amount: 2
			}
		],
		resists: [
			{
				damage_type: 'slash',
				amount: 1
			},
			{
				damage_type: 'nature',
				amount: 3
			},
			{
				damage_type: 'fire',
				amount: 1
			}
		]
	},
	corrupted: {
		name: 'corrupted',
		title: 'Corrupted',
		weakness: [
			{
				damage_type: 'nature',
				amount: 2
			},
			{
				damage_type: 'arcane',
				amount: 3
			},
			{
				damage_type: 'thrust',
				amount: 2
			}
		],
		resists: [
			{
				damage_type: 'ice',
				amount: 3
			},
			{
				damage_type: 'strike',
				amount: 2
			}
		]
	},
	lost: {
		name: 'lost',
		title: 'Lost',
		weakness: [
			{
				damage_type: 'nature',
				amount: 2
			},
			{
				damage_type: 'ice',
				amount: 1
			},
			{
				damage_type: 'strike',
				amount: 2
			}
		],
		resists: [
			{
				damage_type: 'thrust',
				amount: 2
			}
		]
	},

	angry_earth: {
		name: 'angry_earth',
		title: 'Angry Earth',
		weakness: [
			{
				damage_type: 'fire',
				amount: 3
			},
			{
				damage_type: 'slash',
				amount: 1
			}
		],
		resists: [
			{
				damage_type: 'lightning',
				amount: 3
			},
			{
				damage_type: 'thrust',
				amount: 2
			}
		]
	}
};
