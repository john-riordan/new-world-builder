<script>
	import { fly } from 'svelte/transition';

	export let refresh = '';
</script>

{#key refresh}
	<div in:fly={{ x: -10, duration: 200, delay: 200 }} out:fly={{ x: 10, duration: 200 }}>
		<slot />
	</div>
{/key}
