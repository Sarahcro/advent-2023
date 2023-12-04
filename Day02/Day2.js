//part one
const fs = require('fs')

fs.readFile('Day02/input.txt', (err, data) => {
	if (err) throw err

    const lines = data.toString().split("\n");

    const value = lines.map((line) => {
        const colonSplit = line.split(": ")
        const id = colonSplit[0].split(' ')[1]
        const sets = colonSplit[1].split("; ")
        const dontWork = sets.filter((set) => {
            const numColor = set.split(", ")
            const impossible = numColor.filter((val) => {
                const color = val.split(" ")[1]
                const num = val.split(" ")[0]
                if (color === "blue" && num > 14 || color === "red" && num > 12 || color === "green" && num > 13){
                    return true
                }
                return false
            })
            return impossible.length > 0
        })
        if (dontWork.length === 0){
            return Number(id)
        } else {
            return 0
        }
    }).reduce((a, b) => a+b, 0)

    //console.log(value)
})

//part two

fs.readFile('Day02/input.txt', (err, data) => {
	if (err) throw err

    const lines = data.toString().split("\n");

    const value = lines.map((line) => {
        const colonSplit = line.split(": ")
        const id = colonSplit[0].split(' ')[1]
        const sets = colonSplit[1].split("; ")
        let maxBlue = 0
        let maxRed = 0
        let maxGreen = 0
        sets.forEach((set) => {
            const numColor = set.split(", ")
            numColor.forEach((val) => {
                const color = val.split(" ")[1]
                const num = Number(val.split(" ")[0])
                if (color === "blue" && num > maxBlue){
                    maxBlue = num
                }
                if (color === "green" && num > maxGreen){
                    maxGreen = num
                }
                if (color === "red" && num > maxRed){
                    maxRed = num
                }
            })
        })
        return maxBlue * maxRed * maxGreen
    }).reduce((a, b) => a+b, 0)

    console.log(value)
})