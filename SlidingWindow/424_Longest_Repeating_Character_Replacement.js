/**
 * 424. Longest Repeating Character Replacement
 * You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
 * Return the length of the longest substring containing the same letter you can get after performing the above operations.
 * 
 * Example 1:
 * Input: s = "ABAB", k = 2
 * Output: 4
 * Explanation: Replace the two 'A's with two 'B's or vice versa.
 * 
 * 
 * Example 2:
 * Input: s = "AABABBA", k = 1
 * Output: 4
 * Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
 * The substring "BBBB" has the longest repeating letters, which is 4.
 * There may exists other ways to achieve this answer too.
 */


/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

function characterReplacement(s, k) {
    let begin = 0;
    let frequency = {};
    let maxFrequency = 0;
    let longestSubstr = 0;

    for(let end = 0; end < s.length; end++) {
        const bChar = s[begin];
        const eChar = s[end];
        
        frequency[eChar] ||= 0;
        frequency[eChar] += 1;

        maxFrequency = Math.max(maxFrequency, frequency[eChar]);
        
        if(!((end + 1 - begin - maxFrequency) <= k)) {
            frequency[bChar]--;
            begin++;
        }

        longestSubstr = end + 1 - begin;
    }

    return longestSubstr;

}