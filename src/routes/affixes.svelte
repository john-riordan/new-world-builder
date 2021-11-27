<script context="module">
  export const prerender = true;

  import affixes from '../affixes';
  import tiers from '../tiers';
  import { attributes } from '../attributes';

  export async function load() {
    return {
      props: {
        data: { affixes, tiers },
        attrs: attributes
      }
    };
  }
</script>

<script>
  import Select from '$lib/components/Select/index.svelte';

  export let data;
  export let attrs;

  let primary;
  let secondary;
  let tier = 't5';

  console.log(attrs);

  $: selectedKey = primary && secondary && `${primary}_${secondary}`;
  $: selected = selectedKey && data.affixes[selectedKey];
  $: selectedFood = selectedKey && data.affixes[selectedKey].food[tier];
  $: dbFoodLink =
    primary === secondary
      ? `https://nwdb.info/db/recipe/food${primary}${tier}`
      : `https://nwdb.info/db/recipe/food${primary}${secondary}${tier}`;
</script>

<svelte:head>
  <title>Item Affixes | World Forge</title>
  <script>
    var nwdbConfig = { scale: 0.75, delay: 100 };
  </script>
  <script async src="https://nwdb.info/embed.js"></script>
</svelte:head>

<div class="attr-select">
  <div>
    <h2 class="attr-select--title">Primary</h2>
    <Select
      bind:value={primary}
      defaultVal="Select Primary Attribute"
      options={Object.entries(attrs).map(([attrKey, attrInfo]) => ({
        value: attrKey,
        text: `${attrInfo.title} (+20)`
      }))}
    />
  </div>
  <div>
    <h2 class="attr-select--title">Secondary</h2>
    <Select
      bind:value={secondary}
      defaultVal="Select Secondary Attribute"
      options={Object.entries(attrs).map(([attrKey, attrInfo]) => ({
        value: attrKey,
        text: `${attrInfo.title} (+10)`
      }))}
    />
  </div>
</div>

