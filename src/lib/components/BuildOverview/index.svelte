<script>
  import { slideIn } from '$lib/transitions'
  import { selectedWeps, wep0Pts, wep1Pts, attrs } from '../../../stores';

  $: buildStarted = $selectedWeps[0] || $selectedWeps[1] || $attrs.primary;
</script>

{#if buildStarted}
	<div class="build" transition:slideIn>
		{#if $attrs.primary}
			<div class="attrs">
				<div>Primary: {$attrs.primary.key}({$attrs.primary.pts})</div>
				{#if $attrs.secondary}
					<div>Secondary: {$attrs.secondary.key}({$attrs.secondary.pts})</div>
				{/if}
			</div>
		{/if}
		<div class="weps">
			{#if $selectedWeps[0]}
				<div class="wep">
					<h4>{$selectedWeps[0]}</h4>
					<p class="pts">{$wep0Pts} Points spent</p>
				</div>
			{:else}
				<div class="wep">
					<h4>Select Wep 1</h4>
					<p class="pts">-</p>
				</div>
			{/if}
			{#if $selectedWeps[1]}
				<div class="wep">
					<h4>{$selectedWeps[1]}</h4>
					<p class="pts">{$wep1Pts} Points spent</p>
				</div>
			{:else}
				<div class="wep">
					<h4>Select Wep 2</h4>
					<p class="pts">-</p>
				</div>
			{/if}
		</div>
	</div>
{/if}

<style>
	.build {
		position: fixed;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		bottom: 1rem;
		left: 1rem;
		padding: 1.75rem;
		background: var(--brown);
		border: 1px solid var(--grey);
		z-index: 9;
	}

	.build .attrs,
	.build .weps {
		display: flex;
	}
	.build .attrs {
		gap: 1rem;
	}
	.build .wep {
		width: 17rem;
	}

	.wep h4 {
		margin: 0;
	}
</style>