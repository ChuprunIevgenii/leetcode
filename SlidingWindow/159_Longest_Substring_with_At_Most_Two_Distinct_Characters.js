/**
 * Given a string s, return the length of the longest substring that contains at most two distinct characters.
 * 
 * Example 1:
 * Input: s = "eeceba"
 * Output: 3
 * Explanation: The substring is "ece" which its length is 3.
 * 
 * 
 * Example 2:
 * Input: s = "cccaabbbb"
 * Output: 6
 * Explanation: The substring is "aabbb" which its length is 5.
 */


/**
 * @param {string} s
 * @return {number}
 */

// function lengthOfLongestSubstringTwoDistinct(s) {
//     let begin = 0;
//     let frequencyMap = {};
//     let maxLength = 0;
//     let keyLength = 0;

//     for(let end = 0; end < s.length; end++) {

//         if(frequencyMap[s[end]]) {
//             frequencyMap[s[end]] += 1;
//         } else {
//              frequencyMap[s[end]] = 1;
//              keyLength++;
//         }

//         while(s[begin] && keyLength > 2) {
//             frequencyMap[s[begin]] -= 1;

//             if(frequencyMap[s[begin]] <= 0) {
//                 delete frequencyMap[s[begin]];
//                 keyLength--;
//             }

//             begin += 1;

//         }

        
//         maxLength = Math.max(maxLength, end + 1 - begin);
//     }

//     return maxLength;
// };

function lengthOfLongestSubstringTwoDistinct(s) {
    let begin = 0;
    let map = new Map();
    let maxLength = 0;

    for(let end = 0; end < s.length; end++) {

        map.set(s[end], end);

        if(map.size > 2) {
            let minIndex = Math.min(...map.values());

            map.delete(s[minIndex]);

            begin = minIndex + 1;

        }

        
        maxLength = Math.max(maxLength, end + 1 - begin);
    }

    return maxLength;
};


console.log(lengthOfLongestSubstringTwoDistinct("abbb"));