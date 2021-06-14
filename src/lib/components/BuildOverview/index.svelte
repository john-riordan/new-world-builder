<script>
	import { cubicInOut } from 'svelte/easing';
	import { selectedWeps, wep0Pts, wep1Pts, attrs } from '../../../stores';
	import StripedBg from '$lib/components/StripedBg/index.svelte';
	import LineBorder from '$lib/components/LineBorder/index.svelte';

	$: buildStarted = $selectedWeps[0] || $selectedWeps[1] || $attrs.primary;

	export function enter() {
		return {
			duration: 350,
			css: (t, u) => {
				const eased = cubicInOut(u);

				return `
					transform: translateX(-50%) translateY(${100 * eased}%);
					opacity: ${t};
				`;
			}
		};
	}
</script>

{#if buildStarted}
	<div class="build" transition:enter>
		<LineBorder>
			<StripedBg>
				<div class="build-inner">
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
			</StripedBg>
		</LineBorder>
	</div>
{/if}

<style>
	.build {
		position: fixed;
		bottom: 1rem;
		left: 50%;
		background: var(--brown);
		transform: translateX(-50%);
		z-index: 9;
		box-shadow: 0 2.8px 5.5px -36px rgba(0, 0, 0, 0.197), 0 6.7px 13.3px -36px rgba(0, 0, 0, 0.283),
			0 12.5px 25px -36px rgba(0, 0, 0, 0.35), 0 22.3px 44.7px -36px rgba(0, 0, 0, 0.417),
			0 41.8px 83.6px -36px rgba(0, 0, 0, 0.503), 0 100px 200px -36px rgba(0, 0, 0, 0.7);
	}
	.build-inner {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		padding: 2rem;
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
