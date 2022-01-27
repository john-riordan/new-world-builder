import { writable, derived } from 'svelte/store';

import { weps, trees } from '$stores/weapons';

export const shareLink = derived(
  [weps, trees[0][0], trees[0][1], trees[1][0], trees[1][1]],
  ([$weps, $wep0tree0, $wep0tree1, $wep1tree0, $wep1tree1]) => {
    const params = {
      weps: $weps,
      w0t0: $wep0tree0.list,
      w0t1: $wep0tree1.list,
      w1t0: $wep1tree0.list,
      w1t1: $wep1tree1.list
    };

    return new URLSearchParams(params).toString();
  }
);
