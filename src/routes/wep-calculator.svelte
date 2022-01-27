<script context="module">
  export const prerender = true;

  import weps from '$data/wep-recipes';
  import aptitudeXP from '$data/aptitudeLevelXP';

  export async function load() {
    return {
      props: {
        data: {
          weps,
          aptitudeXP
        }
      }
    };
  }
</script>

<script>
  import WepCard from '$lib/components/WepCard.svelte';

  export let data;
</script>

<svelte:head>
  <title>Weapon Craft Calculator | World Forge</title>
</svelte:head>

<div class="cards">
  {#each data.weps as wep}
    <WepCard {wep} {aptitudeXP} />
  {/each}
</div>

<style>
  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
</style>
