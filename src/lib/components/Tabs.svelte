<script>
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  export let tabs = [];

  $: query = $page.query.get('tab');
  $: selectedTab = query ? tabs.findIndex((tab) => tab.title === query) : 0;
</script>

<nav class="tab-list">
  {#each tabs as tab, index}
    {#if !tab.url}
      <div
        class="tab"
        class:active={index === selectedTab}
        on:click={() => {
          if (!tab.url) goto(`/?tab=${tab.title}`);
        }}
      >
        {tab.title}
      </div>
    {:else if tab.url}
      <a href={tab.url} class="tab" class:active={$page.path.includes(tab.url)}>
        {tab.title}
      </a>
    {/if}
  {/each}
  <div class="maintenance">
    <span />🚨 No longer in development 🚨
  </div>
</nav>

<style>
  .tab-list {
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 1.25rem;
    margin: 2rem 0;
  }
  .tab-list:after {
    --line-overflow: 2rem;

    content: '';
    position: absolute;
    bottom: 0;
    left: calc(var(--line-overflow) * -1);
    right: calc(var(--line-overflow) * -1);
    height: 1px;
    background: var(--white);
    -webkit-mask-image: linear-gradient(
      to right,
      transparent 0%,
      black 8%,
      black 92%,
      transparent 100%
    );
    mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
  }

  .tab {
    display: flex;
    align-items: center;
    height: 3rem;
    padding: 0 1rem;
    border-bottom: none;
    font-size: 1rem;
    color: var(--grey-pale);
    text-transform: uppercase;
    text-decoration: none;
    text-shadow: 0 4px 5px var(--black);
    font-family: var(--text-script);
    background: hsla(var(--brown-hsl) / 0.75);
    border: 1px solid var(--grey);
    border-bottom: none;
    border-right: none;
    letter-spacing: 4px;
    cursor: pointer;
    transition: color var(--transition);
  }
  .tab:is(:last-of-type) {
    border-right: 1px solid var(--grey);
  }
  .tab:is(:hover, .active) {
    color: var(--white);
  }
  .tab.active {
    border-color: var(--white);
    box-shadow: 1px 0 white, inset 0 -1px var(--brown);
    z-index: 1;
  }

  .maintenance {
    display: grid;
    background: hsla(var(--red-hsl) / 0.15);
    color: var(--red);
    font-weight: 600;
    padding: 0.25rem 0.75rem;
    margin-left: 0.25rem;
  }
</style>
