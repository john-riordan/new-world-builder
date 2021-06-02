<script>
	export let text;
	export let x;
	export let y;

	const offset = 5;
</script>

<div
	style="
    top: {y + offset}px;
    left: {x + offset}px;
  "
>
	{text}
</div>

<style>
	div {
		position: absolute;
		background: var(--black);
		width: 30rem;
		padding: 1.25rem;
		border: 1px solid var(--brown);
	}
</style>
