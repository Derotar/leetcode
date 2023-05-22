function romanToInt(s: string): number {
  const romanMap = new Map();
  romanMap.set("I", 1);
  romanMap.set("IV", 4);
  romanMap.set("V", 5);
  romanMap.set("IX", 9);
  romanMap.set("X", 10);
  romanMap.set("XL", 40);
  romanMap.set("L", 50);
  romanMap.set("XC", 90);
  romanMap.set("C", 100);

  romanMap.set("CD", 400);
  romanMap.set("D", 500);
  romanMap.set("CM", 900);
  romanMap.set("M", 1000);

  let sum = 0;
  let i = 0;
  while (i < s.length) {
    if (romanMap.get(s[i]) < romanMap.get(s[i + 1])) {
      console.log(
        "concat",
        s[i].concat(s[i + 1]),
        romanMap.get(s[i].concat(s[i + 1]))
      );
      sum += romanMap.get(s[i].concat(s[i + 1]));
      i += 2;
    } else {
      console.log("one", s[i], romanMap.get(s[i]));
      sum += romanMap.get(s[i]);
      i++;
    }
  }
  return sum;
}

console.log(romanToInt("MCMXCIV"));
