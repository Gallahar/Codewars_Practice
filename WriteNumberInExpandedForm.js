// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:
//
//     expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// function expandedForm(num) {
//   const iterable = num+''
//   const handler = []
//   for(let i =0;i<iterable.length;i++)
//   if(iterable[i]!=="0"){
//     handler.push(iterable[i]+'0'.repeat(iterable.length-i-1))
//   }
//   return handler.join(' + ')

// }

const expandedForm = num =>[...num+''].map((n,i,arr)=>n!=="0"?n+'0'.repeat(arr.length-i-1):'').filter(el=>el!=='').join(' + ')  // want to use reduce, but i won't slice the final answer, can't set the initial value to zero element of array.