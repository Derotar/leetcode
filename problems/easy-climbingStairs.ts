const fib = [1, 2];
function climbStairs(n: number): number {
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (fib[n - 1]) return fib[n - 1]
    const last = fib.length + 1;
    console.log(last)
    for (let i = last; i <= n; i++) {
        fib.push(fib[i - 2] + fib[i - 3]);
    }
    return fib[n - 1];
}

// console.log(climbStairs(2));
// console.log(climbStairs(5));
console.log(climbStairs(6));
