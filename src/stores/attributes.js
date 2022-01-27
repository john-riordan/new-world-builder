import { writable, derived } from 'svelte/store';

import { attributes } from '$data/attributes.js';
import { ATTR_PTS, MIN_ATTR_PTS, PERFECT_ATTR_PTS } from '$lib/constants';

export const perfectGear = writable(false);
export const str = writable(5);
export const dex = writable(5);
export const int = writable(5);
export const foc = writable(5);
export const con = writable(5);
export const attrs = derived(
  [str, dex, int, foc, con, perfectGear],
  ([$str, $dex, $int, $foc, $con, $perfectGear]) => {
    const breakpoint = 50;

    let bonuses = [];

    const strBonus = Array.from(Array(Math.trunc($str / breakpoint)))
      .map((_, index) => {
        return attributes.str.bonuses[index];
      })
      .filter(Boolean);
    const dexBonus = Array.from(Array(Math.trunc($dex / breakpoint)))
      .map((_, index) => {
        return attributes.dex.bonuses[index];
      })
      .filter(Boolean);
    const intBonus = Array.from(Array(Math.trunc($int / breakpoint)))
      .map((_, index) => {
        return attributes.int.bonuses[index];
      })
      .filter(Boolean);
    const focBonus = Array.from(Array(Math.trunc($foc / breakpoint)))
      .map((_, index) => {
        return attributes.foc.bonuses[index];
      })
      .filter(Boolean);
    const conBonus = Array.from(Array(Math.trunc($con / breakpoint)))
      .map((_, index) => {
        return attributes.con.bonuses[index];
      })
      .filter(Boolean);

    if (strBonus.length) bonuses.push(strBonus);
    if (dexBonus.length) bonuses.push(dexBonus);
    if (intBonus.length) bonuses.push(intBonus);
    if (focBonus.length) bonuses.push(focBonus);
    if (conBonus.length) bonuses.push(conBonus);

    const attrKeys = ['str', 'dex', 'int', 'foc', 'con'];
    const orderedAttrs = [$str, $dex, $int, $foc, $con]
      .map((attr, i) => ({ key: attrKeys[i], pts: attr }))
      .sort((z, a) => a.pts - z.pts);

    const ALLOCATE_PTS = $perfectGear ? PERFECT_ATTR_PTS : ATTR_PTS;

    return {
      available: ALLOCATE_PTS - $str - $dex - $int - $foc - $con,
      anyPtsAllocated: $str + $dex + $int + $foc + $con > 25,
      primary: orderedAttrs[0].pts > MIN_ATTR_PTS ? orderedAttrs[0] : null,
      secondary: orderedAttrs[1].pts > MIN_ATTR_PTS ? orderedAttrs[1] : null,
      bonuses: bonuses.filter(Boolean).flat(2)
    };
  }
);
