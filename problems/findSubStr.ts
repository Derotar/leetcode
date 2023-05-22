function strStr(haystack: string, needle: string): number {
  const len = haystack.length - needle.length + 1;
  if (len < 0) return -1;
  for (let i = 0; i < len; i++) {
    if (haystack[i] !== needle[0]) continue;
    if (haystack.slice(i, i + needle.length) === needle) {
      return i;
    }
  }
  return -1;
}

console.log(strStr("egro", "e"));

console.log(strStr("egro", "ro"));

console.log(strStr("egro", "rdo"));
