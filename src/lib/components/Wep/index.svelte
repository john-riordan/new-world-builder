<script>
	import Tree from './Tree.svelte';

	import { selectedWeps, renderedWep, trees, wep0Pts, wep1Pts } from '../../../stores';

	export let activeWepindex;
	export let treeLeft;
	export let treeRight;

	$: isValidIndex = activeWepindex === 0 || activeWepindex === 1;
	$: treeLeftStore = isValidIndex ? trees[activeWepindex][0] : null;
	$: treeRightStore = isValidIndex ? trees[activeWepindex][1] : null;
	$: wepPoints = activeWepindex === 0 ? wep0Pts : activeWepindex === 1 ? wep1Pts : null;

	function resetTrees() {
		treeLeftStore.resetTree();
		treeRightStore.resetTree();
	}
</script>

<div class="tree-pair">
	<Tree tree={treeLeft} store={treeLeftStore} {wepPoints} />
	<Tree tree={treeRight} store={treeRightStore} {wepPoints} />
</div>
<div class="controls">
	{#if $selectedWeps.includes($renderedWep)}
		<button class="subtle add-remove add" on:click={() => selectedWeps.removeWep($renderedWep)}
			>Remove this wep from build</button
		>
	{:else}
		<button class="subtle add-remove add" on:click={() => selectedWeps.addWep($renderedWep)}
			>Use this wep in build</button
		>
	{/if}
	{#if $wepPoints}
		<button class="subtle reset" on:click={resetTrees}>Reset</button>
	{:else if $wepPoints === 0}
		<button class="disabled subtle reset" on:click={resetTrees}>Reset</button>
	{/if}
</div>

<style>
	.tree-pair {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 6rem;
		width: 100%;
	}
	.controls {
		display: flex;
		gap: 1rem;
		margin-top: 4rem;
	}
	.add-remove {
		width: 16rem;
		cursor: pointer;
	}
	.reset {
		width: 10rem;
		cursor: pointer;
	}
</style>
