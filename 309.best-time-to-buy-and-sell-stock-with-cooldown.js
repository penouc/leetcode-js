/*
 * @lc app=leetcode id=309 lang=javascript
 *
 * [309] Best Time to Buy and Sell Stock with Cooldown
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let sell = 0;
  let preSell = 0;
  let buy = Number.MIN_SAFE_INTEGER;
  let preBuy;

  for (let price of prices) {
    preBuy = buy;
    buy = Math.max(preSell - price, preBuy);
    preSell = sell;
    sell = Math.max(preBuy + price, preSell);
  }

  return sell;
};
