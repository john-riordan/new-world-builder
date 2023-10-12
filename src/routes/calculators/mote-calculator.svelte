<script context="module">
  export const prerender = true;

  import motes from '$data/motes';

  export async function load() {
    return {
      props: {
        data: {
          motes
        }
      }
    };
  }
</script>

<script>
  import MoteCard from '$lib/components/MoteCard.svelte';

  export let data;

  let refineTax = 1;
</script>

<svelte:head>
  <title>Mote Calculator | World Forge</title>
</svelte:head>

<div class="cards">
  {#each data.motes as mote}
    <MoteCard {mote} bind:refineTax />
  {/each}
</div>

<style>
  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-rows: auto;
    gap: 1.5rem;
  }
</style>
