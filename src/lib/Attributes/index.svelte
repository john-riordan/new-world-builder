<script>
	import { str, dex, int, foc, con, availableAtrPts, anyPointsSet } from '../../stores';
	import { attributes } from '../../attributes';
	import { MIN_ATTR_PTS } from '../../constants';

	import Attribute from './Attribute.svelte';

	function respec() {
		str.set(MIN_ATTR_PTS);
		dex.set(MIN_ATTR_PTS);
		int.set(MIN_ATTR_PTS);
		foc.set(MIN_ATTR_PTS);
		con.set(MIN_ATTR_PTS);
	}
</script>

<div class="container">
	<div class="left">
		<h2 class="mask points-available" class:canAllocate={$availableAtrPts}>{$availableAtrPts}</h2>
		<h4 class="subtitle">Points <br />Available</h4>
		<button class="subtle respec" class:disabled={!$anyPointsSet} on:click={respec}>Respec</button>
	</div>
	<div class="right">
		<Attribute info={attributes.str} pts={str} />
		<Attribute info={attributes.dex} pts={dex} />
		<Attribute info={attributes.int} pts={int} />
		<Attribute info={attributes.foc} pts={foc} />
		<Attribute info={attributes.con} pts={con} />
	</div>
</div>

<style>
	.container {
		display: flex;
		padding-top: 5rem;
		gap: 1rem;
	}
	.left {
		flex: 1;
		text-align: center;
	}
	.points-available {
		font-size: 8.5rem;
		line-height: 1;
		text-shadow: 0 10px 28px var(--black);
		margin: 0;
		padding-bottom: 1rem;
	}
	.points-available.canAllocate {
		color: var(--yellow);
	}
	.subtitle {
		font-size: 1.5rem;
		text-transform: uppercase;
		letter-spacing: 0.2rem;
		margin: 2rem 0 5rem;
	}
	.respec {
		width: 8rem;
	}

	.right {
		flex: 4;
	}
</style>
