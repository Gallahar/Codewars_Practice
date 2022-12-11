// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
//
//     Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !


const pigIt=str=>str.split(' ').map(el=>el.match(/[a-z]/ig)?el.slice(1)+el.charAt(0)+'ay':el).join(' ')   // my solution work, but I guess this Kata  was conceived to did it with REGEXP only , so it not the best solution, also the tests is very weak I guess, and its very old Kata for 2022.