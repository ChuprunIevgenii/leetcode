/**
 * 3. Longest Substring Without Repeating Character
 * Given a string s, find the length of the longest substring
 * without repeating characters.
 * 
 * Example 1:
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 * 
 * 
 * Example 2:
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * 
 * 
 * Example 3:
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */



/**
 * @param {string} s
 * @return {number}
 */

function lengthOfLongestSubstring(s) {
    let begin = 0;
    let charsPosition = new Set();
    let maxUniqueString = 0;


    for(let end = 0; end < s.length; end++) {
        const eChar = s[end];
        
        while(charsPosition.has(eChar)) {
            charsPosition.delete(s[begin]);
            begin++;
        }

        charsPosition.add(eChar);
    
        maxUniqueString = Math.max(maxUniqueString, end + 1 - begin);
    }

    return maxUniqueString;
};