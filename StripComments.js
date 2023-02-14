// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.
//
//     Example:
//
// Given an input string of:
//
//     apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:
//
//     apples, pears
// grapes
// bananas
// The code would be called like so:
//
//     var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"

function solution(input, markers) {
    let comments =  input.split("\n")
    let result = []
    for(let i=0;i<comments.length;i++){
        if(comments[i].includes(markers[0])){
            result.push(comments[i].slice(0,comments[i].indexOf(markers[0])).trimRight())
        }else if(comments[i].includes(markers[1])){
            result.push(comments[i].slice(0,comments[i].indexOf(markers[1])).trimRight())
        }else{
            result.push(comments[i])
        }
    }
    return result.join("\n")
};