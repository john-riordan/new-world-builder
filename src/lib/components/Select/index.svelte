<script>
  export let options = [];
  export let value;
  export let defaultVal = 'Select an option';
</script>

<select bind:value>
  <option value="" selected disabled hidden>{defaultVal}</option>
  {#each options as option}
    <option value={option.value}>{option.text}</option>
  {/each}
</select>

<style>
  select {
    appearance: none;
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.75rem;
    width: 18rem;
    padding: 0 1rem;
    background: var(--brown-dark);
    box-shadow: 0 0 0 1px var(--black), inset 0 -6px 18px hsl(44deg 56% 26% / 0.2);
    border: 2px solid var(--gold);
    cursor: pointer;
    transition: box-shadow var(--transition);
  }
  select:hover,
  select:focus {
    box-shadow: 0 0 0 1px var(--black), inset 0 -10px 22px hsl(44deg 56% 26% / 0.35);
  }

  select:focus {
    outline: 1px solid var(--grey-pale);
  }

  option {
    font-size: 1.25rem;
  }
</style>
