<script context="module">
	import { weapons } from '../../weapons';

	export async function load({ page }) {
		const slug = page.params.weapon;
		const wepInfo = weapons[slug];

		return {
			props: {
				data: wepInfo,
				error: !wepInfo && 'No Weapon Found'
			}
		};
	}
</script>

<script>
	export let data;
	export let error;

	import { renderedWep, renderedWepData, selectedWeps, wep0Pts, wep1Pts } from '../../stores';

	$: activeWepindex = $selectedWeps.findIndex((wep) => wep === $renderedWep);

	import Wep from '$lib/components/Wep/index.svelte';
</script>

<svelte:head>
	<title>{data.title} - World Forge</title>
</svelte:head>

{#if data}
	<h1>{data.title}</h1>

	<Wep {activeWepindex} treeLeft={data.tree1} treeRight={data.tree2} />
{/if}
