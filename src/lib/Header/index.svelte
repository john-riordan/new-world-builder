<script>
	import { page } from '$app/stores';
	import { shareLink } from '../../stores';
</script>

<header>
	<p>Share: {$shareLink}</p>
	<!-- <nav>
		<ul>
			<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">About</a></li>
			<li class:active={$page.path === '/todos'}><a sveltekit:prefetch href="/todos">Todos</a></li>
		</ul>
	</nav> -->
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}
</style>
