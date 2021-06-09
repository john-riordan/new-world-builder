<script>
	import Tabs from '$lib/components/Tabs/index.svelte';
	import '../app.css';

	import { selectedWeps, wep0Pts, wep1Pts, attrs } from '../../src/stores';

	$: console.log($attrs);
</script>

<div class="bg bg-bottom" />
<div class="bg bg-top" />

<!-- <Header /> -->

<Tabs
	tabs={[
		{
			title: 'Attributes',
			url: '/attributes'
		},
		{
			title: 'Weapons',
			url: '/weapons'
		},
		{
			title: 'Item Affixes',
			url: '/affixes'
		}
	]}
/>

<main>
	<slot />
</main>

<div class="build">
	{#if $attrs.primary}
		<div class="attrs">
			<div>Primary: {$attrs.primary.key}({$attrs.primary.pts})</div>
			{#if $attrs.secondary}
				<div>Secondary: {$attrs.secondary.key}({$attrs.secondary.pts})</div>
			{/if}
		</div>
	{/if}
	<!-- <div>{$attrs.primary.key}: {$attrs.primary.pts}</div> -->
	<div class="weps">
		{#if $selectedWeps[0]}
			<div class="wep">
				<h4>{$selectedWeps[0]}</h4>
				<p class="pts">{$wep0Pts} Points spent</p>
			</div>
		{:else}
			<div class="wep">
				<h4>Select Wep 1</h4>
				<p class="pts">-</p>
			</div>
		{/if}
		{#if $selectedWeps[1]}
			<div class="wep">
				<h4>{$selectedWeps[1]}</h4>
				<p class="pts">{$wep1Pts} Points spent</p>
			</div>
		{:else}
			<div class="wep">
				<h4>Select Wep 2</h4>
				<p class="pts">-</p>
			</div>
		{/if}
	</div>
</div>

<!-- <footer>
	<p>Footer</p>
</footer> -->
<style>
	main {
		width: 95%;
		max-width: var(--app-container);
		margin: 0 auto;
		padding: 0 3.5rem;
	}

	.bg {
		position: fixed;
		width: 100%;
		height: 100%;
		left: 50%;
		transform: translatex(-50%);
		max-width: 1920px;
		z-index: -1;
	}
	.bg-top {
		top: 0;
		background: url(https://d2lchq0n03yu65.cloudfront.net/statics/2021-05-20/images/diamond-texture-top.png)
			no-repeat top;
	}
	.bg-bottom {
		bottom: 0;
		background: url(https://d2lchq0n03yu65.cloudfront.net/statics/2021-05-20/images/texture-bottom.jpg)
			no-repeat bottom;
	}

	.build {
		position: fixed;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		bottom: 2rem;
		right: 2rem;
		padding: 1.75rem;
		background: var(--brown);
		border: 1px solid var(--grey);
		z-index: 9;
	}

	.build .attrs,
	.build .weps {
		display: flex;
	}
	.build .attrs {
		gap: 1rem;
	}
	.build .wep {
		width: 17rem;
	}

	.wep h4 {
		margin: 0;
	}
</style>
