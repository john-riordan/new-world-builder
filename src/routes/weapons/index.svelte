<script context="module">
  export const prerender = true;

  import { wepClasses } from '$data/weapons';

  export async function load() {
    return {
      props: {
        data: wepClasses,
        error: !wepClasses && 'No Weapons Found'
      }
    };
  }
</script>

<script>
  import StripedBg from '$lib/components/StripedBg.svelte';
  import { selectedWeps, wep0Pts, wep1Pts } from '$stores/weapons';

  export let data;
</script>

<svelte:head>
  <title>Weapons | World Forge</title>
</svelte:head>

<header>
  {#if $selectedWeps.length === 0}
    <h1 class="page-title">Select weapons in the grid below</h1>
  {:else if $selectedWeps.length <= 2}
    <h1 class="page-title">Equipped Weapons</h1>
  {/if}
</header>

<div class="wep-grid">
  {#each data as wepClass}
    <div class="wep-title"><p>{wepClass.title}</p></div>
    {#each wepClass.list as wep}
      {#if wep.name}
        <a
          sveltekit:prefetch
          href={`/weapons/${wep.name}`}
          class="wep"
          class:selected={$selectedWeps.includes(wep.name)}
        >
          <StripedBg>
            <div class="wep-inner">
              <img src={`${wep.name}.webp`} alt="" />
              <div>
                <p class="title">{wep.title}</p>
                {#if $selectedWeps.includes(wep.name)}
                  <p class="pts">
                    {$selectedWeps.indexOf(wep.name) === 0 ? $wep0Pts : $wep1Pts} Points spent
                  </p>
                {:else}
                  <p class="pts">--</p>
                {/if}
              </div>
            </div>
          </StripedBg>
        </a>
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
  .page-title {
    margin-bottom: 2rem;
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
    text-decoration: none;
    overflow: hidden;
  }
  .wep-inner {
    padding: 1.75rem;
  }
  .wep:not(.empty) {
    position: relative;
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
    filter: brightness(1.15) drop-shadow(0px 2px 17px var(--black));
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
    filter: brightness(1.5) drop-shadow(0px 2px 7px var(--black));
  }
</style>
