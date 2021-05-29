<script>
	import Skill from './Skill.svelte';

	const size = {
		cols: 5,
		rows: 6
	};

	export let tree;
	export let store;

	function addSkill(event) {
		store.addSkill(event.detail.skill);
	}
	function removeSkill(event) {
		store.removeSkill(event.detail.skill);
	}
</script>

<div class="grid">
	{#each Array(size.rows) as _, row}
		{#each Array(size.cols) as _, col}
			<Skill
				selected={store}
				skillInfo={tree && tree[`${row + 1}_${col + 1}`]}
				row={row + 1}
				col={col + 1}
				on:addSkill={addSkill}
				on:removeSkill={removeSkill}
			/>
		{/each}
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(6, 1fr);
	}
</style>
