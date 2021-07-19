<script>
	import StripedBg from '$lib/components/StripedBg/index.svelte';

	export let type = 'medium';
</script>

{#if type === 'major'}
	<span data-type={type}>
		<span class="border">
			<span class="btn">
				<span class="btn-inner">
					<StripedBg>
						<span><slot /></span>
					</StripedBg>
				</span>
			</span>
		</span>
	</span>
{/if}

<style>
	[data-type='major'] {
		display: inline-block;
	}
	[data-type='major'] .btn {
		display: block;
		padding: 2px;
		background: linear-gradient(to bottom, hsla(210, 46%, 33%, 1), hsla(190, 45%, 58%, 1));
		transition: filter var(--transition);
	}
	[data-type='major'] .btn .btn-inner {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: var(--text-script);
		font-size: 1.75rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-shadow: 2px 2px black;
		height: 4rem;
		padding: 0.2rem 8.25rem 0;
		background: linear-gradient(to bottom, hsla(225, 51%, 15%, 1), hsla(221, 73%, 26%, 1));
	}

	[data-type='major'] .btn-inner > * {
		position: relative;
	}
	[data-type='major']:hover .btn {
		filter: brightness(1.5);
	}
	[data-type='major'] .border {
		display: block;
		padding: 0.5rem;
		border: 2px solid hsl(197deg 9% 33%);
	}

	[data-type='major']:hover .btn {
		box-shadow: 0 0 17px hsl(206deg 97% 50% / 56%);
	}
	[data-type='major']:hover .btn .btn-inner {
		box-shadow: inset 0 0 20px hsl(180deg 81% 69% / 20%);
	}

	[data-type='major']:hover .border {
		border-color: hsl(206deg 34% 40%);
	}

	/* .btn .striped {
		position: absolute;
		inset: 0;
		background: url('/static/striped-black.png');
		opacity: 0.4;
	} */
</style>
