function productExceptSelf(nums: number[]): number[] {
  let arr: number[] = new Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    arr = arr.map((el, j) => {
      console.log(el, nums[i]);
      if (j !== i) return el * nums[i];
    });
  }
  return arr;
}

console.log(productExceptSelf([1, 2, 3, 4]));
