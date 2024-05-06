/**
 * 763. Partition Labels
 * 
 * You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.
 * 
 * Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.
 * 
 * Return a list of integers representing the size of these parts.
 * 
 * Example 1:
 * Input: s = "ababcbacadefegdehijhklij"
 * Output: [9,7,8]
 * Explanation:
 * The partition is "ababcbaca", "defegde", "hijhklij".
 * This is a partition so that each letter appears in at most one part.
 * A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
 * 
 * Example 2:
 * Input: s = "eccbbbbdec"
 * Output: [10]
 */

/**
 * @param {string} s
 * @return {number[]}
 */

function partitionLabels(s) {
    let result = [];
    let frequencyMap = {};

    for (let i = 0; i < s.length; i++) {
        frequencyMap[s[i]] = (frequencyMap[s[i]] || 0) + 1;
    }

    let begin = 0;
    let set = new Set();

    for (let end = 0; end < s.length; end++) {

        if(frequencyMap[s[end]]) {
            frequencyMap[s[end]] -= 1;
            frequencyMap[s[end]] ? set.add(s[end]) : set.delete(s[end]);
        } 


        if(!frequencyMap[s[end]] && !set.size) {
            result.push(end + 1 - begin);

            begin = end + 1;
        }
    }

    return result;
};


//Last indices Solution

function partitionLabels1(s) {
    let lastIndicies = {};

    for (let i = s.length - 1; i >= 0; i--) {

        if(!lastIndicies[s[i]]) {
            lastIndicies[s[i]] = i;
        }
    }


    let result = [];
    let begin = 0;
    let end = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const lastIndex = lastIndicies[char];
        console.log(end);
        if(lastIndex > end) end = lastIndex;

        if(i === end) {
            result.push(end + 1 - begin);
            begin = i + 1;
        }
    }

    return result;
};


console.log(partitionLabels1("eccbbbbdec"));