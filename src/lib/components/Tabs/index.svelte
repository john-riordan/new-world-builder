<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	export let tabs = [];

	$: query = $page.query.get('tab');
	$: selectedTab = query ? tabs.findIndex((tab) => tab.title === query) : 0;
</script>

<div class="tab-list">
	{#each tabs as tab, index}
		{#if !tab.url}
			<div
				class="tab"
				class:active={index === selectedTab}
				on:click={() => {
					if (!tab.url) goto(`/?tab=${tab.title}`);
				}}
			>
				{tab.title}
			</div>
		{:else if tab.url}
			<a href={tab.url} class="tab" class:active={$page.path.includes(tab.url)}>
				{tab.title}
			</a>
		{/if}
	{/each}
</div>
