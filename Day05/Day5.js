

//part one
const fs = require('fs')

fs.readFile('Day05/input.txt', (err, data) => {
	if (err) throw err

    const lines = data.toString().split("\n\n");

    let seeds = lines[0].split(": ")[1].split(" ")

    for (let i = 1; i < 8; i++){
        for (let j = 0; j < seeds.length; j++){
            seeds[j] = sourceToDestination(Number(seeds[j]), lines[i])
        }
    }
    //console.log(seeds)
    //console.log(seeds.reduce((a,b) => a < b ? a : b, 100000000000))
})


function sourceToDestination(source, destinationMap){
    const lines = destinationMap.split(":\n")[1].split("\n")
    //console.log(lines)
    //console.log(source)
    let val = source
    lines.forEach((line) => {
        const vals = line.split(" ")
        if (source < (Number(vals[1]) + Number(vals[2])) && source >= Number(vals[1])){
            const difference = source - Number(vals[1])
            val = Number(vals[0]) + difference
            return
        }
    })
    return val
}

//part two
fs.readFile('Day05/input.txt', (err, data) => {
	if (err) throw err

    const lines = data.toString().split("\n\n");
    let seeds = lines[0].split(": ")[1].split(" ")
    let minValue = 10000000000000
    for (let j = 0; j < seeds.length; j+=2){
        const start = Number(seeds[j])
        const end = start + Number(seeds[j+1])
        let current = start
        let value = current
        while (current < end) {
                for (let i = 1; i < 8; i++){
                    value = sourceToDestination(value, lines[i])
                }
                if (value < minValue){
                    minValue = value
                }
            current++
            value = current
        }
    }
    //console.log(seeds)
    console.log(minValue)
})

