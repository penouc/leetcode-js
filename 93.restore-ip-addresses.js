/*
 * @lc app=leetcode id=93 lang=javascript
 *
 * [93] Restore IP Addresses
 *
 * https://leetcode.com/problems/restore-ip-addresses/description/
 *
 * algorithms
 * Medium (31.11%)
 * Total Accepted:    135.2K
 * Total Submissions: 434.6K
 * Testcase Example:  '"25525511135"'
 *
 * Given a string containing only digits, restore it by returning all possible
 * valid IP address combinations.
 *
 * Example:
 *
 *
 * Input: "25525511135"
 * Output: ["255.255.11.135", "255.255.111.35"]
 *
 *
 */

function restoreIp(ret, s, index, count, temp) {
  if (count > 4) return;
  if (count === 4 && index === s.length) {
    ret.push(temp);
  }

  for (let i = 1; i < 4; i++) {
    if (index + i > s.length) break;
    ss = s.substring(index, index + i);
    if (
      (ss.startsWith("0") && ss.length > 1) ||
      (parseInt(ss) >= 256 && i === 3)
    ) {
      continue;
    }
    restoreIp(
      ret,
      s,
      index + i,
      count + 1,
      temp + ss + (count === 3 ? "" : ".")
    );
  }
}

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  let ret = [];

  restoreIp(ret, s, 0, 0, "");

  return ret;
};
