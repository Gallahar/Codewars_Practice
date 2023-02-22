// This kata will return a string that represents the difference of two perfect squares as the sum of consecutive odd numbers.
//
//     Specifications:
//
// • The first input minus the second input reveals the exact number of consecutive odd numbers required for the solution - you can check this in the examples below.
//
// • The first input will always be larger than the second.
//
// • All inputs will be valid so no need for error checking.
//
// • Outputs will always be positive.
//
// • Inputs will range between 0 and 200, (inclusive).
//
// • In the returned string there are spaces before and after the plus sign, the minus sign and the equals sign but nowhere else.
//
// Examples:
//
//     squaresToOdd(9, 5) --> "9^2 - 5^2 = 11 + 13 + 15 + 17 = 56"
//
// squaresToOdd(10, 7) --> "10^2 - 7^2 = 15 + 17 + 19 = 51"
//
// squaresToOdd(100, 98) --> "100^2 - 98^2 = 197 + 199 = 396"
//
// squaresToOdd(100, 99) --> "100^2 - 99^2 = 199 = 199"

function squaresToOdd(sqr1, sqr2){
    let sequenceArr = []
    let target = sqr1**2-sqr2**2
    let count = sqr1-sqr2
    for(let i = 0;i<=target;i++){
        if(i%2!==0){
            sequenceArr.push(i)
        }
    }
    let cuttedArr = []
    for(let i=0;i<sequenceArr.length;i++){
        if(sequenceArr.slice(i,i+count).reduce((a,b)=>a+b,0)===target&&sequenceArr.slice(i,i+count).length===count){
            cuttedArr = sequenceArr.slice(i,i+count)
        }
    }

    return `${sqr1}^2 - ${sqr2}^2 = ${cuttedArr.join(' + ')} = ${target}`

}