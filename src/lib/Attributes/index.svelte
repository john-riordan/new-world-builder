<script>
	import { fly } from 'svelte/transition';

	import { str, dex, int, foc, con, attrs } from '../../stores';
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
		<h2 class="mask points-available" class:canAllocate={$attrs.available}>{$attrs.available}</h2>
		<h4 class="subtitle">Points <br />Available</h4>
		<button class="subtle respec" class:disabled={!$attrs.anyPtsAllocated} on:click={respec}
			>Respec</button
		>
		<h2 class="bonuses-title">Bonuses:</h2>
		<ul class="bonuses">
			{#each $attrs.bonuses as bonus, i}
				<li transition:fly={{ x: -10, duration: 250, delay: i * 150 }}>
					{@html bonus}
				</li>
			{/each}
		</ul>
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
		letter-spacing: 0;
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
		margin: 1rem 0;
	}
	.respec {
		width: 8rem;
	}

	.bonuses-title {
		text-align: left;
		margin: 3rem 0 0;
	}
	.bonuses {
		text-align: left;
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.bonuses li {
		position: relative;
		margin: 1rem 0;
		padding-bottom: 1rem;
	}

	.bonuses li:after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 2px;
		background-image: url('https://d2lchq0n03yu65.cloudfront.net/statics/2021-05-20/images/new-world-sprites.png');
		background-repeat: no-repeat;
		background-position: 92% 74%;
		-webkit-mask-image: linear-gradient(
			to right,
			transparent 0%,
			black 30%,
			black 70%,
			transparent 100%
		);
	}

	.bonuses li :global(span) {
		/* font-weight: 700; */
		color: var(--yellow);
	}

	.right {
		flex: 4;
		display: grid;
		grid-template-rows: repeat(5, 8rem);
		gap: 2rem;
	}
</style>
