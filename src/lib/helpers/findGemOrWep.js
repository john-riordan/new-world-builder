export function findGemOrWep(list, value) {
  return list.find((item) => item.stat === value);
}
