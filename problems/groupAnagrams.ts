function groupAnagrams(strs: string[]): string[][] {
  const grouped = new Map<string, string[]>();
  let s = "";
  for (let str of strs) {
    s = str.split("").sort().join("");
    if (grouped.has(s)) {
      grouped.get(s)!.push(str);

      continue;
    } else {
      grouped.set(s, [str]);
    }
  }
  return Array.from(grouped.values());
}

console.log(groupAnagrams(["ab", "ba", "abc", "ab", "cbcd", "cba"]));
