<script>
  export let abilityInfo;
  export let side = 'right';
  export let offset = 0;
  export let x;
  export let y;

  const width = '25.5rem';
</script>

<div
  class="container"
  class:left={side === 'left'}
  class:right={side === 'right'}
  class:top={side === 'top'}
  style="
    --offset: {offset}px;
    --y-offset: {y}px;
    --x-offset: {x}px;
    --width: {width};
    --border-color: var(--brown);
    --bg-color: var(--black);
  "
>
  {#if abilityInfo.type === 'ultimate'}
    <p class="ult-requirement">Requires at least 10 points and a point in previous row.</p>
  {/if}
  <h2 class="ability-name">{abilityInfo.name}</h2>
  <div class="middle">
    <div class="image">
      <img src={abilityInfo.img} alt={abilityInfo.name} />
    </div>
    <div class="cooldown">
      {#if abilityInfo.cooldown}
        <p>Cooldown</p>
        <p class="cooldown-value">{abilityInfo.cooldown}s</p>
      {/if}
    </div>
  </div>
  <p>{@html abilityInfo.description}</p>
  {#if abilityInfo.mana}
    <footer>Mana cost: {abilityInfo.mana}</footer>
  {/if}
</div>

<style>
  @keyframes fadeInRight {
    from {
      opacity: 0;
      left: calc(var(--x-offset) - var(--width) - var(--buffer) - 4px);
    }
  }
  @keyframes fadeInLeft {
    from {
      opacity: 0;
      left: calc(var(--x-offset) + var(--offset) + var(--buffer) + 4px);
    }
  }

  .container {
    --buffer: 1.25rem;

    position: fixed;
    background: var(--bg-color);
    line-height: 1.5;
    width: var(--width, 25rem);
    padding: 1.25rem;
    border: 2px solid var(--border-color);
    color: var(--grey-pale);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0), 0 5px 10px rgba(0, 0, 0, 0),
      0 12px 25px rgba(0, 0, 0, 0.05), 0 40px 85px rgba(0, 0, 0, 0.7);

    pointer-events: none;
    z-index: 10;

    top: calc(var(--y-offset) - calc(var(--buffer) * 2));
  }
  .container.left {
    left: calc(var(--x-offset) - var(--width) - var(--buffer));
    animation: fadeInRight 0.2s ease-in-out;
  }
  .container.right {
    left: calc(var(--x-offset) + var(--offset) + var(--buffer));
    animation: fadeInLeft 0.2s ease-in-out;
  }
  .container.top {
    left: calc(var(--x-offset));
    top: var(--y-offset);
    transform: translateY(calc(-100% - var(--buffer))) translateX(calc(-50% + var(--offset) / 1.5));
  }

  .container::before {
    content: '';
    position: absolute;
    height: 20px;
    width: 20px;
    background: var(--bg-color);
    border: 2px solid var(--border-color);
    top: 55px;
    transform: rotate(45deg);
    z-index: -1;
  }
  .container.right::before {
    clip-path: polygon(0 0, 0 100%, 100% 100%);
    left: -12px;
  }
  .container.left::before {
    clip-path: polygon(0 0, 100% 0, 100% 100%);
    right: -12px;
  }
  .container.top::before {
    clip-path: polygon(0 0, 100% 0, 100% 100%);
    bottom: -12px;
    top: unset;
    right: calc(50%);
    transform: rotate(135deg);
  }

  .ult-requirement {
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
    margin-bottom: 0.5rem;
    color: hsl(11deg 88% 35%);
    font-weight: 700;
    background: hsla(11deg 88% 35% / 0.15);
  }

  .ability-name {
    margin: 0;
    color: var(--white);
    font-size: 1.35rem;
  }
  .middle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0 1.5rem;
  }
  .middle > div {
    flex: 1;
  }
  .middle .image {
    padding-left: 0.5rem;
  }
  .middle img {
    display: block;
    width: 5rem;
    height: 5rem;
  }
  .cooldown-value {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--white);
  }

  p {
    font-size: 1.125rem;
  }

  p > :global(b) {
    font-weight: 700;
    color: var(--white);
  }

  footer {
    margin-top: 1rem;
  }
</style>
