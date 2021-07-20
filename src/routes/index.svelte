<script context="module">
  export const prerender = true;
</script>

<script>
  import Button from '$lib/components/Button/index.svelte';
</script>

<svelte:head>
  <title>World Forge | New World Builder</title>
</svelte:head>

<section>
  <div class="title">
    <div class="decoration-top" />
    <h1 class="mask">World Forge</h1>
    <p class="subtitle">A Build Planner for New World</p>
    <div class="decoration-bottom" />
  </div>

  <a href="/weapons" sveltekit:prefetch>
    <Button>Start Building</Button>
  </a>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 85vh;
  }

  section > * {
    position: relative;
  }

  .title {
    position: relative;
    margin-bottom: 10rem;
    line-height: 2;
    padding: 3.5rem 0 3rem;
    text-align: center;
    background: linear-gradient(
      to right,
      transparent,
      hsla(var(--black-hsl) / 0.2) 50%,
      transparent 100%
    );
  }
  .title :global(.decoration-top) {
    top: -46px;
  }
  .title :global(.decoration-bottom) {
    bottom: -46px;
  }

  h1 {
    font-size: 6rem;
    line-height: 1;
    letter-spacing: 2rem;
    margin: 0;
    margin-bottom: 1rem;
  }

  .subtitle {
  }

  section :global(svg) {
    width: 12rem;
  }
  svg {
  }
</style>
