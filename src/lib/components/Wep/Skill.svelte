<script>
	import { createEventDispatcher } from 'svelte';
	import { wepPtsRemaining } from '../../../stores';

	const dispatch = createEventDispatcher();

	export let store;
	export let skillInfo;
	export let row;
	export let col;

	// $: {
	// 	console.log($wepPtsRemaining);
	// }

	const hasRequirement = skillInfo && skillInfo.required;
	const requresOthers = typeof hasRequirement === 'string' ? true : false;
	const requiresPoints = hasRequirement || row > 1 ? true : false;

	$: isActive = skillInfo && store ? $store.list.includes(skillInfo.name) : false;
	$: isAvailable = !skillInfo
		? false
		: !store
		? true
		: requresOthers && requiresPoints
		? $store.list.includes(skillInfo.required) && $store.rows.includes(skillInfo.row - 1)
		: requresOthers
		? $store.list.includes(skillInfo.required)
		: requiresPoints && skillInfo.type !== 'ultimate'
		? $store.rows.includes(skillInfo.row - 1)
		: skillInfo.row === 1
		? true
		: skillInfo.type === 'ultimate' && $store.list.length >= 10
		? true
		: false;

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
		class:noPts={!$wepPtsRemaining}
		data-type={skillInfo.type}
		data-row={row}
		data-col={col}
		on:click={wepPtsRemaining && addSkill}
		on:contextmenu|preventDefault={removeSkill}
	>
		{#if skillInfo.etc && skillInfo.etc.includes('bend-left')}
			<span class="required-bar mask2 required-bar--short" />
			<span class="required-bar mask2 required-bar--left" />
		{:else if skillInfo.etc && skillInfo.etc.includes('double-up')}
			<span class="required-bar mask2 required-bar--double-tall" />
		{:else if requresOthers}
			<span class="required-bar mask2 required-bar--tall" />
		{/if}
		<div class="mask2 skill-shape">
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
		cursor: pointer;
		opacity: 1;
	}
	.skill:not(.available),
	.skill.noPts {
		cursor: default;
		pointer-events: none;
	}

	.skill:not(.available) .skill-img,
	.skill.noPts .skill-img,
	.skill:not(.active).available .skill-img {
		opacity: 0.3;
	}
	.skill:not(.active).available .skill-shape {
		border-color: hsla(201, 98%, 74%, 1);
	}

	.skill-shape {
		box-sizing: border-box;
		background: black;
		border: 2px solid transparent;
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
		border-color: var(--pale);
	}
	.skill.active .skill-img {
		opacity: 1;
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
