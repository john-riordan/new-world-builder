<script>
  export let text;
  export let x;
  export let y;

  const offset = 5;
</script>

<div
  style="
    top: {y + offset}px;
    left: {x + offset}px;
  "
>
  {text}
</div>

<style>
  div {
    position: absolute;
    background: var(--brown-dark);
    max-width: 40ch;
    min-width: 20ch;
    padding: 1.25rem;
    border: 2px solid var(--brown);
    box-shadow: 0 10px 20px var(--black);
    pointer-events: none;
  }
</style>
