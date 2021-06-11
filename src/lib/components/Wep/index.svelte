<script>
	import Tree from './Tree.svelte';

	import { selectedWeps, trees, wep0Pts, wep1Pts } from '../../../stores';
	import { SKILL_PTS } from '../../../constants';

	export let wepName;
	export let treeLeft;
	export let treeRight;

	$: activeWepindex = $selectedWeps.findIndex((wep) => wep === wepName);
	$: isValidIndex = activeWepindex === 0 || activeWepindex === 1;
	$: treeLeftStore = isValidIndex ? trees[activeWepindex][0] : null;
	$: treeRightStore = isValidIndex ? trees[activeWepindex][1] : null;
	$: appliedPoints = activeWepindex === 0 ? wep0Pts : activeWepindex === 1 ? wep1Pts : null;
	$: ptsRemaining = $appliedPoints <= SKILL_PTS ? SKILL_PTS - $appliedPoints : 0;

	function resetTrees() {
		treeLeftStore.resetTree();
		treeRightStore.resetTree();
	}
</script>

<div class="tree-pair">
	<Tree treeIndex={0} tree={treeLeft} store={treeLeftStore} {ptsRemaining} />
	<Tree treeIndex={1} tree={treeRight} store={treeRightStore} {ptsRemaining} />
</div>
<div class="controls">
	{#if $selectedWeps.includes(wepName)}
		<button class="subtle add-remove add" on:click={() => selectedWeps.removeWep(wepName)}
			>Remove this wep from build</button
		>
	{:else}
		<button class="subtle add-remove add" on:click={() => selectedWeps.addWep(wepName)}
			>Use this wep in build</button
		>
	{/if}
	{#if activeWepindex >= 0}
		<button class="subtle reset" on:click={resetTrees}>Reset {ptsRemaining}</button>
	{:else if activeWepindex >= 0 && $appliedPoints === 0}
		<button class="disabled subtle reset" on:click={resetTrees}>Reset {ptsRemaining}</button>
	{/if}
</div>

<style>
	.tree-pair {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
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
