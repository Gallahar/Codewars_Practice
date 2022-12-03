// The marketing team is spending way too much time typing in hashtags.
//     Let's help them with our own Hashtag Generator!
//
// Here's the deal:
//
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
//     If the final result is longer than 140 chars it must return false.
//     If the input or the result is an empty string it must return false.
//     Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

const generateHashtag = str => {
    if(str.replace(/\s+/,'').length===0||str.length===0||str.replace(/\s+/,'').length>=140) return false
    return '#'+str.split(' ').map(el=>el.charAt(0).toUpperCase()+el.slice(1)).join('')
}