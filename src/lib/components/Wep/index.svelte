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

<div class="wep-container">
	<div class="wep-left">
		<div class="points">
			<div class="mask2 compass" />
			<h2 class="mask points-available" class:canAllocate={ptsRemaining}>{ptsRemaining}</h2>
		</div>
		<h4 class="subtitle">Points <br />Available</h4>
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
	</div>
	<div class="wep-right tree-pair">
		<Tree treeIndex={0} tree={treeLeft} store={treeLeftStore} {ptsRemaining} />
		<Tree treeIndex={1} tree={treeRight} store={treeRightStore} {ptsRemaining} />
	</div>
</div>

<style>
	.wep-container {
		display: flex;
		gap: 3rem;
	}
	.wep-left {
		flex: 1;
		text-align: center;
	}
	.wep-right {
		flex: 4;
	}

	.points {
		position: relative;
	}

	@keyframes spin {
		to {
			transform: rotate(1turn);
		}
	}
	.compass {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-image: url('/static/compass-diamond.png');
	}

	.compass::before {
		opacity: 0.6;
		background-image: url('/static/compass-outer.png');
		animation: spin 40s linear forwards infinite;
	}
	.compass::after {
		opacity: 0.6;
		background-image: url('/static/compass-ring.png');
		animation: spin 30s linear reverse infinite;
	}

	.points-available {
		font-size: 9rem;
		line-height: 1;
		letter-spacing: 0;
		text-shadow: 0 10px 28px var(--black);
		margin: 0;
		padding-bottom: 1rem;
	}
	.points-available.canAllocate {
		color: var(--yellow);
	}

	.compass,
	.compass::before,
	.compass::after {
		content: '';
		position: absolute;
		aspect-ratio: 1;
		width: 200px;
		background-position: center;
		background-repeat: no-repeat;
	}
	.compass::before,
	.compass::after {
		top: 0;
		left: 0;
	}

	.subtitle {
		font-size: 1.5rem;
		text-transform: uppercase;
		letter-spacing: 0.2rem;
		margin: 1rem 0;
	}

	.tree-pair {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		width: 100%;
	}
	.controls {
		display: flex;
		flex-direction: column;
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
