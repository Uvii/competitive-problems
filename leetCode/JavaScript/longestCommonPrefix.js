/**
 * leet code problem No : 14. Longest Common Prefix
 * Concept              : sorting Strings
 * Problem Statement    : https://leetcode.com/problems/longest-common-prefix/
 */

let longestCommonPrefix = function(strs) {
    if (!strs.length)
        return "";
    else {
        var tempStr = strs[0], prefix;
        for (let i=1; i<strs.length; i++) {
            let curStr = strs[i], minLeng = Math.min(tempStr.length, curStr.length);
            for (let j=0; j<minLeng; j++) {
                if (tempStr[j] === curStr[j]){
                    prefix = tempStr.substr(0, j);
                    continue;
                } else {
                    prefix = tempStr.substr(0, j);
                    break;
                }
            }
        }
        return prefix;
    }
};

let input = ["ab", "a"]

console.log(longestCommonPrefix(input))
