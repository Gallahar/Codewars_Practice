// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// Note: there are no special characters used, only letters and spaces

// Examples

// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'

function decipherThis(str) {
const characters = str.split(' ').map(w=>String.fromCharCode(w.split``.filter(el=>!isNaN(+el)).join('')))
const pureStr = str.replace(/[0-9]/g,'').split(' ')
const decodedArr = []
for(let i = 0;i<pureStr.length;i++){
  decodedArr.push(pureStr[i].length<=2?pureStr[i].split``.reverse().join("")
              :pureStr[i][pureStr[i].length-1]+pureStr[i].substring(1,pureStr[i].length-1)+pureStr[i][0])
}
return characters.map((c,i)=>c+decodedArr[i]).join(' ')
}; 