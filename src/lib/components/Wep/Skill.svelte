<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let selected;
	export let skillInfo;
	export let row;
	export let col;

	const hasRequirement = skillInfo && skillInfo.required;
	const requresOthers = typeof hasRequirement === 'string';
	const requiresPoints = hasRequirement && !requresOthers && row !== 1;

	// $: isActive = false;
	$: isAvailable = true;
	$: isActive = skillInfo && selected ? $selected.includes(skillInfo.name) : false;
	// $: isAvailable = requresOthers
	// 	? $selected.includes(skillInfo.required)
	// 	: requiresPoints
	// 	? $selected.length >= skillInfo.required
	// 	: true;

	function addSkill() {
		dispatch('addSkill', {
			skill: skillInfo
		});
	}
	function removeSkill() {
		dispatch('removeSkill', {
			skill: skillInfo
		});
	}
</script>

{#if skillInfo}
	<div
		class="skill"
		class:active={isActive}
		class:available={isAvailable}
		data-type={skillInfo.type}
		data-row={row}
		data-col={col}
		on:click={addSkill}
		on:contextmenu|preventDefault={removeSkill}
	>
		{#if skillInfo.etc && skillInfo.etc.includes('bend-left')}
			<span class="required-bar required-bar--short" />
			<span class="required-bar required-bar--left" />
		{:else if skillInfo.etc && skillInfo.etc.includes('double-up')}
			<span class="required-bar required-bar--double-tall" />
		{:else if requresOthers}
			<span class="required-bar required-bar--tall" />
		{/if}
		<div class="skill-shape">
			<div
				class="skill-img"
				style={`background-image: url(${skillInfo.img})`}
				title={skillInfo.name}
			/>
		</div>
	</div>
{:else}
	<div class="skill empty" />
{/if}

<style>
	.empty {
		height: 0;
		padding-bottom: 100%;
		pointer-events: none;
	}
	.skill {
		--bar-thickness: 5%;
		--bar-color: black;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		aspect-ratio: 1;
		cursor: pointer;
		opacity: 1;
	}
	.skill:not(.available) {
		cursor: default;
		pointer-events: none;
	}

	.skill:not(.available) .skill-img {
		opacity: 0.25;
	}
	.skill img {
		display: block;
		width: 100%;
		height: auto;
	}
	.skill-shape {
		box-sizing: border-box;
		background: black;
		z-index: 1;
	}

	.skill-img {
		position: relative;
		height: 0;
		padding-bottom: 100%;
		background-position: center;
		background-size: 80%;
		background-repeat: no-repeat;
	}
	.skill.active .skill-shape {
		box-shadow: 0 0 0 3px green;
	}
	.skill[data-type='major'] .skill-shape {
		width: 100%;
	}
	.skill[data-type='minor'] .skill-shape {
		width: 60%;
		border-radius: 50%;
	}
	.skill[data-type='minor'] .skill-img {
		background-size: 70%;
	}
	.skill[data-type^='ult'] .skill-shape {
		width: 100%;
		border-radius: 50%;
	}
	.skill .required-bar {
		position: absolute;
		width: var(--bar-thickness);
		left: calc(50% - (var(--bar-thickness) / 2));
		background: var(--bar-color);
	}
	.skill .required-bar--tall {
		bottom: 50%;
		height: 100%;
	}
	.skill[data-row='1'] .required-bar--tall {
		height: 0;
	}
	.skill .required-bar--short {
		top: 0;
		height: 50%;
	}
	.skill .required-bar--left {
		top: 0%;
		left: -50%;
		height: var(--bar-thickness);
		width: 100%;
	}
	.skill .required-bar--double-tall {
		bottom: 50%;
		height: 200%;
	}
</style>
