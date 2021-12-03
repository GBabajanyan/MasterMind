const readline = require('readline-sync')
let secretW = true
let guesser
let won = false
do {
    if (!secretW) {
        return
    }
    secretW = readline.questionInt('The secret number is... ', {
        hideEchoBack: true
    });
} while (secretW.toString().length !== 4 || secretW == 0);

do {
    do {
        guesser = readline.questionInt('Guess : ');
    } while (guesser.toString().length !== 4);

    let secretStr = secretW.toString()
    let guesserStr = guesser.toString()

    let digitsGuessed = 0
    let positionsGuessed = 0

    for (const digit in guesserStr) {
        if (secretStr.includes(guesserStr[digit])) {
            digitsGuessed++
            if (secretStr[digit] == guesserStr[digit]) {
                positionsGuessed++
            }
        }
    }
    won = positionsGuessed == secretStr.length ? true : false
    console.log(`${digitsGuessed} digit${digitsGuessed !== 1 ? `s` : ``} are guessed correctly, out of those ${positionsGuessed} are also placed correctly`);
} while (!won);

console.log("Congrats! You've won");