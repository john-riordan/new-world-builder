<script>
  export let size = 'major';
  export let onclick;
  export let disabled = false;
</script>

<span class="button" data-size={size} on:click={onclick && onclick} class:disabled>
  <span class="border">
    <span class="btn">
      <span class="btn-inner">
        <span><slot /></span>
      </span>
    </span>
  </span>
</span>

<style>
  .button {
    display: inline-block;
    cursor: pointer;
  }
  .button .btn {
    display: block;
    padding: 2px;
    background: linear-gradient(to bottom, hsla(210, 46%, 33%, 1), hsla(190, 45%, 58%, 1));
    transition: filter var(--transition);
  }
  .button .btn .btn-inner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--text-script);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-shadow: 2px 2px black;
    background: linear-gradient(to bottom, hsla(225, 51%, 15%, 1), hsla(221, 73%, 26%, 1));
  }

  /* LARGE BUTTON */
  .button[data-size='major'] .btn .btn-inner {
    font-size: 1.75rem;
    height: 4rem;
    padding: 0.2rem 8.25rem 0;
  }

  /* SMALL BUTTON */
  .button[data-size='minor'] .btn .btn-inner {
    height: 2.5rem;
    padding: 0.2rem 1.75rem 0;
  }

  .button .btn-inner > * {
    position: relative;
  }
  .button:hover .btn {
    filter: brightness(1.5);
  }
  .button .border {
    display: block;
    border: 2px solid hsl(197deg 9% 33%);
  }

  .button[data-size='major'] .border {
    padding: 0.5rem;
  }
  .button[data-size='minor'] .border {
    padding: 0.25rem;
  }

  .button:hover .btn {
    box-shadow: 0 0 17px hsl(206deg 97% 50% / 56%);
  }
  .button:hover .btn .btn-inner {
    box-shadow: inset 0 0 20px hsl(180deg 81% 69% / 20%);
  }

  .button:hover .border {
    border-color: hsl(206deg 34% 40%);
  }

  /* DISABLED STATE */
  .button.disabled .border {
    border-color: hsl(197deg 3% 33%);
  }
  .button.disabled .btn {
    background: linear-gradient(to bottom, hsla(210, 17%, 33%, 1), hsla(190, 5%, 58%, 1));
  }
  .button.disabled .btn-inner {
    background: linear-gradient(to bottom, hsla(225, 25%, 15%, 1), hsla(221, 15%, 26%, 1));
  }
  .button.disabled:hover .btn {
    box-shadow: 0 0 17px hsl(206deg 97% 20% / 56%);
  }
  .button.disabled :hover .btn .btn-inner {
    box-shadow: inset 0 0 20px hsl(180deg 20% 69% / 20%);
  }
</style>
