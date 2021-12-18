<script context="module">
  export const prerender = true;
</script>

<script>
  export let mote;
  export let refineTax;
  export let proc;

  let moteCount = 0;

  const refineBasePrice = 0.15;
  const procChance = 0.2;

  let motePrice = 0;
  let quintPrice = 0;

  $: refiningCost = refineBasePrice * refineTax;

  $: anythingChanged = moteCount > 0 || motePrice > 0 || quintPrice > 0;

  $: wispCrafts = Math.floor(moteCount / 5);
  $: wispCount = wispCrafts + Math.floor(wispCrafts * procChance);
  $: essenceCrafts = Math.floor(wispCount / 4);
  $: essenceCount = essenceCrafts + Math.floor(essenceCrafts * procChance);
  $: quintCrafts = Math.floor(essenceCount / 3);
  $: quintCount = quintCrafts + Math.floor(quintCrafts * procChance);

  $: wispCraftCost = wispCrafts * refiningCost;
  $: quintCraftCost = quintCrafts * refiningCost;
  $: essenceCraftCost = essenceCrafts * refiningCost;
  $: valueofCraft = wispCraftCost + quintCraftCost + essenceCraftCost;
  $: profit = quintCount * quintPrice - valueofCraft - moteCount * motePrice;
</script>

<svelte:head>
  <title>Mote Calculator | World Forge</title>
</svelte:head>

<section class="card" style={`--mote-color: var(--mote-${mote.key})`}>
  <header>
    <img src={mote.image} alt={mote.name} width="60" height="60" />
    <h1>{mote.name}</h1>
  </header>
  <label class="row">
    <span>Mote Price:</span>
    <input type="number" bind:value={motePrice} />
  </label>
  <label class="row">
    <span>Quint Price:</span>
    <input type="number" bind:value={quintPrice} />
  </label>
  <label class="row">
    <span>Motes Refined:</span>
    <input type="number" bind:value={moteCount} />
  </label>
  <label class="row">
    <span>Town Refining Tax (%):</span>
    <input type="number" bind:value={refineTax} />
  </label>
  <hr class="break" />
  <p class="row"><span>Wisp Count:</span> <strong>{wispCount}</strong></p>
  <p class="row"><span>Essence Count:</span> <strong>{essenceCount}</strong></p>
  <p class="row"><span>Quint Count:</span> <strong>{quintCount}</strong></p>
  <hr class="break" />
  <p class="row">
    <span>Quint value:</span>
    <strong
      >{(quintCount * quintPrice).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      })}</strong
    >
  </p>
  <p class="row">
    <span>Mote value:</span>
    <strong
      >- {(moteCount * motePrice).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      })}</strong
    >
  </p>
  <p class="row">
    <span>Craft Cost:</span>
    <strong>- {valueofCraft.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</strong
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
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-left: -1rem;
    margin-top: -1rem;
    margin-bottom: 1rem;
  }

  header img {
    background: var(--brown);
    border-radius: 50%;
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
