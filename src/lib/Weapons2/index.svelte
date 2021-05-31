<script>
	import { renderedWep, renderedWepData, selectedWeps, wep0Pts, wep1Pts } from '../../stores';
	import { weapons, wepClasses } from '../../weapons';

	import Wep from '../components/Wep/index.svelte';
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
			<h1 class="wep-title">{weapons[$renderedWep].title}</h1>
			{#if $selectedWeps.includes($renderedWep)}
				<button class="subtle add-remove add" on:click={() => selectedWeps.removeWep($renderedWep)}
					>Remove this wep from build</button
				>
			{:else}
				<button class="subtle add-remove add" on:click={() => selectedWeps.addWep($renderedWep)}
					>Use this wep in build</button
				>
			{/if}
			<Wep
				activeWepindex={$selectedWeps.findIndex((wep) => wep === $renderedWep)}
				treeLeft={$renderedWepData.tree1}
				treeRight={$renderedWepData.tree2}
			/>
		{/if}
	</div>
</div>

<style lang="scss">
	.wep-container {
		--gap: 0.5rem;
		display: grid;
		grid-template-columns: 1fr 3fr;
		grid-auto-rows: auto;
		grid-auto-flow: column;
		gap: var(--gap);
	}
	.col-left {
		height: 80vh;
		overflow-y: scroll;
	}
	.col-right {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.wep-list {
		display: grid;
		gap: var(--gap);
	}
	.class-title {
		font-family: var(--text-script);
		text-transform: uppercase;
		font-size: 1.25rem;
		line-height: 1.5;
		align-self: center;
	}
	.class-title p {
		margin: 3rem 0 0;
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

	.add-remove {
		margin: 2rem 0;
		width: 16rem;
		cursor: pointer;
	}
</style>
