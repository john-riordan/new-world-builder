<script>
	import Header from '$lib/Header/index.svelte';
	import '../app.css';
</script>

<div class="bg bg-bottom" />
<div class="bg bg-top" />

<!-- <Header /> -->

<main>
	<slot />
</main>

<!-- <footer>
	<p>Footer</p>
</footer> -->
<style>
	main {
		width: 95%;
		max-width: var(--app-container);
		margin: 0 auto;
		padding: 0 3.5rem;
	}

	.bg {
		position: fixed;
		width: 100%;
		height: 100%;
		left: 50%;
		transform: translatex(-50%);
		max-width: 1920px;
		z-index: -1;
	}
	.bg-top {
		top: 0;
		background: url(https://d2lchq0n03yu65.cloudfront.net/statics/2021-05-20/images/diamond-texture-top.png)
			no-repeat top;
	}
	.bg-bottom {
		bottom: 0;
		background: url(https://d2lchq0n03yu65.cloudfront.net/statics/2021-05-20/images/texture-bottom.jpg)
			no-repeat bottom;
	}
</style>
