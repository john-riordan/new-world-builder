<script context="module">
  export const prerender = true;

  import honingStones from '$data/honingStones';

  export async function load() {
    return {
      props: {
        data: {
          honingStones
        }
      }
    };
  }
</script>

<script>
  import HoningCard from '$lib/components/HoningCard.svelte';

  export let data;

  let refineTax = 1;
  let sandPaperPrice = 0.75;
  let deathMotePrice = 0.42;
  let fireMotePrice = 0.42;
  let lodestonePrice = 0.35;
</script>

<svelte:head>
  <title>Honing Stone Calculator | World Forge</title>
</svelte:head>

<div class="cards">
  {#each data.honingStones as honingStone}
    <HoningCard
      {honingStone}
      bind:sandPaperPrice
      bind:deathMotePrice
      bind:fireMotePrice
      bind:lodestonePrice
      bind:refineTax
    />
  {/each}
</div>

<style>
  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: auto;
    gap: 1.5rem;
  }
</style>
