<script context="module">
  export const prerender = true;

  import { attributes } from '../attributes';

  export async function load() {
    return {
      props: {
        data: attributes
      }
    };
  }
</script>

<script>
  import { str, dex, int, foc, con, attrs } from '../stores';

  import { MIN_ATTR_PTS } from '../constants';

  export let data;

  import Attribute from '$lib/Attributes/Attribute.svelte';

  function respec() {
    str.set(MIN_ATTR_PTS);
    dex.set(MIN_ATTR_PTS);
    int.set(MIN_ATTR_PTS);
    foc.set(MIN_ATTR_PTS);
    con.set(MIN_ATTR_PTS);
  }
</script>

<svelte:head>
  <title>Attributes | World Forge</title>
</svelte:head>

<div class="attrs-container">
  <div class="left">
    <div class="points">
      <div class="mask2 compass" />
      <h2 class="mask points-available" class:canAllocate={$attrs.available}>{$attrs.available}</h2>
    </div>
    <h4 class="subtitle">Points <br />Available</h4>
    <button class="subtle respec" class:disabled={!$attrs.anyPtsAllocated} on:click={respec}
      >Respec</button
    >
    <h2 class="mask2 bonuses-title">Bonuses:</h2>
    <ul class="bonuses">
      {#each $attrs.bonuses as bonus, i}
        <li>
          {@html bonus}
        </li>
      {/each}
    </ul>
  </div>
  <div class="right">
    <Attribute info={data.str} pts={str} />
    <Attribute info={data.dex} pts={dex} />
    <Attribute info={data.int} pts={int} />
    <Attribute info={data.foc} pts={foc} />
    <Attribute info={data.con} pts={con} />
  </div>
</div>

<style>
  .attrs-container {
    display: flex;
    padding-top: 1rem;
    gap: 3rem;
  }
  .left {
    flex: 1;
    text-align: center;
  }

  .points {
    position: relative;
  }
  .compass,
  .compass::before,
  .compass::after {
    content: '';
    position: absolute;
    aspect-ratio: 1;
    width: 200px;
    background-position: center;
    background-repeat: no-repeat;
  }
  .compass::before,
  .compass::after {
    top: 0;
    left: 0;
  }

  @keyframes spin {
    to {
      transform: rotate(1turn);
    }
  }
  .compass {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: url('/static/compass-diamond.png');
  }

  .compass::before {
    opacity: 0.6;
    background-image: url('/static/compass-outer.png');
    animation: spin 40s linear forwards infinite;
  }
  .compass::after {
    opacity: 0.6;
    background-image: url('/static/compass-ring.png');
    animation: spin 30s linear reverse infinite;
  }

  .points-available {
    font-size: 9rem;
    line-height: 1;
    letter-spacing: 0;
    text-shadow: 0 10px 28px var(--black);
    margin: 0;
    padding-bottom: 1rem;
  }
  .points-available.canAllocate {
    color: var(--yellow);
  }
  .subtitle {
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    margin: 1rem 0;
  }
  .respec {
    width: 8rem;
  }

  .bonuses-title {
    position: relative;
    text-align: left;
    margin: 3rem 0 0;
    padding-bottom: 0.5rem;
    font-size: 1.25rem;
  }
  .bonuses-title:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-image: url(https://d2lchq0n03yu65.cloudfront.net/statics/2021-05-20/images/new-world-sprites.png);
    background-repeat: no-repeat;
    background-position: 66% 74%;
    -webkit-mask-image: linear-gradient(to right, black 0%, black 30%, black 70%, transparent 100%);
  }
  .bonuses {
    text-align: left;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .bonuses::-webkit-scrollbar {
    display: none;
  }
  .bonuses li {
    position: relative;
    margin: 1rem 0;
  }

  .bonuses li :global(span) {
    color: var(--yellow);
  }

  .right {
    flex: 4;
    display: grid;
    grid-template-rows: repeat(5, 8rem);
    gap: 1rem;
  }
</style>
