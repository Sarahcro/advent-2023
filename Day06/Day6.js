

//part one
const fs = require('fs')

fs.readFile('Day06/input.txt', (err, data) => {
	if (err) throw err

    const lines = data.toString().split("\n");

    let times = lines[0].split(/: */)[1].split(/ +/)
    let distances = lines[1].split(/: */)[1].split(/ +/)
    //console.log(times)
    //console.log(distances)
    let waysToWin = 1
    for (let i = 0; i < times.length; i++){
        const time = times[i]
        //console.log(time)
        let x = Math.ceil(Number(time) / 2)
        let y = Math.floor(Number(time) / 2)
        let count = 0
        //console.log(x)
        while (x * y > Number(distances[i])){
            //console.log(x * y)
            count++
            x++
            y--
        }
        count = count * 2
        if (time % 2 == 0){
            count--
        }
        waysToWin = waysToWin * count
    }
    //console.log(waysToWin)
    //console.log(seeds.reduce((a,b) => a < b ? a : b, 100000000000))
})

//part two

fs.readFile('Day06/input.txt', (err, data) => {
	if (err) throw err

    const lines = data.toString().split("\n");

    let time = lines[0].split(/: */)[1].replace(/ +/g, '')
    let distance = lines[1].split(/: */)[1].replace(/ +/g, '')
    console.log(time)
    console.log(distance)
    let waysToWin = 1
    let x = Math.ceil(Number(time) / 2)
    let y = Math.floor(Number(time) / 2)
    let count = 0
    //console.log(x)
    while (x * y > Number(distance)){
        //console.log(x * y)
        count++
        x++
        y--
    }
    count = count * 2
    if (time % 2 == 0){
        count--
    }
    waysToWin = waysToWin * count

    console.log(waysToWin)
    //console.log(seeds.reduce((a,b) => a < b ? a : b, 100000000000))
})

