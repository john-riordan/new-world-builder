<script>
	import { createEventDispatcher } from 'svelte';

	import { wepPtsRemaining } from '../../../stores';
	import { tooltipWepAbility } from '$lib/actions/tooltipWepAbility';
	import { hoverSound } from '$lib/actions/hoverSound';

	const dispatch = createEventDispatcher();

	export let store;
	export let skillInfo;
	export let row;
	export let col;
	export let ptsRemaining;
	export let tooltipSide;

	const hasRequirement = skillInfo && skillInfo.required;
	const requresOthers = typeof hasRequirement === 'string' ? true : false;
	const requiresPoints = hasRequirement || row > 1 ? true : false;
	const isUltimate = skillInfo ? skillInfo.type === 'ultimate' : false;

	$: activeWep = store ? true : false;
	$: isActive = skillInfo && store ? $store.list.includes(skillInfo.name) : false;
	$: isSelectable = !skillInfo
		? false
		: !activeWep
		? true
		: requresOthers && requiresPoints && !isUltimate
		? $store.list.includes(skillInfo.required) && $store.rows.includes(skillInfo.row - 1)
		: requresOthers && !isUltimate
		? $store.list.includes(skillInfo.required)
		: requiresPoints && !isUltimate
		? $store.rows.includes(skillInfo.row - 1)
		: skillInfo.row === 1
		? true
		: isUltimate &&
		  requresOthers &&
		  $store.list.includes(skillInfo.required) &&
		  $store.list.length >= 10
		? true
		: isUltimate && !requresOthers && $store.list.length >= 10
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
	<button
		class="skill"
		class:active={isActive}
		class:selectable={ptsRemaining && isSelectable}
		class:wepActive={activeWep}
		class:noPts={!$wepPtsRemaining}
		data-type={skillInfo.type}
		data-row={row}
		data-col={col}
		on:click={ptsRemaining && isSelectable && addSkill}
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
		<div class="skill-shape">
			<div class="mask2 color-fill" />
			<div class="border" />
			<div
				class="skill-img"
				style={`background-image: url(${skillInfo.img})`}
				use:tooltipWepAbility={{ abilityInfo: skillInfo, side: tooltipSide }}
				use:hoverSound={{ type: 'btn-hover' }}
			/>
		</div>
	</button>
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
		--bar-color: hsl(26deg 4% 25%);
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.5rem;
		cursor: default;
		opacity: 1;
	}
	.skill.wepActive {
		cursor: pointer;
	}
	.skill:not(.selectable),
	.skill.noPts {
		cursor: default;
	}

	.skill.wepActive:not(.selectable) .skill-img,
	.skill.noPts .skill-img {
		opacity: 0.3;
	}
	.skill.wepActive:not(.active).selectable .skill-shape {
		border-color: hsla(201, 98%, 74%, 1);
	}
	.skill.wepActive:not(.active).selectable .required-bar {
		--bar-color: var(--pale);
	}

	.skill-shape {
		position: relative;
		background: var(--brown-dark);
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
	.skill:not(.wepActive) .skill-shape,
	.skill.wepActive.active .skill-shape {
		border-color: var(--pale);
	}
	.skill:not(.wepActive) .skill-shape .color-fill,
	.skill.wepActive.active .skill-shape .color-fill {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: radial-gradient(var(--tree-color, grey) 0%, black 140%);
		opacity: 0.8;
	}
	.skill:not(.wepActive) .skill-shape .border,
	.skill.wepActive.active .skill-shape .border {
		position: absolute;
		top: -0.5rem;
		left: -0.5rem;
		bottom: -0.5rem;
		right: -0.5rem;
		border: 2px solid hsla(36, 8%, 24%, 1);
	}

	.skill.active .skill-img {
		opacity: 1 !important;
	}
	.skill.active .required-bar {
		--bar-color: var(--pale) !important;
	}
	.skill[data-type='major'] .skill-shape {
		width: 100%;
	}
	.skill[data-type='minor'] .skill-shape {
		width: 60%;
		border-radius: 50%;
	}
	.skill[data-type='minor'] .skill-shape .border,
	.skill[data-type='minor'] .skill-shape .color-fill,
	.skill[data-type^='ult'] .skill-shape .border,
	.skill[data-type^='ult'] .skill-shape .color-fill {
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
