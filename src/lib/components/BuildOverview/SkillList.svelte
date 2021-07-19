<script>
	import { tooltipWepAbility } from '$lib/actions/tooltipWepAbility';

	export let skills;
	export let count = 3;
</script>

<div class="skills">
	{#each Array(count) as _, index}
		{#if skills[index]}
			<div class="skill-shape active" style="--tree-color: var({skills[index].color})">
				<div class="mask2 color-fill" />
				<div
					class="skill-img"
					style={`background-image: url(${skills[index].img})`}
					use:tooltipWepAbility={{ abilityInfo: skills[index], side: 'top' }}
				/>
			</div>
		{:else}
			<div class="skill-shape">
				<div class="mask2 color-fill" />
				<div class="skill-img" />
			</div>
		{/if}
	{/each}
</div>

<style>
	.skills {
		display: flex;
		gap: 0.5rem;
		margin-top: 0.5rem;
	}
	.skills > * {
		width: 4rem;
	}

	.skill-shape {
		position: relative;
		background: var(--brown-dark);
		border: 2px solid transparent;
		aspect-ratio: 1;
		z-index: 1;
		opacity: 0.5;
	}
	.skill-img {
		position: relative;
		height: 0;
		padding-bottom: 100%;
		background-position: center;
		background-size: 80%;
		background-repeat: no-repeat;
	}
	.skill-shape .color-fill {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: radial-gradient(var(--tree-color, grey) 0%, black 140%);
		opacity: 0.8;
	}
	.skill-shape.active {
		border-color: var(--pale);
		opacity: 1;
	}
	.skill-shape.active .color-fill {
		background: radial-gradient(var(--tree-color, grey) 0%, black 140%);
	}
</style>
