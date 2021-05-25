<script>
	import { selectedWeps, wep0Pts, wep1Pts } from '../../stores';
	import { wepClasses } from '../../weapons';
</script>	

<header>
	{#if $selectedWeps.length === 0}
		<h1>Select weapons in the grid below</h1>
	{:else if $selectedWeps.length <= 2}
		<h1>Equipped Weapons</h1>
	{/if}
</header>

<div class="selected-weps">
	{#if $selectedWeps[0]}
		<div class="wep selected">
			<p class="title">{$selectedWeps[0]}</p>
			<p class="pts">{$wep0Pts} Points spent</p>
		</div>
	{:else}
		<div class="wep missing">
			<p class="title">Select a wep for this slot</p>
			<p class="pts">--</p>
		</div>
	{/if}

	{#if $selectedWeps[1]}
		<div class="wep selected">
			<p class="title">{$selectedWeps[1]}</p>
			<p class="pts">{$wep1Pts} Points spent</p>
		</div>
	{:else}
		<div class="wep missing">
			<p class="title">Select a wep for this slot</p>
			<p class="pts">--</p>
		</div>
	{/if}
</div>

<div class="wep-grid">
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

<style>
	header {
		padding-top: 2rem;
	}
	.selected-weps {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 0.75rem;
		margin-bottom: 4rem;
		padding-bottom: 4rem;
		border-bottom: 1px solid var(--grey);
	}
	.wep-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: 3rem repeat(3, 1fr);
		grid-auto-flow: column;
		gap: 0.75rem;
	}
	.wep-title {
		font-family: var(--text-script);
		text-transform: uppercase;
		font-size: 1.25rem;
		line-height: 1.5;
		align-self: center;
	}
	.wep-title p {
		margin: 0;
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
