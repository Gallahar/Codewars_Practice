// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
//
//     Example 1:
// a1 = ["arp", "live", "strong"]
//
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
//
// returns ["arp", "live", "strong"]
//
// Example 2:
// a1 = ["tarp", "mice", "bull"]
//
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
//
// returns []
//
// Notes:
//     Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
//     In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
//     Beware: In some languages r must be without duplicates.
const inArray=(array1,array2)=>array1.filter(str=>array2.some(el=>el.includes(str))).sort()