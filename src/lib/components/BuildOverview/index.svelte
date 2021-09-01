<script>
  import { cubicInOut } from 'svelte/easing';

  import {
    selectedWeps,
    wep0Pts,
    wep0Skills,
    wep1Pts,
    wep1Skills,
    attrs,
    shareLink
  } from '../../../stores';
  import { copyToClipboard } from '$lib/helpers/';
  import { weapons } from '../../../weapons';
  import { attributes } from '../../../attributes';
  import StripedBg from '$lib/components/StripedBg/index.svelte';
  import LineBorder from '$lib/components/LineBorder/index.svelte';
  import SkillList from './SkillList.svelte';

  $: buildStarted = $selectedWeps[0] || $selectedWeps[1] || $attrs.primary;

  export function enter() {
    return {
      duration: 350,
      css: (t, u) => {
        const eased = cubicInOut(u);

        return `
					transform: translateX(-50%) translateY(${100 * eased}%);
					opacity: ${t};
				`;
      }
    };
  }

  $: wep1 = weapons[$selectedWeps[0]];
  $: wep2 = weapons[$selectedWeps[1]];

  function copyShareLink() {
    copyToClipboard($shareLink);
  }
</script>

{#if buildStarted}
  <div class="build" transition:enter>
    <LineBorder>
      <StripedBg>
        <div class="build-inner">
          <button on:click={copyShareLink}>Share</button>
          {#if $attrs.primary}
            <div class="attrs">
              <span class="attr-text">
                Primary: {attributes[$attrs.primary.key].title}
                <span>({$attrs.primary.pts})</span>
              </span>
              {#if $attrs.secondary}
                <span class="attr-text">
                  Secondary: {attributes[$attrs.primary.key].title}
                  <span>({$attrs.secondary.pts})</span>
                </span>
              {/if}
            </div>
          {/if}
          <div class="weps">
            {#if wep1}
              <a href={`/weapons/${wep1.name}`} class="wep">
                <h4>{wep1.title}</h4>
                <!-- <p class="pts">{$wep0Pts} Points spent</p> -->
                <SkillList skills={$wep0Skills} />
              </a>
            {:else}
              <div class="wep no-wep">
                <h4>Select Wep 1</h4>
                <!-- <p class="pts">-</p> -->
                <SkillList skills={$wep0Skills} />
              </div>
            {/if}
            {#if wep2}
              <a href={`/weapons/${wep2.name}`} class="wep">
                <h4>{wep2.title}</h4>
                <!-- <p class="pts">{$wep1Pts} Points spent</p> -->
                <SkillList skills={$wep1Skills} />
              </a>
            {:else}
              <div class="wep no-wep">
                <h4>Select Wep 2</h4>
                <!-- <p class="pts">-</p> -->
                <SkillList skills={$wep1Skills} />
              </div>
            {/if}
          </div>
        </div>
      </StripedBg>
    </LineBorder>
  </div>
{/if}

<style>
  .build {
    position: fixed;
    bottom: 1rem;
    left: 50%;
    background: var(--brown);
    transform: translateX(-50%);
    z-index: 9;
    box-shadow: 0 3px 6px -36px rgba(0, 0, 0, 0.5), 0 7px 13px -36px rgba(0, 0, 0, 0.4),
      0 12px 25px -36px rgba(0, 0, 0, 0.3), 0 22px 44px -36px rgba(0, 0, 0, 0.5),
      0 41px 83px -36px rgba(0, 0, 0, 0.7), 0 100px 200px -36px rgba(0, 0, 0, 0.8);
  }
  .build-inner {
    padding: 1.25rem;
  }

  .build .attrs,
  .build .weps {
    display: flex;
    gap: 0.75rem;
  }
  .build .weps {
    flex: 1;
  }
  .attr-text {
    flex: 1;
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 1px;
    color: hsla(var(--grey-pale-hsl) / 0.5);
    margin-bottom: 0.25rem;
  }
  .attr-text span {
    color: hsla(var(--grey-pale-hsl) / 1);
    font-weight: 700;
  }
  .wep {
    width: 17rem;
    text-decoration: none;
  }
  .wep.no-wep {
    opacity: 0.35;
  }

  .wep h4 {
    margin: 0;
  }
</style>