{#if selected}
  <div class="selected-info">
    <section>
      <span class="suffix-string--overline">Items that end with</span>
      <h1 class="suffix-string">... of the <span>{selected.title}</span></h1>
    </section>
    <section>
      <span class="suffix-string--overline">Food</span>
      <a href={dbFoodLink}>
        <h1 class="suffix-string">{selectedFood}</h1>
      </a>
      <div class="tier-btns">
        {#each data.tiers as tierInfo}
          <button class:selected={tier === tierInfo.key} on:click={() => (tier = tierInfo.key)}
            >{tierInfo.name}</button
          >
        {/each}
      </div>
    </section>
  </div>
{:else}
  <span class="suffix-string--overline hidden">...</span>
  <h1 class="suffix-string non-selected">Select primary and secondary attributes...</h1>
{/if}

<div class="decoration-line--wide" />

<div class="grid" data-primary={primary} data-secondary={secondary}>
  <div />
  <div class="title primary-title">
    <h2>Primary</h2>
  </div>
  <div class="title secondary-title">
    <h2>Secondary</h2>
  </div>
  <div />
  {#each Object.values(attrs) as attr}
    <div class="grid-item-attr">
      <span>{attr.title}</span>
    </div>
  {/each}
  {#each Object.values(attrs) as attr}
    <div class="grid-item-attr" data-attr={attr.short.toLowerCase()}>
      <span>{attr.title}</span>
    </div>
  {/each}
  {#each Object.entries(data.affixes) as [key, { title }], i}
    <div
      class="grid-item"
      class:highlight={selectedKey === key}
      data-primary={key.split('_')[0]}
      data-secondary={key.split('_')[1]}
      on:click={() => {
        primary = key.split('_')[0];
        secondary = key.split('_')[1];
      }}
    >
      <h4 class="grid-item--title">{title}</h4>
      {#if key.split('_')[0] === key.split('_')[1]}
        <span class="grid-item--val"><span>(+30) </span>{attrs[key.split('_')[0]].title}</span>
      {:else}
        <span>
          <span class="grid-item--val"><span>(+20)</span> {attrs[key.split('_')[0]].short}</span>
          <span class="grid-item--val"><span>(+10)</span> {attrs[key.split('_')[1]].short}</span>
        </span>
      {/if}
    </div>
  {/each}
</div>

<style>
  .attr-select {
    display: flex;
    justify-content: center;
    gap: 4rem;
    text-align: center;
    padding: 2rem 0;
  }
  .attr-select--title {
    font-size: 1.5rem;
    margin: 0 0 0.5rem;
  }

  .selected-info > * {
    margin-top: 1rem;
    padding: 0.5rem 0 1rem;
  }
  .selected-info a {
    text-decoration-thickness: 1px;
    text-decoration-color: var(--grey-pale);
    text-underline-offset: 0.25rem;
  }

  .suffix-string--overline {
    display: block;
    text-align: center;

    color: var(--grey-pale);
  }
  .suffix-string--overline.hidden {
    opacity: 0;
    visibility: hidden;
  }
  .suffix-string {
    text-align: center;
    margin: 0;
    padding-top: 0.5rem;
    color: var(--grey-pale);
  }
  .suffix-string span {
    color: var(--green);
  }
  .suffix-string.non-selected {
    padding: 6rem 0;
    color: var(--grey-pale);
  }

  .tier-btns {
    display: flex;
    gap: 0.25rem;
    justify-content: center;
    margin-top: 0.5rem;
    font-size: 0.75rem;
  }
  .tier-btns button {
    padding: 0.25rem 0.75rem;
    background: hsla(var(--brown-dark-hsl) / 0.5);
    border-radius: 3px;
  }
  .tier-btns button.selected {
    color: var(--green);
    background: hsla(var(--green-hsl) / 0.15);
  }

  .grid {
    --gap: 0.5rem;

    display: grid;
    grid-template-columns: 0.25fr 0.5fr repeat(5, 1fr);
    grid-template-rows: 0.25fr 0.5fr repeat(5, 1fr);
    gap: var(--gap);
    grid-auto-flow: row dense;
  }
  .grid > div {
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
  }
  .grid > div > * {
    position: relative;
  }
  .title h2 {
    margin: 0;
  }
  [data-attr] {
    grid-column-start: 2;
    grid-column-end: 3;
  }
  .grid-item {
    position: relative;
    border: 2px solid var(--brown-dark);
    background: hsla(var(--brown-dark-hsl) / 0.75);
    cursor: pointer;
    transition: border-color var(--transition), background var(--transition);
  }
  .grid-item:hover {
    background: hsla(var(--grey-pale-hsl) / 0.15);
    border-color: hsla(var(--grey-pale-hsl) / 0.5);
  }
  .grid-item.highlight {
    color: var(--green);
    border-color: var(--green);
  }
  .grid-item.highlight .grid-item--val span {
    color: var(--green);
  }
  .grid-item--title {
    font-size: 1.25rem;
    margin: 0;
  }
  .grid-item--val {
    color: var(--grey-pale);
    margin: 0 0.5rem;
  }
  .grid-item--val span {
    font-weight: 700;
    color: var(--skill-orange);
  }

  .primary-title {
    text-orientation: upright;
    writing-mode: vertical-lr;
    grid-column: 1;
    grid-row-start: 2;
    grid-row-end: 8;
  }
  .secondary-title {
    grid-column-start: 2;
    grid-column-end: 8;
    grid-row: 1;
  }

  /* Highlight primary selected row */
  [data-primary='str'] [data-attr='str']::before,
  [data-primary='dex'] [data-attr='dex']::before,
  [data-primary='int'] [data-attr='int']::before,
  [data-primary='foc'] [data-attr='foc']::before,
  [data-primary='con'] [data-attr='con']::before {
    content: '';
    position: absolute;
    inset: 0 calc(var(--gap) * -1) 0 0;
    background: linear-gradient(to right, transparent, var(--grey));
    opacity: 0.3;
  }
  .grid [data-primary='str'][data-secondary='str']::before,
  .grid [data-primary='dex'][data-secondary='dex']::before,
  .grid [data-primary='int'][data-secondary='int']::before,
  .grid [data-primary='foc'][data-secondary='foc']::before,
  .grid [data-primary='con'][data-secondary='con']::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--grey);
    opacity: 0.35;
  }
</style>
