<script context="module">
	export const prerender = true;

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

	const renderedWep = data && data.name;

	import Wep from '$lib/components/Wep/index.svelte';
</script>

<svelte:head>
	<title>{data.title} - World Forge</title>
</svelte:head>

{#if data}
	<h1>{data.title}</h1>

	<Wep wepName={renderedWep} treeLeft={data.tree1} treeRight={data.tree2} />
{/if}
