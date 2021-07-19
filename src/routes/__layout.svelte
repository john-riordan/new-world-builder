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

<svelte:head>
  <link rel="icon" type="image/png" href="/favicon.png" />
  <meta
    name="description"
    content="World Forge is the go to interactive builder for the MMO PC game from Amazon Games, providing players with up-to-date builds, weapons, dungeons, and more."
  />
  <meta
    name="keywords"
    content="New World,  New World Amazon, New World Forge, New World Resources, New World MMO, MMO, MMORPG, online game"
  />
  <link rel="canonical" href="https://www.wordforge.gg" />
  <meta property="og:url" content="http://worldforge.gg" />
  <meta property="og:title" content="World Forge" />
  <meta
    property="og:description"
    content="World Forge is the go to interactive builder for the MMO PC game from Amazon Games, providing players with up-to-date builds, weapons, dungeons, and more."
  />
  <meta property="og:image" content="/og-image.jpg" />
</svelte:head>

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
    background: url(https://d2lchq0n03yu65.cloudfront.net/statics/2021-05-20/images/diamond-texture-top.png)
      no-repeat top;
  }
  .bg-bottom {
    bottom: 0;
    background: url(https://d2lchq0n03yu65.cloudfront.net/statics/2021-05-20/images/texture-bottom.jpg)
      no-repeat bottom;
  }
</style>
