// The number 898989 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number: 89=81+9289 = 8^1 + 9^289=8
// 1
// +9
// 2
//
//
// The next number in having this property is 135135135:
//
// See this property again: 135=11+32+53135 = 1^1 + 3^2 + 5^3135=1
// 1
// +3
// 2
// +5
// 3
//
//
// Task
// We need a function to collect these numbers, that may receive two integers aaa, bbb that defines the range [a,b][a, b][a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.
//
//     Examples
// Let's see some cases (input -> output):
//
// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// If there are no numbers of this kind in the range [a,b][a, b][a,b] the function should output an empty list.
//
// 90, 100 --> []
// Enjoy it!!

function sumDigPow(a, b) {
    let result =[]
    for(let i = a;i<b;i++){
        if(i===[...i+""].reduce((acc,curr,i)=>acc+curr**(i+1),0)){
            result.push(i)
        }
    }
    return result
}