const inqurier = require('inquirer');
let startersArray = [];
let benchArray = [];

function coinFlip() {
    let flip = Math.random() * 2;
    if (flip > 1) {
        return true
    }
    else {
        return false
    }
}

function Player(name, position, offense, defense) {
    this.name = name
    this.position = position
    this.offense = offense
    this.defense = defense

    this.goodGame = function () {
        if (coinFlip()) {
            console.log(`increase offense`)
            this.offense++
        }
        else {
            console.log(`increase defense`)
            this.defense++
        }
    }

    this.badGame = function () {
        if (coinFlip()) {
            this.offense--
        }
        else {
            this.defense--
        }
    }

    this.printStats = function () {
        console.log(
            `
Name: ${this.name}
Position: ${this.position}
Offense: ${this.offense}
Defense: ${this.defense}
            `
        )
    }


    this.random = () => (Math.random() * 2)

}

let count = 0;

function buildPlayer() {
    if (count < 5) {
        inqurier.prompt([
            {
                name: "name",
                message: "Enter a player name"
            },
            {
                name: "position",
                message: "Enter a position"
            },
            {
                name: "offense",
                message: "Enter an offensive score"
            },
            {
                name: "defense",
                message: "Enter a defensive score"
            }
        ])
            .then(function (response) {
                let { name, position, offense, defense } = response;
                console.log(`Creating player with name:${name}, position:${position}, offense:${offense}, defense:${defense}`);
                if (count < 3) {
                    startersArray.push(new Player(name, position, offense, defense));
                    console.log(`Number of Starters: ${startersArray.length}`)
                }
                else {
                    benchArray.push(new Player(name, position, offense, defense))
                    console.log(`Number on Bench: ${benchArray.length}`)
                }
                count++
                buildPlayer();
            })
    }

}

buildPlayer();