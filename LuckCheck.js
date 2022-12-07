// In some countries of former Soviet Union there was a belief about lucky tickets. A transport ticket of any sort was believed to posess luck if sum of digits on the left half of its number was equal to the sum of digits on the right half. Here are examples of such numbers:
//
//     003111    #             3 = 1 + 1 + 1
// 813372    #     8 + 1 + 3 = 3 + 7 + 2
// 17935     #         1 + 7 = 3 + 5  // if the length is odd, you should ignore the middle number when adding the halves.
// 56328116  # 5 + 6 + 3 + 2 = 8 + 1 + 1 + 6
// Such tickets were either eaten after being used or collected for bragging rights.
//
//     Your task is to write a function luck_check(str), which returns true/True if argument is string decimal representation of a lucky ticket number, or false/False for all other numbers. It should throw errors for empty strings or strings which don't represent a decimal number.

const luckCheck=ticket=>{
    let checkedString
    let firstHalf
    let secondHalf
    if(ticket.length){
        checkedString = ticket.replace(/\s+/).split('').reduce((acc,curr)=>acc+Number(curr),0) // here was one tricky test case, where he places one string with space linda like '1234 ' and its stop's me for a long time , till I find out why my solution is not pass ;D
    }
    if(ticket.length%2){
        firstHalf = ticket.slice(0,ticket.length/2).split('').reduce((acc,curr)=>acc+Number(curr),0)
        secondHalf = ticket.slice(ticket.length/2+1).split('').reduce((acc,curr)=>acc+Number(curr),0)
    }else{
        firstHalf = ticket.slice(0,ticket.length/2).split('').reduce((acc,curr)=>acc+Number(curr),0)
        secondHalf = ticket.slice(ticket.length/2).split('').reduce((acc,curr)=>acc+Number(curr),0)
    }
    if(ticket.length===0||isNaN(checkedString)){
        throw  'Error'
    }
    return firstHalf===secondHalf||false
}