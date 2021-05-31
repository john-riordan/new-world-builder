<script>
	import Tree from './Tree.svelte';

	import { trees } from '../../../stores';

	export let activeWepindex;
	export let treeLeft;
	export let treeRight;

	$: isValidIndex = activeWepindex === 0 || activeWepindex === 1;
	$: treeLeftStore = isValidIndex ? trees[activeWepindex][0] : null;
	$: treeRightStore = isValidIndex ? trees[activeWepindex][1] : null;

	$: {
		console.log('treeLeftStore', $treeLeftStore);
		console.log('treeRightStore', $treeRightStore);
		console.log('trees', trees);
		console.log('----------');
	}
</script>

<div class="tree-pair">
	<Tree tree={treeLeft} store={treeLeftStore} />
	<Tree tree={treeRight} store={treeRightStore} />
</div>

<style>
	.tree-pair {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 6rem;
		width: 100%;
	}
</style>
