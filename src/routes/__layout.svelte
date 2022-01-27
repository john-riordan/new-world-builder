<script context="module">
  export const load = async ({ page }) => ({
    props: {
      key: page.path
    }
  });
</script>

<script>
  import { ROUTES } from '$lib/constants';

  import PageTransition from '$lib/components/PageTransition.svelte';
  import BuildOverview from '$lib/components/BuildOverview.svelte';
  import Tabs from '$lib/components/Tabs.svelte';
  import '../app.css';

  export let key;
</script>

<div class="bg bg-bottom" />
<div class="bg bg-top" />

<main>
  <Tabs tabs={ROUTES} />
  <PageTransition refresh={key}>
    <slot />
  </PageTransition>
</main>

<BuildOverview />

<footer class="container">
  <div class="border-top" />
  <p>
    World Forge has no affiliation with <a href="https://www.amazongames.com/en-us"
      >Amazon Games Studios</a
    >
  </p>
</footer>

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
  footer {
    position: relative;
    min-height: 10vh;
    padding: 3rem 0;
    margin-top: 3rem;
  }
  .border-top {
    overflow: hidden;
    width: 100%;
    height: 1px;
    position: absolute;
    top: 0;
    left: 0;
  }
  .border-top::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    width: 1279px;
    height: 1px;
    transform: translateX(-50%);
    background: url(/new-world-sprites.webp) -10px -229px;
    opacity: 0.5;
  }
  p {
    text-align: center;
    color: var(--grey-pale);
  }
</style>
