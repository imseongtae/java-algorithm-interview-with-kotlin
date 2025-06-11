// 121. Best Time to Buy and Sell Stock
function maxProfit(prices: number[]): number {
  let minPrice: number = Infinity;
  let maxProfit: number = 0;

  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }

  return maxProfit;
}

// Example 1:
// Input:
// const prices = [7, 1, 5, 3, 6, 4];
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// ==========================
// Example 2:
const prices = [2, 4, 1];
// Output: 2

console.log('maxProfit(prices):', maxProfit(prices));
