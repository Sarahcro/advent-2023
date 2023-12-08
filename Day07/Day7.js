

//part one
const fs = require('fs')

fs.readFile('Day07/practice.txt', (err, data) => {
	if (err) throw err

    const lines = data.toString().split("\n");
    const sorted = lines.sort(compareFn)
    //console.log(sorted)
    let winnings = 0
    for (let i = 0; i < sorted.length; i++){
        const bet = sorted[i].split(" ")[1]
        winnings += Number(bet) * (i + 1)
    }
    //console.log(winnings)
})

function compareFn(a, b) {
    const aCards = a.split(" ")[0].split("")
    const bCards = b.split(" ")[0].split("")
    const handA = scoreHand(aCards)
    const handB = scoreHand(bCards)
    if (handA > handB){
        return 1
    }
    if (handA < handB){
        return -1
    }
    if (handA === handB){
        for (let i = 0; i < aCards.length; i++){
            const aVal = convertToNumber(aCards[i])
            const bVal = convertToNumber(bCards[i])
            //console.log(aCards[i] + " " + aVal)
            //console.log(bCards[i] + " " + bVal)
            if (aVal > bVal){
                return 1
            }
            if (bVal > aVal){
                return -1
            }
        }
        return 0
    }

}

function convertToNumber(card){
    switch(card){
        case "A":
            return 14
        case "K":
            return 13
        case "Q":
            return 12
        case "J":
            return 11
        case "T":
            return 10
        default:
            return Number(card)
    }
    
}

function scoreHand(hand) {
    const sorted = hand.toSorted()
    if (sorted[0] === sorted[4]){
        return 6
    }
    if (sorted[0] === sorted[3] || sorted[1] === sorted[4]){
        return 5
    }
    if ((sorted[0] === sorted[2] && sorted[3] === sorted[4]) || (sorted[0] === sorted[1] && sorted[2] === sorted[4])){
        return 4
    }
    if (sorted[0] === sorted[2] || sorted[1] === sorted[3] || sorted[2] === sorted[4]){
        return 3
    }
    if ((sorted[0] === sorted[1] && sorted[2] === sorted[3]) || (sorted[0] === sorted[1] && sorted[3] === sorted[4]) || (sorted[1] === sorted[2] && sorted[3] === sorted[4])){
        return 2
    }
    if (sorted[0] === sorted[1] || sorted[1] === sorted[2] || sorted[2] === sorted[3] || sorted[3] === sorted[4]){
        return 1
    }
    return 0
}

//part 2

fs.readFile('Day07/input.txt', (err, data) => {
	if (err) throw err

    const lines = data.toString().split("\n");
    const sorted = lines.sort(compareFnTwo)
    console.log(sorted)
    let winnings = 0
    for (let i = 0; i < sorted.length; i++){
        const bet = sorted[i].split(" ")[1]
        winnings += Number(bet) * (i + 1)
    }
    console.log(winnings)
})

function compareFnTwo(a, b) {
    const aCards = a.split(" ")[0].split("")
    const bCards = b.split(" ")[0].split("")
    const jCounter = (value, index) => {
        return value.filter((x) => x == index).length;
    };
    const handA = scoreHandWithJs(aCards, jCounter(aCards, 'J'))
    const handB = scoreHandWithJs(bCards, jCounter(bCards, 'J'))
    if (handA > handB){
        return 1
    }
    if (handA < handB){
        return -1
    }
    if (handA === handB){
        for (let i = 0; i < aCards.length; i++){
            const aVal = convertToNumberWithJ(aCards[i])
            const bVal = convertToNumberWithJ(bCards[i])
            //console.log(aCards[i] + " " + aVal)
            //console.log(bCards[i] + " " + bVal)
            if (aVal > bVal){
                return 1
            }
            if (bVal > aVal){
                return -1
            }
        }
        return 0
    }

}

function convertToNumberWithJ(card){
    switch(card){
        case "A":
            return 14
        case "K":
            return 13
        case "Q":
            return 12
        case "J":
            return 1
        case "T":
            return 10
        default:
            return Number(card)
    }
    
}

function scoreHandWithJs(hand, numJs) {
    const sorted = hand.toSorted()
    //console.log(hand + " " + numJs)
    if (sorted[0] === sorted[4]){
        return 6
    }
    if (sorted[0] === sorted[3] || sorted[1] === sorted[4]){
        if (numJs > 0){
            return 6
        }
        return 5
    }
    if ((sorted[0] === sorted[2] && sorted[3] === sorted[4]) || (sorted[0] === sorted[1] && sorted[2] === sorted[4])){
        if (numJs > 1){
            return 6
        }
        return 4
    }
    if (sorted[0] === sorted[2] || sorted[1] === sorted[3] || sorted[2] === sorted[4]){
        if (numJs >= 1){
            return 5
        }
        return 3
    }
    if ((sorted[0] === sorted[1] && sorted[2] === sorted[3]) || (sorted[0] === sorted[1] && sorted[3] === sorted[4]) || (sorted[1] === sorted[2] && sorted[3] === sorted[4])){
        if (numJs === 1){
            return 4
        }
        if (numJs > 1){
            return 5
        }
        return 2
    }
    if (sorted[0] === sorted[1] || sorted[1] === sorted[2] || sorted[2] === sorted[3] || sorted[3] === sorted[4]){
        if (numJs >= 1){
            return 3
        }
        return 1
    }
    if (numJs > 0){
        return 1
    }
    return 0
}

