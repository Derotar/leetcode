function longestCommonPrefix(strs: string[]): string {
  const first = strs[0];
  let prefix = "";
  for (let i = 0; i <= first.length; i++) {
    let a = strs.filter((el) => el.slice(0, i) === first.slice(0, i));
    console.log(`filtered by ${i}:`, a);
    if (a.length === strs.length) prefix = first.slice(0, i);
    else {
      break;
    }
  }
  return prefix;
}

console.log("ans", longestCommonPrefix(["a"]));
