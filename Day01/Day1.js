

//part one
const fs = require('fs')

fs.readFile('input.txt', (err, data) => {
	if (err) throw err

    const lines = data.toString().split("\n");

    const digits = /[0-9]/g

    const value = lines.map((line) => {
        const arr = line.match(digits)
        return Number(arr[0] + arr[arr.length - 1])
    }).reduce((a,b) => a + b, 0)

    //console.log(value)
})


//part two
fs.readFile('input.txt', (err, data) => {
	if (err) throw err

    const lines = data.toString().split("\n");

    const digits = /(?=([0-9]|one|two|three|four|five|six|seven|eight|nine))/g

    const value = lines.map((line) => {
        const arr = Array.from(line.matchAll(digits), x => x[1])
        //console.log(arr)
        //console.log(convertToNumber(arr[0]) + convertToNumber(arr[arr.length - 1]))
        return Number(convertToNumber(arr[0]) + convertToNumber(arr[arr.length - 1]))
    }).reduce((a,b) => a + b, 0)

    console.log(value)
})

function convertToNumber(str){
    switch(str) {
        case "one":
            return "1"
        case "two":
            return "2"
        case "three":
            return "3"
        case "four":
            return "4"
        case "five":
            return "5"
        case "six":
            return "6"
        case "seven":
            return "7"
        case "eight":
            return "8"
        case "nine":
            return "9"
        default:
            return str
    }
}