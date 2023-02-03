// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
//
//     For example, a tower with 3 floors looks like this:
//
// [
//     "  *  ",
//     " *** ",
//     "*****"
// ]
// And a tower with 6 floors looks like this:
//
// [
//     "     *     ",
//     "    ***    ",
//     "   *****   ",
//     "  *******  ",
//     " ********* ",
//     "***********"
// ]

function towerBuilder(nFloors) {
    let counter = nFloors+nFloors-1
    let result = []
    let spaces = 0
    while(counter>=1){
        result = [' '.repeat(spaces) + '*'.repeat(counter) + ' '.repeat(spaces),...result]
        counter-=2
        spaces+=1
    }
    return result
}
