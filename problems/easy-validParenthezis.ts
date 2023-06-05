function isValid(s: string): boolean {
  let round = 0;
  let curvy = 0;
  let square = 0;
  let currentLevel = 0;
  const openBrackets: string[] = [];
  const bracketsMap = new Map();
  bracketsMap.set("}", "{");
  bracketsMap.set("]", "[");
  bracketsMap.set(")", "(");

  for (let sym of s) {
    if (["{", "(", "["].includes(sym)) {
      openBrackets.push(sym);
    } else {
      if (openBrackets.pop() != bracketsMap.get(sym)) {
        return false;
      }
    }
  }
  if (openBrackets.length) return false;
  return true;
}

console.log(`()[]{}`, isValid(`()[]{}`));
console.log(`()[]{`, isValid(`()[]{`));
console.log("(())", isValid("(())"));
console.log("(([{}()]))", isValid("(([{}()]))"));
console.log("(]", isValid("(]"));
console.log("([)]", isValid("([)]"));
console.log("]", isValid("]"));
