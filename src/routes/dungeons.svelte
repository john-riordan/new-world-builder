<script context="module">
  export const prerender = true;

  import dungeons from '$data/dungeons.json';
  import { monsters } from '$data/monsters';

  export async function load() {
    return {
      props: {
        data: {
          dungeons,
          monsters
        }
      }
    };
  }
</script>

<script>
  import LineBorder from '$lib/components/LineBorder.svelte';
  import StripedBg from '$lib/components/StripedBg.svelte';

  export let data;

  let hoveredDungeon;
  let clickedDungeon;
  $: selectedDungeon = hoveredDungeon || clickedDungeon;

  function setClicked(dungeon) {
    clickedDungeon = dungeon;
  }
  function setHovered(dungeon) {
    hoveredDungeon = dungeon;
  }
  function unsetHovered() {
    hoveredDungeon = null;
  }
  function lvlColor(index) {
    return `${5 + index * 15}%`;
  }
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
</script>

<svelte:head>
  <title>Dungeons | World Forge</title>
</svelte:head>

<div class="page-container">
  <div class="map-container--outer">
    <div class="map-container--inner" class:hoveredDungeon={hoveredDungeon || clickedDungeon}>
      <img class="map-img" src="dungeon-locations.webp" alt="New Work Dungeon Locations" />
      {#each data.dungeons.data as dungeon, index}
        <div
          class="dungeon-loc"
          class:hovered={selectedDungeon && selectedDungeon.key === dungeon.key}
          style={`--y-coord: ${dungeon['y-coord']}; --x-coord: ${dungeon['x-coord']}`}
          on:mouseenter={() => setHovered(dungeon)}
          on:mouseleave={unsetHovered}
          on:click={() => setClicked(dungeon)}
        >
          <svg
            viewBox="0 0 52 49"
            class="dungeon-star"
            style={`
						--star-y: ${dungeon['star-y']};
						--star-x: ${dungeon['star-x']};
						--s: ${lvlColor(index)}
					`}
          >
            <path
              d="M26 0L33.9351 16.0783L51.6785 18.6565L38.8393 31.1717L41.8702 48.8435L26 40.5L10.1298 48.8435L13.1607 31.1717L0.321474 18.6565L18.0649 16.0783L26 0Z"
              xmlns="http://www.w3.org/2000/svg"
            />
          </svg>
        </div>
      {/each}
    </div>
  </div>

  <div class="list-container">
    <LineBorder>
      <StripedBg>
        <div class="list-container--inner">
          <div class="fast-travel-legend">
            <svg
              class="fast-travel-diamond"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="9.19238" width="13" height="13" transform="rotate(-45 0 9.19238)" />
            </svg>
            <span>Fast Travel Locations</span>
          </div>
          <h3 class="list-container--title">Dungeons</h3>
          <ol class="dungeon-list">
            {#each data.dungeons.data.sort((a, b) => a.level - b.level) as dungeon, index}
              <li
                class="diamond"
                on:mouseenter={() => setHovered(dungeon)}
                on:mouseleave={unsetHovered}
                on:click={() => setClicked(dungeon)}
                class:hovered={selectedDungeon && selectedDungeon.name === dungeon.name}
              >
                <p class="dungeon-title">
                  <span style={`--s: ${lvlColor(index)}`}>[Lvl {dungeon.level}]:</span>
                  {dungeon.name}
                </p>
              </li>
            {/each}
          </ol>
          {#if selectedDungeon}
            <div class="preview-container">
              <div
                class="monster-bg mask2"
                style={`background-image: url(${
                  data.monsters[selectedDungeon.monsters].name
                }.jpg);`}
              />
              <h4 class="selected-dungeon--name">{selectedDungeon.name}</h4>
              <div>
                <p class="selected-dungeon--monsters weak">Monster Type:</p>
                <p class="strong">{data.monsters[selectedDungeon.monsters].title}</p>
              </div>
              <div>
                <p class="weak">Weak to:</p>
                <ul class="inline-list strong">
                  {#each data.monsters[selectedDungeon.monsters].weakness as weakness}
                    <li><span>{capitalizeFirstLetter(weakness.damage_type)}</span></li>
                  {/each}
                </ul>
              </div>
              <div>
                <p class="weak">Resists:</p>
                <ul class="inline-list strong">
                  {#each data.monsters[selectedDungeon.monsters].resists as resist}
                    <li><span>{capitalizeFirstLetter(resist.damage_type)}</span></li>
                  {/each}
                </ul>
              </div>
            </div>
          {:else}
            <div class="preview-container empty">
              <h4>Hover a dungeon to view details</h4>
            </div>
          {/if}
        </div>
      </StripedBg>
    </LineBorder>
  </div>
</div>

<style>
  .page-container {
    --h: 180deg;
    --l: 40%;
  }

  .list-container {
    position: absolute;
    top: 3%;
    left: 0;
    background: var(--brown-dark);
    box-shadow: 0 7px 18px var(--brown-dark);
  }
  .list-container--inner {
    --list-container-padding: 2rem;
    padding: var(--list-container-padding);
    width: 375px;
  }

  .fast-travel-legend {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
    padding-bottom: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--grey-pale);
    font-size: 0.75rem;
    border-bottom: 1px solid var(--brown);
  }

  .fast-travel-legend .fast-travel-diamond {
    width: 0.75rem;
    height: auto;
  }

  .dungeon-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .dungeon-list li {
    display: flex;
    align-items: center;
    padding: 0.25rem 0;
    cursor: pointer;
  }

  .inline-list {
    display: flex;
    align-items: center;
    gap: 1rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .list-container li.diamond::before {
    content: '';
    display: block;
    width: 0.35rem;
    height: 0.35rem;
    margin-right: 0.5rem;
    border: 1px solid var(--grey);
    transform: rotate(45deg);
  }
  .list-container li.diamond.hovered::before {
    border-color: var(--white);
    box-shadow: 0 0 0 1px var(--white);
  }

  .dungeon-title {
    font-weight: 700;
  }
  .dungeon-title span {
    font-weight: 400;
    color: hsl(var(--h), var(--s), var(--l));
  }

  .preview-container {
    position: relative;
    height: 180px;
    margin-top: 1rem;
    padding-top: 1rem;
    font-size: 0.875rem;
    color: var(--offwhite);
  }
  .preview-container > * {
    position: relative;
    margin-bottom: 0.5rem;
  }
  .preview-container.empty {
    display: grid;
    place-content: center;
    text-align: center;
  }
  .monster-bg {
    position: absolute;
    top: 0;
    aspect-ratio: 2 / 1;
    background-size: cover;
    background-position: 100% 13%;
    margin: 0 calc(var(--list-container-padding) * -1);
    width: calc(100% + (var(--list-container-padding) * 2));
    -webkit-mask-image: radial-gradient(
      ellipse at top center,
      hsla(0deg 0% 0% / 0.4) 0%,
      transparent 70%
    );
    box-shadow: inset 0 1px 0 var(--offwhite);
  }

  .selected-dungeon--name {
    margin-bottom: 0.5rem;
  }
  .weak {
    color: var(--grey-pale);
  }
  .strong {
    font-weight: 700;
  }

  .map-container--outer {
    position: relative;
    max-width: 1306px;
    margin: 0 auto;
  }
  .map-container--inner {
    position: relative;
    width: 100%;
    margin: 0 auto;
    height: 0;
    padding-bottom: 100%;
  }
  .map-img {
    position: absolute;
    width: 100%;
    pointer-events: none;
  }

  .dungeon-loc {
    top: var(--y-coord, 0);
    left: var(--x-coord, 0);

    position: absolute;
    transform: translate3d(0, 0, 0);
    transition: transform var(--transition);
  }

  .fast-travel-diamond {
    display: block;
    fill: hsl(4deg 68% 50%);
    stroke: hsl(4deg 68% 60%);
    filter: drop-shadow(0px 0px 6px black) drop-shadow(0px 0px 14px black);
    stroke-width: 2px;
    overflow: visible;
  }

  .dungeon-loc {
    width: 19%;
    height: 6%;
    cursor: pointer;
  }

  .hoveredDungeon .dungeon-loc:not(.hovered) .dungeon-star {
    fill: var(--brown);
    stroke: var(--grey);
  }

  .dungeon-star {
    top: var(--star-y, 0);
    left: var(--star-x, 0);

    position: absolute;
    width: 24%;
    height: auto;
    fill: hsl(var(--h), var(--s), var(--l));
    stroke: hsl(var(--h), var(--s), calc(var(--l) * 1.25));
    stroke-width: 3px;
    overflow: visible;
    filter: drop-shadow(0px 2px 10px black);
    transition: fill 0.2s var(--transition), stroke 0.2s var(--transition),
      transform 0.2s var(--transition);
  }

  .dungeon-loc:hover .dungeon-star,
  .dungeon-loc.hovered .dungeon-star {
    transform: scale(1.2);
  }
</style>
