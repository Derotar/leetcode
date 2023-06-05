function removeDuplicates(nums: number[]) {
  const set = new Set();
  nums.forEach((el) => set.add(el));
  return Array.from(set);
}

console.log(removeDuplicates([1, 1, 2]));
