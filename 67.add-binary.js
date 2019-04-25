/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 *
 * https://leetcode.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (38.40%)
 * Total Accepted:    291K
 * Total Submissions: 754K
 * Testcase Example:  '"11"\n"1"'
 *
 * Given two binary strings, return their sum (also a binary string).
 * 
 * The input strings are both non-empty and contains only characters 1 or 0.
 * 
 * Example 1:
 * 
 * 
 * Input: a = "11", b = "1"
 * Output: "100"
 * 
 * Example 2:
 * 
 * 
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 * 
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let len = Math.max(a.length, b.length);
    b = b.padStart(len,0);
    a = a.padStart(len,0);

    let temp = 0, num = len - 1;
    let ret = '';
    while(num >= 0 || temp){

        let aValue = +a[num] || 0;
        let bValue = +b[num] || 0;
        let value = temp + aValue + bValue;

        if(value === 3){
            ret = '1' + ret;
            temp = 1;
        }else if(value == 2) {
            ret = '0' + ret;
            temp = 1;
        }else if(value === 0) {
            ret = '0' + ret ;
            temp = 0;
        }else if(value === 1){
            ret = '1' + ret;
            temp = 0;
        }
        
        num--;    
    }

    return ret
};

