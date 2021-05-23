<script context="module">
	export const prerender = true;
</script>

<script>
	import Tabs from '$lib/Tabs/index.svelte';
	import Attributes from '$lib/components/Attributes/index.svelte';
	import Weapons from '$lib/components/Weapons/index.svelte';

	const wepTabs = [
		{
			title: 'Attributes',
			component: Attributes
		},
		{
			title: 'Weapons',
			component: Weapons
		},
		{
			title: 'asfdafasdf',
			component: Weapons
		}
	];
</script>

<svelte:head>
	<title>New World Builder</title>
</svelte:head>

<section>
	<!-- <h1>New World Builder</h1>
	<p>This is a New builds builder app/tool</p> -->
	<Tabs tabs={wepTabs} />
</section>

<style>
</style>
