// Example 1:
// Input: prices = [1,2,2], money = 3
// Output: 0
// Explanation: Purchase the chocolates priced at 1 and 2 units respectively. You will have 3 - 3 = 0 units of money afterwards. Thus, we return 0.
// Example 2:
// Input: prices = [3,2,3], money = 3
// Output: 3
// Explanation: You cannot buy 2 chocolates without going in debt, so we return 3.

var buyChoco = function(prices, money) {
    const sortPrices = prices.sort((a,b)=>a-b)
    const ans = money-sortPrices[0]-sortPrices[1]
    return ans >= 0 ? ans : money};