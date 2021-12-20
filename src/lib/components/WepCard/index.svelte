<script context="module">
  export const prerender = true;
</script>

<script>
  export let wep;
  export let aptitudeXP;

  let prices = {};

  const xpNeeded = aptitudeXP[wep.profession]['3'];

  wep.recipe.forEach((component, i) => {
    prices[i] = component.cost;
  });

  $: componentsValue = Object.values(prices).reduce((acc, curr, i) => {
    return acc + curr * wep.recipe[i].amtNeeded;
  }, 0);
  $: salvageValue = prices[0] * wep.salvagePrimaryAmt;
  $: costOfCraft = componentsValue - salvageValue;

  $: craftsNeeded = Math.ceil(xpNeeded / wep.xp);
  $: taxesNeeded = craftsNeeded * wep.craftTax;

  $: valueOfLevel = craftsNeeded * costOfCraft + taxesNeeded;
</script>

<section class="card">
  <div class="title-img" style="background-image: url({wep.img})" />
  <p class="profession">{wep.profession.charAt(0).toUpperCase() + wep.profession.slice(1)}</p>
  <header>
    <h1>{wep.name}</h1>
  </header>

  {#each wep.recipe as component, i}
    <label class="row">
      <span>{component.name} Price (x{component.amtNeeded}):</span>
      <input type="number" step="0.01" bind:value={prices[i]} />
    </label>
  {/each}
  <hr class="break" />
  <p class="row">
    <span>Cost of single craft:</span>
    <strong
      >{costOfCraft.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      })}</strong
    >
  </p>
  <p class="row">
    <span>Crafts needed:</span>
    <strong>x{craftsNeeded.toLocaleString('en-US')}</strong>
  </p>
  <p class="row">
    <span>Total craft cost:</span>
    <strong
      >{(craftsNeeded * costOfCraft).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      })}</strong
    >
  </p>
  <p class="row">
    <span>Taxes needed:</span>
    <strong>${taxesNeeded.toLocaleString('en-US')}</strong>
  </p>
  <hr class="break" />
  <h1 class="final" class:changed={true}>
    <span>Aptitude Cost:</span>
    <span>{valueOfLevel.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
  </h1>
</section>

<style>
  .card {
    position: relative;
    padding: 2.5rem;
    background: var(--brown-dark);
    overflow: hidden;
  }

  .card > * {
    position: relative;
    z-index: 1;
  }

  header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .title-img {
    position: absolute;
    width: 50%;
    height: 200px;
    background-position: center;
    background-repeat: no-repeat;
    top: -8%;
    left: -15%;
    opacity: 0.1;
  }

  .profession {
    text-transform: uppercase;
    letter-spacing: 0.175rem;
    margin-bottom: 0.25rem;
    color: var(--grey-pale);
    opacity: 0.5;
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
    display: flex;
    align-items: center;
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
</style>
