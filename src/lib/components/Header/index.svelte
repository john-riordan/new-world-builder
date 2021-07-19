<script>
  import { page } from '$app/stores';
  import { shareLink } from '../../../stores';
</script>

<header>
  <h1>New World Builder</h1>
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
    min-height: 5vh;
  }
</style>
