<script context="module">
	export const prerender = true;

	import affixes from '../affixes';
	import { attributes } from '../attributes';

	export async function load() {
		return {
			props: {
				data: affixes,
				attrs: attributes
			}
		};
	}
</script>

<script>
	export let data;
	export let attrs;

	let primary;
	let secondary;

	$: selectedKey = primary && secondary && `${primary}_${secondary}`;
	$: selected = selectedKey && data[selectedKey];
</script>

<svelte:head>
	<title>Suffixes - World Forge</title>
</svelte:head>

<div>
	<h2>Primary</h2>
	<select bind:value={primary}>
		<option value="" selected disabled hidden>Select Primary</option>
		{#each Object.entries(attrs) as [attrKey, attrInfo]}
			<option value={attrKey}>{attrInfo.title}</option>
		{/each}
	</select>
	<h2>Secondary</h2>
	<select bind:value={secondary}>
		<option value="" selected disabled hidden>Select Secondary</option>
		{#each Object.entries(attrs) as [attrKey, attrInfo]}
			<option value={attrKey}>{attrInfo.title}</option>
		{/each}
	</select>
</div>

{#if selected}
	<h1>... of the <span>{selected.title}</span></h1>
{/if}

<div class="grid">
	<div />
	<div class="title primary-title">
		<h2>Primary</h2>
	</div>
	<div class="title secondary-title">
		<h2>Secondary</h2>
	</div>
	{#each Object.entries(data) as [key, { title }], i}
		<div class="grid-item" class:highlight={selectedKey === key}>
			<h4>{title}</h4>
		</div>
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: 0.5fr repeat(6, 1fr);
		grid-template-rows: repeat(7, 1fr);
		gap: 0.25rem;
	}
	.grid > div {
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.primary-title {
		text-orientation: upright;
		writing-mode: vertical-lr;
		grid-column: 1;
		grid-row-start: 2;
		grid-row-end: 8;
	}
	.secondary-title {
		grid-column-start: 2;
		grid-column-end: 8;
		grid-row: 1;
	}
	.grid-item {
		border: 1px solid var(--brown-dark);
	}
	.grid-item.highlight {
		border-color: var(--pale);
		background: hsla(var(--pale-hsl) / 0.1);
	}
</style>
