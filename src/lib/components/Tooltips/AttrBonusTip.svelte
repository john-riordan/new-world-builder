<script>
	export let bonuses = [];
	export let pts;
	export let side = 'bottom';
	export let x;
	export let y;

	const offset = 5;
	const width = '24rem';
</script>

<div
	class="container"
	class:left={side === 'left'}
	class:bottom={side === 'bottom'}
	class:right={side === 'right'}
	style="
    --offset: {offset}px;
    --y-offset: {y + offset}px;
    --x-offset: {x + offset}px;
    --width: {width};
  "
>
	<ul>
		{#each bonuses as bonus}
			<li>{@html bonus}</li>
		{/each}
	</ul>
	<footer>Required Points: <span>{pts}</span></footer>
</div>

<style>
	.container {
		position: absolute;
		background: var(--black);
		line-height: 1.35;
		width: var(--width, 25rem);
		padding: 1.25rem;
		border: 2px solid var(--brown);
		box-shadow: 0 10px 20px var(--black);
		pointer-events: none;

		top: var(--y-offset);
		left: var(--x-offset);
	}
	.container.left {
		left: calc(var(--x-offset) - var(--width) - var(--offset));
	}
	.container.bottom {
		left: calc(var(--x-offset) - calc(var(--width) / 2) - var(--offset));
	}

	ul {
		margin: 0;
		padding: 0;
		padding-left: 1.5rem;
	}
	li:not(:last-child) {
		margin-bottom: 0.5rem;
	}

	li :global(span) {
		/* font-weight: 700; */
		color: var(--yellow);
	}

	footer {
		margin-top: 1.25rem;
		padding-top: 0.75rem;
		border-top: 1px solid var(--brown);
	}
	footer span {
		font-weight: 700;
		color: var(--white);
		margin-left: 1rem;
		color: var(--yellow);
	}
</style>
