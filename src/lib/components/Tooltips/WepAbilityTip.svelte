<script>
	import { fade } from 'svelte/transition';

	export let abilityInfo;
	export let side = 'right';
	export let offset = 0;
	export let x;
	export let y;

	const width = '25.5rem';
</script>

<div
	class="container"
	class:left={side === 'left'}
	class:right={side === 'right'}
	style="
    --offset: {offset}px;
    --y-offset: {y}px;
    --x-offset: {x}px;
    --width: {width};
    --border-color: var(--brown);
    --bg-color: var(--black);
  "
>
	<h2 class="ability-name">{abilityInfo.name}</h2>
	<div class="middle">
		<div class="image">
			<img src={abilityInfo.img} alt={abilityInfo.name} />
		</div>
		<div class="cooldown">
			{#if abilityInfo.cooldown}
				<p>Cooldown</p>
				<p class="cooldown-value">{abilityInfo.cooldown}s</p>
			{/if}
		</div>
	</div>
	<p>{@html abilityInfo.description}</p>
	<footer>Mana cost:</footer>
</div>

<style>
	@keyframes fadeInRight {
		from {
			opacity: 0;
			left: calc(var(--x-offset) - var(--width) - var(--buffer) - 6px);
		}
	}
	@keyframes fadeInLeft {
		from {
			opacity: 0;
			left: calc(var(--x-offset) + var(--offset) + var(--buffer) + 6px);
		}
	}

	.container {
		--buffer: 1.25rem;

		position: absolute;
		background: var(--bg-color);
		line-height: 1.5;
		width: var(--width, 25rem);
		padding: 1.25rem;
		border: 2px solid var(--border-color);
		color: var(--grey-pale);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0), 0 5px 10px rgba(0, 0, 0, 0),
			0 12px 25px rgba(0, 0, 0, 0.05), 0 40px 85px rgba(0, 0, 0, 0.7);

		pointer-events: none;
		z-index: 10;

		top: calc(var(--y-offset) - calc(var(--buffer) * 2));
	}
	.container.left {
		left: calc(var(--x-offset) - var(--width) - var(--buffer));
		animation: fadeInRight 0.2s ease-in-out;
	}
	.container.right {
		left: calc(var(--x-offset) + var(--offset) + var(--buffer));
		animation: fadeInLeft 0.2s ease-in-out;
	}

	.container::before {
		content: '';
		position: absolute;
		height: 20px;
		width: 20px;
		background: var(--bg-color);
		border: 2px solid var(--border-color);
		top: 55px;
		transform: rotate(45deg);
		z-index: -1;
	}
	.container.right::before {
		clip-path: polygon(0 0, 0 100%, 100% 100%);
		left: -12px;
	}
	.container.left::before {
		clip-path: polygon(0 0, 100% 0, 100% 100%);
		right: -12px;
	}

	.ability-name {
		margin: 0;
		color: var(--white);
		font-size: 1.5rem;
	}
	.middle {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.5rem 0;
	}
	.middle > div {
		flex: 1;
	}
	.middle .image {
		padding-left: 0.5rem;
	}
	.middle img {
		display: block;
		width: 5rem;
		height: 5rem;
	}
	.cooldown-value {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--white);
	}

	footer {
		margin-top: 1rem;
	}
</style>
