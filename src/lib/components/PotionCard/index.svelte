<script context="module">
  export const prerender = true;
</script>

<script>
  export let potion;

  export let costHyssop;
  export let costAzothWater;
  export let costMedicinal;
  export let costEarth;
  export let costSpirit;

  const medicinalItems = [
    'bulrushcobt1',
    'lifebloomt1',
    'glowingcapt1',
    'sporebloomt1',
    'platecapt1',
    'gillflowert1'
  ];
  const earthItems = ['petalcapt1', 'alchemyeartht1', 'earthspinet1'];
  const spiritItems = [
    'bumbleblossomt1',
    'alchemyspiritt1',
    'shellbedt1',
    'soulsproutt1',
    'tubecapt1'
  ];

  let sellValue = 7.0;

  const xpPerCraft = 1658;
  const arcanaLevel = 1439200;
  const craftsPerAptitude = Math.ceil(arcanaLevel / xpPerCraft);

  const neededHyssop = 10;
  const neededAzothWater = 1;

  $: valueHyssop = costHyssop * neededHyssop;
  $: valueAzothWater = costAzothWater * neededAzothWater;
  $: valueAlkahest = valueHyssop + valueAzothWater;

  $: valueMedicinal = costMedicinal * 1;
  $: valueEarth = costEarth * 1;
  $: valueSpirit = costSpirit * 1;

  $: valueofCraft = valueAlkahest + valueMedicinal + valueEarth + valueSpirit;
  $: profit = sellValue - valueofCraft;

  $: anythingChanged =
    costHyssop > 0 && costAzothWater > 0 && costMedicinal > 0 && costEarth > 0 && costSpirit > 0;
</script>

<svelte:head>
  <title>Potion Calculator | World Forge</title>

  <script async src="https://nwdb.info/embed.js"></script>
</svelte:head>

<section class="card" style={`--potion-color: ${potion.color};`}>
  <header>
    <img src={potion.image} alt={potion.name} width="60" height="60" />
    <h1>{potion.name}</h1>
  </header>
  <label class="row">
    <span>Hyssop Price (x{neededHyssop}):</span>
    <input type="number" step="0.01" bind:value={costHyssop} />
  </label>
  <label class="row">
    <span>Azoth Water Price (x1):</span>
    <input type="number" step="0.01" bind:value={costAzothWater} />
  </label>
  <p class="row">
    <span>Alkahest value:</span>
    <strong
      >{valueAlkahest.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      })}</strong
    >
  </p>
  <hr class="break" />
  <label class="row">
    <div>
      <span>Medicinal Price (x1):</span>
      <ul class="component-list">
        {#each medicinalItems as item}
          <a href={`https://nwdb.info/db/item/${item}`} target="_blank"
            ><img src={`${item}.png`} alt={item} width="28" height="28" /></a
          >
        {/each}
      </ul>
    </div>
    <input type="number" step="0.01" bind:value={costMedicinal} />
  </label>
  <label class="row">
    <div>
      <span>Earth Price (x1):</span>
      <ul class="component-list">
        {#each earthItems as item}
          <a href={`https://nwdb.info/db/item/${item}`} target="_blank"
            ><img src={`${item}.png`} alt={item} width="28" height="28" /></a
          >
        {/each}
      </ul>
    </div>
    <input type="number" step="0.01" bind:value={costEarth} />
  </label>
  <label class="row">
    <div>
      <span>Spirit Price (x1):</span>
      <ul class="component-list">
        {#each spiritItems as item}
          <a href={`https://nwdb.info/db/item/${item}`} target="_blank"
            ><img src={`${item}.png`} alt={item} width="28" height="28" /></a
          >
        {/each}
      </ul>
    </div>
    <input type="number" step="0.01" bind:value={costSpirit} />
  </label>
  <hr class="break" />
  <label class="row">
    <span>Market Price:</span>
    <input type="number" step="0.01" bind:value={sellValue} />
  </label>
  <p class="row">
    <span>Craft Cost:</span>
    <strong>- {valueofCraft.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</strong
    >
  </p>
  <h1 class="final" class:profit={profit > 0} class:changed={anythingChanged}>
    <span>Profit:</span>
    <span>{profit.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
  </h1>
  <hr class="break" />
  <div class="row">
    <span>XP Per Craft:</span>
    <strong>{xpPerCraft}</strong>
  </div>
  <div class="row">
    <span>Crafts require for aptitude level:</span>
    <strong>{craftsPerAptitude}</strong>
  </div>
  <h1 class="aptitude">
    <span>Cost of Aptitude Lvl:</span>
    <span
      >{(valueofCraft * craftsPerAptitude).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      })}</span
    >
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
    background: linear-gradient(to bottom, var(--potion-color), hsla(var(--grey-hsl) / 0.25) 30%);
    z-index: -1;
  }
  .card::after {
    content: '';
    position: absolute;
    inset: -1px;
    background: linear-gradient(to bottom, var(--potion-color), transparent 60%);
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

  .component-list {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    margin: 0 0 0 1rem;
    padding: 0;
  }
  .component-list img {
    width: 24px;
    height: 24px;
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
  .final,
  .aptitude {
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
  .aptitude span:nth-child(2) {
    font-size: 2rem;
  }
</style>
