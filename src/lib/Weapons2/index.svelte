<script>
	import { selectedWeps, wep0Pts, wep1Pts } from '../../stores';
	import { wepClasses } from '../../weapons';
</script>	

<!-- <header>
	{#if $selectedWeps.length === 0}
		<h1>Select weapons in the grid below</h1>
	{:else if $selectedWeps.length <= 2}
		<h1>Equipped Weapons</h1>
	{/if}
</header> -->

<div class="wep-container">
	<div class="wep-list--outer">
		<div class="wep-list">
		{#each wepClasses as wepClass}
			<div class="wep-title"><p>{wepClass.title}</p></div>
			{#each wepClass.list as wep}
				{#if wep.name}
					<div
						class="wep"
						class:selected={$selectedWeps.includes(wep.name)}
						on:click={() => {
							selectedWeps.addWep(wep.name);
						}}
						on:contextmenu|preventDefault={() => {
							selectedWeps.removeWep(wep.name);
						}}
					>
						<img src="sword.png" alt="" />
						<div>
							<p class="title">{wep.name}</p>
							{#if $selectedWeps.includes(wep.name)}
								<p class="pts">{$selectedWeps.indexOf(wep.name) === 0 ? $wep0Pts : $wep1Pts} Points spent</p>
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
	<div>
		trees
	</div>
</div>

<style lang="scss">
	header {
		padding-top: 2rem;
	}
	
	.wep-container {
		--gap: 0.5rem;
		display: grid;
		grid-template-columns: 1fr 3fr;
		grid-auto-rows: auto;
		grid-auto-flow: column;
		gap: var(--gap);
	}
	.wep-list--outer {
		height: 90vh;
    overflow-y: scroll;
	}
	.wep-list {
		display: grid;
		gap: var(--gap);
	}
	.wep-title {
		font-family: var(--text-script);
		text-transform: uppercase;
		font-size: 1.25rem;
		line-height: 1.5;
		align-self: center;
	}
	.wep-title p {
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

	.wep.missing {
		pointer-events: none;
		opacity: 0.5;
	}
</style>
