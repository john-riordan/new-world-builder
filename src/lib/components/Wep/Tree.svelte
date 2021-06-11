<script>
	import LineBorder from '$lib/components/LineBorder/index.svelte';
	import Skill from './Skill.svelte';

	const size = {
		cols: 5,
		rows: 6
	};

	export let tree;
	export let store;
	export let ptsRemaining;
	export let treeIndex;

	function addSkill(event) {
		if (store) store.addSkill(event.detail.skill);
	}
	function removeSkill(event) {
		if (store) store.removeSkill(event.detail.skill);
	}
</script>

<div>
	<h2 class="tree-name">{tree.name}</h2>
	<LineBorder>
		<div class="grid" style="--tree-color: var({tree.color})">
			{#each Array(size.rows) as _, row}
				{#each Array(size.cols) as _, col}
					<Skill
						{store}
						{ptsRemaining}
						skillInfo={tree && tree.skills[`${row + 1}_${col + 1}`]}
						row={row + 1}
						col={col + 1}
						tooltipSide={treeIndex === 1 ? 'left' : 'right'}
						on:addSkill={addSkill}
						on:removeSkill={removeSkill}
					/>
				{/each}
			{/each}
		</div>
	</LineBorder>
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(6, 1fr);
	}

	.tree-name {
		text-align: center;
	}
</style>
