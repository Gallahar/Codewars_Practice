// Introduction
// You need to write a function that will format a phone number by a template.
//
//     Task
// You're given number and string.
//
// If there are more digits than needed, they should be ignored
//
// if there are less digits than needed, should return Invalid phone number
//
// Examples
// (79052479075, "+# ### ### ## ##") => "+7 905 247 90 75"
// (79052479075, "+# (###) ### ##-##") => "+7 (905) 247 90-75"
// (79052479075, "+# ### ### ## ##") => "+7 905 247 90 75"
// (81237068908090, "+## ### ### ## ##") => "+81 237 068 90 80"
// (8123706890, "+## ### ### ##-##") => "Invalid phone number"
// (911, "###") => "911"
// (112, "+ () -") => "+ () -"
//
function formatNumber(number, template) {
    if(![...template].some(el=>el==="#")) return template
    const numbers = number+""
    let currentIndex=0
    let result = ''
    for(let n of template){
        if(n==="#"){
            result+=numbers[currentIndex]
            currentIndex++
            continue
        }
        result+=n
    }
    return result.length===template.length?result:"Invalid phone number"
}
