var groupAnagrams = function(strs) {
    const map = new Map();

    for (let i = 0; i < strs.length; i++) {
        let sortedStr = strs[i].split('').sort().join(''); // sort the current string in the array
        if (map.has(sortedStr)) {
            // if it exists in the map
            // push the string from the original array to the sortedStr's array in the map
            map.get(sortedStr).push(strs[i]);
        } else {
            // if it doesn't exist in the map
            // create the key in the map for sortedStr and push the current string from the original array
            map.set(sortedStr, [strs[i]]);
        }
    }

    // return an array containing all the arrays from the map values
    return Array.from(map.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
