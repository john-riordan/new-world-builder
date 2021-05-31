<script>
	import { renderedWep, renderedWepData, selectedWeps, wep0Pts, wep1Pts } from '../../stores';
	import { weapons, wepClasses } from '../../weapons';
	import { SKILL_PTS } from '../../constants';

	import Wep from '../components/Wep/index.svelte';

	$: activeWepindex = $selectedWeps.findIndex((wep) => wep === $renderedWep);
	$: wepPoints = activeWepindex === 0 ? wep0Pts : activeWepindex === 1 ? wep1Pts : null;
</script>

<div class="wep-container">
	<div class="col-left">
		<div class="wep-list">
			{#each wepClasses as wepClass}
				<div class="class-title"><p>{wepClass.title}</p></div>
				{#each wepClass.list as wep}
					{#if wep.name}
						<div
							class="wep"
							class:selected={$selectedWeps.includes(wep.name)}
							on:click={() => renderedWep.set(wep.name)}
						>
							<img src="sword.png" alt="" />
							<div>
								<p class="title">{wep.title}</p>
								{#if $selectedWeps.includes(wep.name)}
									<p class="pts">
										{$selectedWeps.indexOf(wep.name) === 0 ? $wep0Pts : $wep1Pts} Points spent
									</p>
								{:else}
									<p class="pts">--</p>
								{/if}
							</div>
						</div>
					{:else}
						<div class="wep empty" />
					{/if}
				{/each}
			{/each}
		</div>
	</div>
	<div class="col-right">
		{#if $renderedWep}
			<h1 class="wep-title">
				{weapons[$renderedWep].title}
				{#if $wepPoints >= 0}{$wepPoints}/{SKILL_PTS}{/if}
			</h1>
			<Wep {activeWepindex} treeLeft={$renderedWepData.tree1} treeRight={$renderedWepData.tree2} />
		{/if}
	</div>
</div>

<style lang="scss">
	.wep-container {
		--gap: 0.5rem;
		display: grid;
		grid-template-columns: 1fr 3.5fr;
		grid-auto-rows: auto;
		grid-auto-flow: column;
		gap: var(--gap);
	}
	.col-left {
		height: 80vh;
		overflow-y: scroll;
		-webkit-mask-image: linear-gradient(to top, transparent 0, black 200px);
	}
	.col-left::-webkit-scrollbar {
		display: none;
	}
	.col-right {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.wep-list {
		display: grid;
		gap: var(--gap);
		padding-bottom: 200px;
	}
	.class-title {
		font-family: var(--text-script);
		text-transform: uppercase;
		font-size: 1.25rem;
		line-height: 1.5;
		align-self: center;
	}
	.class-title p {
		margin: 2rem 0 0;
	}
	.wep {
		pointer-events: none;
		overflow: hidden;
	}
	.wep:not(.empty) {
		position: relative;
		padding: 1.75rem;
		background: hsla(var(--brown-dark-hsl) / 0.75);
		border: 1px solid hsla(var(--grey-hsl) / 0.5);
		cursor: pointer;
		pointer-events: all;
		transition: background 0.2s ease-out, border-color 0.2s ease-out;
	}
	.wep img {
		position: absolute;
		right: 0;
		transform: translateY(-50%);
		top: 50%;
		max-height: 100%;
		max-width: 130px;
		filter: brightness(1.15);
		transition: filter 0.2s ease-out;
	}

	.wep .title {
		margin: 0;
		font-weight: 700;
	}
	.wep:hover {
		background: hsla(var(--brown-hsl) / 1);
		border-color: hsla(var(--grey-hsl) / 1);
	}
	.wep:hover img {
		filter: brightness(1.35);
	}

	.wep.selected {
		background: hsla(var(--pale-hsl) / 0.15);
		border-color: var(--pale);
	}
	.wep.selected img {
		filter: brightness(1.5);
	}

	.wep-title {
		text-align: center;
		font-size: 2.5rem;
		text-transform: uppercase;
		letter-spacing: 0.4rem;
		margin-bottom: 0;
	}
</style>
