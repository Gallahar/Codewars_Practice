// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  let result = ''
  let temp = s.toUpperCase()
  for(let i = 0;i<s.length;i++){
    if(i===s.length-1){
      result += temp[i]+temp[i].toLowerCase().repeat(i)
    }else{
    result += temp[i]+temp[i].toLowerCase().repeat(i) + '-'
      }
  }
  return result
}
