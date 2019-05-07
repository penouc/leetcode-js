/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  nums = Array.from(new Set(nums));
  let n = nums.length;
  let left = 0;
  let right = n - 1;

  while (left < right) {
    let mid = parseInt((left + right) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  let rot = left;
  console.log(rot);
  left = 0;
  right = n - 1;

  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    let realmid = (mid + rot) % n;
    if (nums[realmid] === target) {
      return true;
    } else if (nums[realmid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
};
