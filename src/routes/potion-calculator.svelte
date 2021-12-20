<script context="module">
  export const prerender = true;

  import potions from '../potions';

  export async function load() {
    return {
      props: {
        data: {
          potions
        }
      }
    };
  }
</script>

<script>
  import PotionCard from '$lib/components/PotionCard/index.svelte';

  export let data;

  let costHyssop = 0.5;
  let costAzothWater = 3.0;
  let costMedicinal = 0.5;
  let costEarth = 0.5;
  let costSpirit = 0.5;
</script>

<svelte:head>
  <title>Potion Calculator | World Forge</title>

  <script async src="https://nwdb.info/embed.js"></script>
</svelte:head>

<div class="cards">
  {#each data.potions as potion}
    <PotionCard
      {potion}
      bind:costHyssop
      bind:costAzothWater
      bind:costMedicinal
      bind:costEarth
      bind:costSpirit
    />
  {/each}
</div>

<style>
  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
</style>
