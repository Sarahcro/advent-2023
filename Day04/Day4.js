

//part one
const fs = require('fs')

fs.readFile('advent-2023/Day04/input.txt', (err, data) => {
	if (err) throw err

    const lines = data.toString().split("\n");


    const value = lines.map((line) => {
        const card = line.split(": ")[1]
        const nums = card.split(" | ")
        const ours = new Set(nums[1].split(" "))
        const ourWinners = nums[0].split(" ").filter(i => i !== " " && i != "" && ours.has(i))
        if (ourWinners.length == 0) {
            return 0
        }
        return Math.pow(2, ourWinners.length - 1)

    }).reduce((a,b) => a + b, 0)

    //console.log(value)
})


//part two
fs.readFile('advent-2023/Day04/input.txt', (err, data) => {
	if (err) throw err

    const lines = data.toString().split("\n");
    const arr = new Array(lines.length).fill(1)
    const value = lines.forEach((line) => {
        const card = line.split(": ")
        const cardNum = Number(card[0].split(/ +/)[1]) - 1
        const nums = card[1].split(" | ")
        const ours = new Set(nums[1].split(" "))
        const ourWinners = nums[0].split(" ").filter(i => i.match(/[0-9]/) && ours.has(i))
        for (let i = 1; i <= ourWinners.length; i++){
            arr[cardNum + i] = arr[cardNum + i] + arr[cardNum]
        }

    })

    console.log(arr.reduce((a, b) => a + b, 0))
})

