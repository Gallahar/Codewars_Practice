const multiplicationTable = function(size) {
    let outArr = []
    for (let i=1;i<=size;i++){
        let inArr = []
        for (let j=1;j<=size;j++){
            inArr.push(i*j)
        }
        outArr.push(inArr)
    }
    return outArr
}
