<script context="module">
  export const prerender = true;

  import { findGemOrWep } from '$lib/helpers/';

  import { monsters } from '../monsters';
  import { gems } from '../gems';
  import { weapons } from '../weapons';

  export async function load() {
    const wepsAndGems = Object.values({ ...gems, ...weapons }).map((item) => ({
      ...item,
      stat: item.element || item.damage_type
    }));

    const monsterInfo = Object.values(monsters).map((monster) => ({
      ...monster,
      weakness: monster.weakness.map((weakness) => ({
        ...weakness,
        item: findGemOrWep(wepsAndGems, weakness.damage_type)
      })),
      resists: monster.resists.map((resist) => ({
        ...resist,
        item: findGemOrWep(wepsAndGems, resist.damage_type)
      }))
    }));

    return {
      props: {
        data: {
          monsters: monsterInfo,
          gems: Object.values(gems),
          weapons: Object.values(weapons)
        }
      }
    };
  }
</script>

<script>
  import { capitalizeFirstLetter } from '$lib/helpers/';

  import LineBorder from '$lib/components/LineBorder/index.svelte';

  export let data;
</script>

<svelte:head>
  <title>Monsters | World Forge</title>
</svelte:head>

<ul class="monster-list">
  {#each data.monsters as monster}
    <li class="monster-list--item">
      <h2 class="monster-name">{monster.title}</h2>
      <LineBorder>
        <div class="monster">
          <div class="monster-img-container">
            <img
              width="361"
              height="416"
              src={`${monster.name}.jpg`}
              alt={monster.name}
              class="mask monster-img"
            />
          </div>
          <div class="monster-info">
            <div class="section">
              <h4 class="list-title">Weak To:</h4>
              <ul class="list">
                {#each monster.weakness as { item }}
                  <li>
                    <img src={`${item.name}.webp`} alt={item.title} class="gem-img" />
                    <p>
                      {capitalizeFirstLetter(item.damage_type || item.element)}
                      <span>({item.title})</span>
                    </p>
                  </li>
                {/each}
              </ul>
            </div>
            <div class="section">
              <h4 class="list-title">Resists:</h4>
              <ul class="list">
                {#each monster.resists as { item }}
                  <li>
                    <img src={`${item.name}.webp`} alt={item.title} class="gem-img" />
                    <p>
                      {capitalizeFirstLetter(item.damage_type || item.element)}
                      <span>({item.title})</span>
                    </p>
                  </li>
                {/each}
              </ul>
            </div>
          </div>
        </div>
      </LineBorder>
    </li>
  {/each}
</ul>

<style>
  .monster-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .monster-list--item {
    display: flex;
    flex-direction: column;
  }
  .monster-list--item :global(.line-container) {
    flex: 1;
  }
  .monster {
    background: hsla(var(--brown-hsl) / 0.75);
  }
  .monster-name {
    text-align: center;
    margin: 1rem 0;
  }
  .monster-img-container {
    -webkit-mask-image: linear-gradient(to top, transparent 0px, black 70%);
    mask-image: linear-gradient(to top, transparent 0px, black 70%);
  }
  .monster-info {
    position: relative;
    padding: 1.5rem;
    margin-top: -8rem;
    text-shadow: 0 4px 11px var(--brown-dark);
  }
  .section:not(:last-child) {
    margin-bottom: 1rem;
  }

  .list-title {
    position: relative;
    margin-bottom: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 1.25rem;
  }
  .list-title:after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, var(--offwhite), transparent);
    opacity: 0.35;
  }
  .list {
    margin: 0;
    padding: 0;
    min-height: 10rem;
  }
  .list li {
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
  }
  .list li img {
    width: 2.5rem;
    margin-right: 0.75rem;
  }
  .list li span {
    margin-left: 0.375rem;
  }
  .wep-img {
    /* background: var(--brown-dark);
    border: 1px solid var(--grey); */
  }
</style>
