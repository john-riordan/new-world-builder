<script>
	import Tree from './Tree.svelte';

	export let treeLeft;
	export let treeRight;
</script>

<div class="tree-pair">
	<Tree tree={treeLeft} store={null} />
	<Tree tree={treeRight} store={null} />
</div>

<style>
	.tree-pair {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 6rem;
	}
</style>
