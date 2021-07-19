<script context="module">
  export const load = async ({ page }) => ({
    props: {
      key: page.path
    }
  });
</script>

<script>
  import Header from '$lib/components/Header/index.svelte';
  import Footer from '$lib/components/Footer/index.svelte';
  import PageTransition from '$lib/components/PageTransition/index.svelte';

  import BuildOverview from '$lib/components/BuildOverview/index.svelte';
  import Tabs from '$lib/components/Tabs/index.svelte';
  import '../app.css';

  export let key;
</script>

<div class="bg bg-bottom" />
<div class="bg bg-top" />

<!-- <Header /> -->

<main>
  <Tabs
    tabs={[
      {
        title: 'Attributes',
        url: '/attributes'
      },
      {
        title: 'Weapons',
        url: '/weapons'
      },
      {
        title: 'Item Affixes',
        url: '/affixes'
      },
      {
        title: 'Monster Types',
        url: '/monsters'
      },
      {
        title: 'Dungeons',
        url: '/dungeons'
      }
    ]}
  />
  <PageTransition refresh={key}>
    <slot />
  </PageTransition>
</main>

<BuildOverview />

<Footer />

<style>
  main {
    min-height: 95vh;
    width: 95%;
    max-width: var(--app-container);
    margin: 0 auto;
    padding: 0 3.5rem;
  }

  .bg {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 50%;
    transform: translatex(-50%);
    max-width: 1920px;
    z-index: -1;
  }
  .bg-top {
    top: 0;
    background: url(/diamond-texture-top.png) no-repeat top;
  }
  .bg-bottom {
    bottom: 0;
    background: url(/texture-bottom.jpg) no-repeat bottom;
  }
</style>
