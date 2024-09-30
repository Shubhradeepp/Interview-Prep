// Given an integer n, return the count of all numbers with unique digits, x, where 0 <= x < 10n.

 

// Example 1:

// Input: n = 2
// Output: 91
// Explanation: The answer should be the total numbers in the range of 0 ≤ x < 100, excluding 11,22,33,44,55,66,77,88,99
// Example 2:

// Input: n = 0
// Output: 1
 

  int countNumbersWithUniqueDigits(int n) {
     if (n == 0) return 1;
     vector<int> dp(n + 1, 0);
    dp[0] = 1;  
    dp[1] = 10;
      int availableDigits = 9;  // 9 choices for the first digit (1-9)
      int currentProduct = 9;
       for (int i = 2; i <= n; ++i) {
            currentProduct *= availableDigits;  // Calculate product for current digit position
            dp[i] = dp[i-1] + currentProduct;   // Add result for this length to previous lengths
            availableDigits--;                  // Reduce available digits for next position
        }
        
        return dp[n];
    }