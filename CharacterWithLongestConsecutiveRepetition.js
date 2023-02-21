// For a given string s find the character c (or C) with longest consecutive repetition and return:
//
// [c, l]
// where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.
//
//     For empty string return:
//
// ["", 0]

function longestRepetition(s) {
    let result = []
    let count  = 0
    for(let i =0;i<s.length;i++){
        if(s[i]!==s[i+1]){
            result.push([s[i],count+1])
            count = 0
        }else{
            count++
        }
    }
    return result.sort((a,b)=>b[1]-a[1])[0]||['',0]
}