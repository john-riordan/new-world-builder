<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	export let tabs = [];

	$: query = $page.query.get('tab');
	$: selectedTab = query ? tabs.findIndex((tab) => tab.title === query) : 0;
	$: selected = tabs[selectedTab];
</script>

<div class="tab-list">
	{#each tabs as tab, index}
		<div
			class="tab"
			class:active={index === selectedTab}
			on:click={() => {
				goto(`/?tab=${tab.title}`);
			}}
		>
			{tab.title}
		</div>
	{/each}
</div>

<svelte:component this={selected.component} />

<style>
	.tab-list {
		display: flex;
		border-bottom: 1px solid var(--white);
	}
	.tab {
		display: flex;
		align-items: center;
		height: 3.75rem;
		padding: 1rem;
		border: 1px solid var(--grey);
		border-bottom: none;
		font-size: 1.25rem;
		text-transform: uppercase;
		font-family: var(--text-script);
		letter-spacing: 4px;
		cursor: pointer;
	}
	.tab:not(:last-of-type) {
		border-right: none;
	}
	.tab.active {
		background: var(--grey);
	}
</style>
