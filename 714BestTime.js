var maxProfit = function (prices, fee) {
  prices.sort();
  let profit = 0;
  let buy = 0;
  let sell = prices.length - 1;
  while (buy < sell) {
    let diff = prices[sell] - prices[buy];
    if (diff > fee) {
      profit += diff - fee;
      buy++;
      sell--;
    } else break;

    console.log("profit", profit, "diff", diff);
  }
  return profit;
};

let prices = [1, 3, 2, 8, 4, 9];
let fee = 2;

console.log(maxProfit(prices, fee));
