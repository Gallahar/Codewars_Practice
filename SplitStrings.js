// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
//
//     Examples:
//
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']


const solution=str=>{
    if(!str.length) return []
    if(str.length%2!==0){
        str+='_'
    }
    let prem = ''
    let result = []
    for(let letter of str){
        prem+=letter
        if(prem.length===2){
            result.push(prem)
            prem=''
        }
    }
    return result
}