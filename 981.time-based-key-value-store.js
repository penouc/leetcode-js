/*
 * @lc app=leetcode id=981 lang=javascript
 *
 * [981] Time Based Key-Value Store
 */
/**
 * Initialize your data structure here.
 */
/*
 * @lc app=leetcode id=981 lang=javascript
 *
 * [981] Time Based Key-Value Store
 */
/**
 * Initialize your data structure here.
 */
class TimeMap {
  constructor() {
    this.data = {};
  }

  set(key, value, timestamp) {
    if (this.data[key]) {
      let arr = this.data[key];
      arr[timestamp] = value;
    } else {
      let arr = [];
      arr[timestamp] = value;
      this.data[key] = arr;
    }
  }

  get(key, timestamp) {
    if (this.data.hasOwnProperty(key)) {
      let arr = this.data[key];

      let i = timestamp;

      // just find the smaller index from the current timestamp
      // worse case is O(timestamp) look up time.
      while (i > 0) {
        if (typeof arr[i] !== "undefined") {
          return arr[i];
        }
        i--;
      }
    }
    return "";
  }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
