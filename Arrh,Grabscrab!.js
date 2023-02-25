// Pirates have notorious difficulty with enunciating. They tend to blur all the letters together and scream at people.
//
//     At long last, we need a way to unscramble what these pirates are saying.
//
//     Write a function that will accept a jumble of letters as well as a dictionary, and output a list of words that the pirate might have meant.
//
//     For example:
//
//     grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] )
// Should return ["sport", "ports"].
//
//     Return matches in the same order as in the dictionary. Return an empty array if there are no matches.
//
//     Good luck!

const grabscrab=(anagram, dictionary)=> {
    let anagramObj = anagram.split('').reduce((dic,cur)=>{dic[cur]?dic[cur]++:dic[cur]=1;return dic},{})
    let arrDicObj = dictionary.map(el=>[...el].reduce((dic,cur)=>{dic[cur]?dic[cur]++:dic[cur]=1;return dic},{}))
    return dictionary.filter((word,i)=>word.split('').every(w=>anagramObj[w]===arrDicObj[i][w]))
}