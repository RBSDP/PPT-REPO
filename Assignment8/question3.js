const minDistance = function(word1, word2) {
    const m = word1.length;
    const n = word2.length;
  
    
    const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  
  
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (word1[i - 1] === word2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }
  
  
    const lcsLength = dp[m][n];
    const deletions = m + n - 2 * lcsLength;
    return deletions;
  };