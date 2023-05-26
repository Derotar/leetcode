function topKFrequent(nums: number[], k: number): any[] {
  const numMap = new Map<number, number>();
  let cur: number | undefined = undefined;
  for (let num of nums) {
    numMap.set(num, (numMap.get(num) ?? 0) + 1);
  }
  return Array.from(numMap.entries())
    .sort((a: number[], b: number[]) => b[1] - a[1])
    .slice(0, k)
    .map((el) => el[0]);
}

console.log(topKFrequent([1, 1, 2, 2, 3, 4, 5, 1, 1], 2));
