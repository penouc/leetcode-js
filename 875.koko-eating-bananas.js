/*
 * @lc app=leetcode id=875 lang=javascript
 *
 * [875] Koko Eating Bananas
 */
function possible(piles, H, k) {
  let time = 0;
  for (let i = 0; i < piles.length; i++) {
    let p = piles[i];
    time += Math.floor((p - 1) / k) + 1;
  }
  return time <= H;
}

/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function(piles, H) {
  let low = 0;
  let high = 1000000000;

  while (low < high) {
    let mid = parseInt((low + high) / 2);
    console.log(low, high);
    if (!possible(piles, H, mid)) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
};
