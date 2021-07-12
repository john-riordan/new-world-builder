<script>
	import { fly } from 'svelte/transition';

	export let refresh = '';
</script>

{#key refresh}
	<div in:fly={{ x: -10, duration: 150, delay: 150 }} out:fly={{ x: 10, duration: 150 }}>
		<slot />
	</div>
{/key}

<style>
	div {
		position: relative;
	}
</style>
