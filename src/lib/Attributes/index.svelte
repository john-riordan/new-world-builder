<script>
	import { str, dex, int, foc, con, availableAtrPts } from '../../stores';

	import Attribute from './Attribute.svelte';
</script>

<div class="conatiner">
	<div class="left">
		<h2 class="points-available">{$availableAtrPts}</h2>
		<h4 class="subtitle">Points <br />Available</h4>
	</div>
	<div class="right">
		<Attribute name="Strength" pts={str} />
		<Attribute name="Dexterity" pts={dex} />
		<Attribute name="Intelligence" pts={int} />
		<Attribute name="Focus" pts={foc} />
		<Attribute name="Constitution" pts={con} />
	</div>
</div>

<style>
	.conatiner {
		display: flex;
		padding-top: 5rem;
		gap: 3rem;
	}
	.left {
		flex: 1;
		text-align: center;
	}
	.points-available {
		font-size: 7.5rem;
		line-height: 1;
		text-shadow: 0 10px 28px var(--black);
		margin: 0;
	}
	.subtitle {
		font-size: 1.5rem;
		text-transform: uppercase;
		letter-spacing: 0.2rem;
	}

	.right {
		flex: 4;
	}
</style>
