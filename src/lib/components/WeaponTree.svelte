<script>
  import LineBorder from '$lib/components/LineBorder.svelte';
  import Skill from './WeaponSkill.svelte';

  const size = {
    cols: 5,
    rows: 6
  };

  export let tree;
  export let store;
  export let ptsRemaining;
  export let treeIndex;

  function addSkill(event) {
    if (store) store.addSkill(event.detail.skill);
  }
  function removeSkill(event) {
    if (store) store.removeSkill(event.detail.skill);
  }

  $: maxRow = $store && $store.rows.length ? Math.max(...$store.rows) : 0;
</script>

<div>
  <h2 class="tree-name">{tree.name}</h2>
  <LineBorder>
    <!-- <div class="backdrop-fill" style={`--y-axis-count: ${maxRow};`} /> -->
    <div class="tree-grid" style="--tree-color: var({tree.color})">
      {#each Array(size.rows) as _, row}
        {#each Array(size.cols) as _, col}
          <Skill
            {store}
            {ptsRemaining}
            skillInfo={tree && tree.skills[`${row + 1}_${col + 1}`]}
            row={row + 1}
            col={col + 1}
            tooltipSide={treeIndex === 1 ? 'left' : 'right'}
            on:addSkill={addSkill}
            on:removeSkill={removeSkill}
          />
        {/each}
      {/each}
    </div>
  </LineBorder>
</div>

<style>
  .tree-grid {
    --gap: 0.5rem;

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(6, 1fr);
    gap: var(--gap);
    padding: 2rem;
  }

  .tree-name {
    text-align: center;
  }
</style>
