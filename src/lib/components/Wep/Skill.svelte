<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let selected = [];
	export let skillInfo = null;
	export let row;
	export let col;

	const requirement = skillInfo?.required;
	const requresOthers = typeof requirement === 'string';
	const requiresPoints = requirement && !requresOthers && row !== 1;

	// $: isActive = skillInfo ? $selected.includes(skillInfo.name) : false;
	// $: isAvailable = requresOthers
	// 	? $selected.includes(skillInfo.required)
	// 	: requiresPoints
	// 	? $selected.length >= skillInfo.required
	// 	: true;

	$: isActive = false;
	$: isAvailable = false;

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
		<div>
			<img src={skillInfo.img} title={skillInfo.name} alt={skillInfo.name} />
		</div>
	</div>
{:else}
	<div class="skill empty" />
{/if}

<style>
	.empty {
		aspect-ratio: 1;
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

	.skill:not(.available) > div img {
		opacity: 0.25;
	}
	.skill img {
		display: block;
		width: 100%;
		height: auto;
	}
	.skill > div {
		box-sizing: border-box;
		position: relative;
		padding: 0.5rem;
		background: black;
		z-index: 1;
	}
	.skill.active > div {
		box-shadow: 0 0 0 3px green;
	}
	.skill[data-type='major'] > div {
		width: 100%;
	}
	.skill[data-type='minor'] > div {
		width: 60%;
		border-radius: 50%;
	}
	.skill[data-type^='ult'] > div {
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
