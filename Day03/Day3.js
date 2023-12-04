//part one
const fs = require('fs')

fs.readFile('input.txt', (err, data) => {
	if (err) throw err
    const nums = /[0-9]/
    const notNums = /[^0-9.]/
    const lines = data.toString().split("\n");
    let total = 0
    function hasSymbolAdjecent(i, j){
        return lines[i+1] && lines[i+1][j].match(notNums) ||
        lines[i+1] && lines[j+1] && lines[i+1][j+1].match(notNums) ||
        lines[j+1] && lines[i][j+1].match(notNums) ||
        lines[i-1] && lines[i-1][j].match(notNums) ||
        lines[i-1] && lines[j-1] && lines[i-1][j-1].match(notNums) ||
        lines[j-1] && lines[i][j-1].match(notNums) ||
        lines[i-1] && lines[j+1] && lines[i-1][j+1].match(notNums) ||
        lines[i+1] && lines[j-1] && lines[i+1][j-1].match(notNums)
    }
    function getWholeNumber(i,j){
        let value = lines[i][j]
        let belowJ = j - 1
        let aboveJ = j + 1
        while (belowJ >= 0){
            if (lines[i][belowJ].match(nums)){
                value = lines[i][belowJ] + value
                belowJ--
            } else {
                break
            }
        }
        while (aboveJ < lines[0].length){
            if (lines[i][aboveJ].match(nums)){
                value = value + lines[i][aboveJ]
                aboveJ++
            } else {
                break
            }
        }
        //console.log(value)
        return {number: value, newJ: aboveJ}
    }
    for (let i = 0; i < lines.length; i++){
        for (let j = 0; j < lines[0].length; j++){
            //console.log(lines[i][j])
            if (lines[i][j].match(nums) && hasSymbolAdjecent(i, j)){
                const {number, newJ} = getWholeNumber(i, j)
                j = newJ - 1
                total += Number(number)
            }
        }
    }
    

    //console.log(total)
})

//part 2
fs.readFile('input.txt', (err, data) => {
	if (err) throw err
    const nums = /[0-9]/
    const gear = /\*/
    const lines = data.toString().split("\n");
    let total = 0
    function hasNumAdjecent(i, j){
        const arr = [lines[i+1] && lines[i+1][j].match(nums) ? getWholeNumber(i+1, j) : null,
        lines[i+1] && lines[j+1] && lines[i+1][j+1].match(nums) ? getWholeNumber(i+1, j+1) : null,
        lines[j+1] && lines[i][j+1].match(nums) ? getWholeNumber(i, j+1) : null,
        lines[i-1] && lines[i-1][j].match(nums) ? getWholeNumber(i-1, j) : null,
        lines[i-1] && lines[j-1] && lines[i-1][j-1].match(nums) ? getWholeNumber(i-1, j-1) : null,
        lines[j-1] && lines[i][j-1].match(nums) ? getWholeNumber(i, j-1) : null,
        lines[i-1] && lines[j+1] && lines[i-1][j+1].match(nums) ? getWholeNumber(i-1, j+1) : null,
        lines[i+1] && lines[j-1] && lines[i+1][j-1].match(nums) ? getWholeNumber(i+1, j-1) : null]
        const filtered = arr.filter((v) => v !== null)
        const set = new Set(filtered)
        console.log(set)
        if (set.size == 2){
            const vals = [...set]
            return Number(vals[0]) * Number(vals[1])
        }
        return 0
    }
    function getWholeNumber(i,j){
        let value = lines[i][j]
        let belowJ = j - 1
        let aboveJ = j + 1
        while (belowJ >= 0){
            if (lines[i][belowJ].match(nums)){
                value = lines[i][belowJ] + value
                belowJ--
            } else {
                break
            }
        }
        while (aboveJ < lines[0].length){
            if (lines[i][aboveJ].match(nums)){
                value = value + lines[i][aboveJ]
                aboveJ++
            } else {
                break
            }
        }
        //console.log(value)
        return value
    }
    for (let i = 0; i < lines.length; i++){
        for (let j = 0; j < lines[0].length; j++){
            //console.log(lines[i][j])
            if (lines[i][j].match(gear)){
                total += hasNumAdjecent(i,j)
            }
        }
    }
    

    console.log(total)
})
