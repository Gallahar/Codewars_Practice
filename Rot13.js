// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
//
//     Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message){
    const alphabet = ' abcdefghijklmnopqrstuvwxyz'
    let result = ''
    for(let w of message){
        if(alphabet.includes(w.toLowerCase())&&w!==' '){
            const characterNum = alphabet.indexOf(w.toLowerCase())+13
            result+=w===w.toUpperCase()?alphabet[characterNum>26?characterNum-26:characterNum].toUpperCase():alphabet[characterNum>26?characterNum-26:characterNum].toLowerCase()
        } else {
            result+=w
        }
    }
    return result
}