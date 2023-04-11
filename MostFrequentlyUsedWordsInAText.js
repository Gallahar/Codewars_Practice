// Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.
//
//     Assumptions:
// A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
// Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
// Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
// Matches should be case-insensitive, and the words in the result should be lowercased.
//     Ties may be broken arbitrarily.
//     If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.
//     Examples:
// top_3_words("In a village of La Mancha, the name of which I have no desire to call to
// mind, there lived not long since one of those gentlemen that keep a lance
// in the lance-rack, an old buckler, a lean hack, and a greyhound for
//     coursing. An olla of rather more beef than mutton, a salad on most
// nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
// on Sundays, made away with three-quarters of his income.")
// # => ["a", "of", "on"]
//
// top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
// # => ["e", "ddd", "aa"]
//
// top_3_words("  //wont won't won't")
// # => ["won't", "wont"]

function topThreeWords(text) {   // объявляю функцию topThreeWords, которая принимает в себя один параметр(text) текст который мы будем парсить.
    let arr = text.toLowerCase().replace(/[^a-z ']/gi,'').split(' ').filter(el=>el!=='') // создаю массив, сначала преобразую весь текст в один регистр, чтобы исключить проблемы аля Привет!==привет, методом реплейс в который передаю регулярное выражение(удали все кроме букв A-Z пробела и апострофа) выкидываю все знаки которые не относятся к словам, все знаки кроме пробелов и апострофоф '(в русском тексте апостроф тоже не нужен), после методом сплит разбиваю текст на массив(разбиваю по пробелам, т.е. таким образом у меня каждый элемент в массив = слово, а пробелы исключаются) дальше фильтрую массив на возможные "пустые" элементы.
    let obj = {} // создаю пустой промежуточный объект.
    let result = [] //  создаю массив в который буду пушить(добавлять элементы) уже конечный результат.
    for(let w of arr){ // прохожусь итерирующим циклом по массиву (тебе полюбому нужно будет про циклы прочитать)
        obj[w]?obj[w]++:obj[w]=1 // проверяю существует ли поле в объекте? если true (существует) то значение у поля увеличиваю на 1, в противном случае создаю такое поле в объекте со значением 1.
    }
    let finalObj = Object.entries(obj).sort((a,b)=>b[1]-a[1])  // создаю переменную в которую присваиваю значение массива, методом объекта entries который проходится по объекту и возвращает массив пар ключ-значение., далее вызываю метод массива sort, которым сортирую элементы по убыванию, обрати внимание  - я сортирую по количеству предметов, образаясь ко второму элементу в подмассиве(напоминаю entries создал массив с элементами ключ/значение)
    for(let i=0;i<finalObj.length;i++){  // прохожусь  циклом  пр финальному отсортированному массиву, и забираю только первое значение в элементе(собственно наш ключ === слово, как помнишь по второму элементу выше я сортировал это все дело)
        result.push(finalObj[i][0])
        if(result.length===3) return result  // если мы уже сложили 3 элемента в наш результирующий массив, выходим из цикла и возвращаем финальное значение, три самых повторяющихся слова по убыванию, если у нас допустим три слова повторялись по 3 раза возвращаем их.
    }
    if(result.length&&!result[0].match(/[a-z]/g)) return [] // не валидная проверка, делал на отъебись, грубо говоря если нам приходит пустой текст возвращаем пустой массив, по хорошему это нужно писать в самом начале.
    return result // возвращаем результат если цикл был полностью пройден.(сам уже не помню нахуя, выглядит как лютая дичь).
}
