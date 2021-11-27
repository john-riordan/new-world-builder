<script context="module">
  export const prerender = true;

  export async function load() {
    return {
      props: {
        data: {}
      }
    };
  }
</script>

<script>
  export let honingStone;
  export let refineTax;
  export let sandPaperPrice;
  export let deathMotePrice;
  export let fireMotePrice;
  export let lodestonePrice;

  let listedPrice = 0;

  const motesPerTier = {
    1: 1,
    2: 5,
    3: 20,
    4: 60
  };
  const moteRefinePrice = {
    1: 0,
    2: 0.75,
    3: 1.35,
    4: 1.8
  };
  const lodestonesPerTier = {
    1: 0,
    2: 0,
    3: 6,
    4: 50
  };
  const loestoneRefinePrice = {
    1: 0,
    2: 0,
    3: 0.28,
    4: 2.42
  };
  const sandpaperRefineCount = {
    1: 0,
    2: 1,
    3: 2,
    4: 3
  };

  $: motesRequired = motesPerTier[honingStone.tier];
  $: motesValue = deathMotePrice * motesRequired + fireMotePrice + motesRequired;
  $: moteRefiningCost = moteRefinePrice[honingStone.tier] * refineTax;

  $: lodestonesRequired = lodestonesPerTier[honingStone.tier];
  $: lodestoneValue = lodestonePrice * lodestonesRequired;
  $: lodestoneRefiningCost = loestoneRefinePrice[honingStone.tier];

  $: sandpaperRequired = sandpaperRefineCount[honingStone.tier];
  $: sandpaperValue = sandpaperRequired * sandPaperPrice;

  $: totalRefineCost = moteRefiningCost + lodestoneRefiningCost;

  $: anythingChanged = listedPrice > 0;

  $: totalCraftCost = motesValue + lodestoneValue + sandpaperValue + totalRefineCost;
  $: profit = anythingChanged ? listedPrice - totalCraftCost : 0;
</script>

<svelte:head>
  <title>Mote Calculator | World Forge</title>
</svelte:head>

<section class="card" style={`--mote-color: var(--mote-${honingStone.key})`}>
  <header>
    <h1>{honingStone.name}</h1>
  </header>
  <label class="row">
    <span>Death Mote Price (x{motesRequired}):</span>
    <input type="number" bind:value={deathMotePrice} />
  </label>
  <label class="row">
    <span>Fire Mote Price (x{motesRequired}):</span>
    <input type="number" bind:value={fireMotePrice} />
  </label>
  <label class="row">
    <span>Lodestone Price (x{lodestonesRequired}):</span>
    <input type="number" bind:value={lodestonePrice} />
  </label>
  <label class="row">
    <span>Sandpaper Price (x{sandpaperRequired}):</span>
    <input type="number" bind:value={sandPaperPrice} />
  </label>
  <label class="row">
    <span>Town Refining Tax (%):</span>
    <input type="number" bind:value={refineTax} />
  </label>
  <hr class="break" />
  <label class="row">
    <span>Honing Stone Selling For:</span>
    <input type="number" bind:value={listedPrice} />
  </label>
  <hr class="break" />
  <p class="row">
    <span>Motes value:</span>
    <strong
      >{motesValue.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      })}</strong
    >
  </p>
  <p class="row">
    <span>Lodestone value:</span>
    <strong
      >{lodestoneValue.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      })}</strong
    >
  </p>
  <p class="row">
    <span>Sandpaper Value:</span>
    <strong>{sandpaperValue.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</strong
    >
  </p>
  <p class="row">
    <span>Total Craft Cost:</span>
    <strong>{totalCraftCost.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</strong
    >
  </p>
  <h1 class="final" class:profit={profit > 0} class:changed={anythingChanged}>
    <span>Profit:</span>
    <span>{profit.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
  </h1>
</section>

<style>
  .card {
    position: relative;
    padding: 2.5rem;
    background: var(--brown-dark);
  }
  .card::before {
    content: '';
    position: absolute;
    inset: -1px;
    background: linear-gradient(to bottom, var(--mote-color), hsla(var(--grey-hsl) / 0.25) 30%);
    z-index: -1;
  }
  .card::after {
    content: '';
    position: absolute;
    inset: -1px;
    background: linear-gradient(to bottom, var(--mote-color), transparent 60%);
    opacity: 0.15;
    z-index: 0;
    pointer-events: none;
    -webkit-mask-image: url(/static/mask2.png);
  }

  .card > * {
    position: relative;
    z-index: 1;
  }

  header {
    margin-bottom: 1rem;
  }

  label,
  input,
  p {
    line-height: 1.5;
  }
  .row {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
    line-height: 2;
    color: var(--grey-pale);
    width: 100%;
  }

  .row > *:nth-child(1) {
    text-decoration: underline;
    text-decoration-style: dotted;
    text-decoration-thickness: 1px;
    text-underline-offset: 3px;
  }
  .row > *:nth-child(2) {
    width: 10ch;
    text-align: right;
    color: var(--white);
  }

  input {
    background: hsla(var(--grey-hsl) / 0.25);
    color: inherit;
    border: none;
    padding: 0.25rem 0.5rem;
    border-bottom: 1px solid var(--grey);
    line-height: 1.25;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }

  .break {
    margin: 1rem 0;
    border: none;
    border-bottom: 1px dashed var(--grey);
    width: 100%;
    height: 1px;
  }
  .final {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-top: 1rem;
  }
  .final {
    opacity: 0.25;
  }
  .final span:nth-child(2) {
    font-size: 2.25rem;
  }
  .final.changed {
    opacity: 1;
  }
  .final.changed span:nth-child(2) {
    color: var(--red);
  }
  .final.changed.profit span:nth-child(2) {
    color: var(--green);
  }
</style>
