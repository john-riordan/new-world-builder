<span class="striped-container">
  <span class="striped" />
  <slot />
</span>

<style>
  span {
    display: block;
    position: relative;
  }
  .striped-container > :global(*) {
    position: relative;
  }
  .striped {
    position: absolute;
    inset: 0;
    background: url('/static/striped-black.webp');
    opacity: 0.4;
    pointer-events: none;
  }
</style>
