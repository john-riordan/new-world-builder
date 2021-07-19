<footer class="container">
  <div class="border-top" />
  <p>
    World Forge has no affiliation with <a href="https://www.amazongames.com/en-us"
      >Amazon Games Studios</a
    >
  </p>
</footer>

<style>
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
    background: url(/new-world-sprites.png) -10px -229px;
    opacity: 0.5;
  }
  p {
    text-align: center;
    color: var(--grey-pale);
  }
</style>
