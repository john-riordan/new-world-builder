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
	import Select from '$lib/components/Select/index.svelte';

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

<div class="attr-select">
	<div>
		<h2 class="attr-select--title">Primary</h2>
		<Select
			bind:value={primary}
			defaultVal="Select Primary Attribute"
			options={Object.entries(attrs).map(([attrKey, attrInfo]) => ({
				value: attrKey,
				text: `${attrInfo.title} (+20)`
			}))}
		/>
	</div>
	<div>
		<h2 class="attr-select--title">Secondary</h2>
		<Select
			bind:value={secondary}
			defaultVal="Select Secondary Attribute"
			options={Object.entries(attrs).map(([attrKey, attrInfo]) => ({
				value: attrKey,
				text: `${attrInfo.title} (+10)`
			}))}
		/>
	</div>
</div>

{#if selected}
	<h1 class="suffix-string">... of the <span>{selected.title}</span></h1>
{:else}
	<h1 class="suffix-string non-selected">Select primary and secondary attributes...</h1>
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
			<h4 class="grid-item--title">{title}</h4>
			{#if key.split('_')[0] === key.split('_')[1]}
				<span class="grid-item--val"><span>(+30) </span>{attrs[key.split('_')[0]].title}</span>
			{:else}
				<span>
					<span class="grid-item--val"><span>(+20)</span> {attrs[key.split('_')[0]].short}</span>
					<span class="grid-item--val"><span>(+10)</span> {attrs[key.split('_')[1]].short}</span>
				</span>
			{/if}
		</div>
	{/each}
</div>

<style>
	.attr-select {
		display: flex;
		justify-content: center;
		text-align: center;
		padding: 4rem 0 2rem;
	}
	.attr-select > * {
		padding: 0 4rem;
	}
	.attr-select--title {
		font-size: 1.5rem;
		margin: 0 0 0.5rem;
	}

	.suffix-string {
		text-align: center;
		margin: 0;
		padding: 2rem 0;
		margin: 3rem 0;
		color: var(--grey-pale);
	}
	.suffix-string span {
		color: var(--green);
	}
	.suffix-string.non-selected {
		color: var(--grey-pale);
	}

	.grid {
		display: grid;
		grid-template-columns: 0.5fr repeat(6, 1fr);
		grid-template-rows: repeat(7, 1fr);
		gap: 0.25rem;
	}
	.grid > div {
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 0.75rem 0;
	}
	.grid-item {
		border: 2px solid var(--brown-dark);
		background: hsla(var(--brown-dark-hsl) / 0.75);
	}
	.grid-item.highlight {
		color: var(--green);
		border-color: var(--green);
	}
	.grid-item.highlight .grid-item--val span {
		color: var(--green);
	}
	.grid-item--title {
		font-size: 1.25rem;
		margin: 0 0 0.25rem;
	}
	.grid-item--val {
		color: var(--grey-pale);
		margin: 0 0.5rem;
	}
	.grid-item--val span {
		font-weight: 700;
		color: var(--skill-orange);
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
</style>
