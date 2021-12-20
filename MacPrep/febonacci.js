let dp = Array(51).fill(-1)

let n = 5;
function feb(n) {
//   if (n <= 0) return 0;
if(dp[n] != -1)return dp[n];
  if (n <= 1) return n;
  return dp[n] =  feb(n - 1) + feb(n - 2);
}
console.log(feb(7));
