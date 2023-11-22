class Casino {
    constructor(name) {
        this.name = name
        this.timesPlayed = 0
        this.totalWinnings = 0
    }

    playGame(bet) {
        this.timesPlayed++

        if (Math.random() <= 0.5) { 
            console.log("The " + this.name + " wins " + bet +" monies!") 
            console.log("You have now played at the " + this.name + " " + this.timesPlayed + " time(s)") 
            this.totalWinnings = this.totalWinnings - bet
        }
        else {
            console.log("The player wins " + bet +" monies!") 
            this.totalWinnings = this.totalWinnings + bet
            console.log("You have now played at the " + this.name + " " + this.timesPlayed + " time(s) and won a total of $" + this.totalWinnings + "!")
        }
    }
};

// TESTS
const myCasino = new Casino("HackerU Casino");
myCasino.playGame(5);
myCasino.playGame(15);
myCasino.playGame(25);
myCasino.playGame(35);
console.log(myCasino);
// BONUS TESTS
/*
const myBonusCasino = new Casino("HackerU Bonus Casino", true);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25);
myBonusCasino.playGame(35);
*/

// Extra BONUS TESTS
/*
const myExtraBonusCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDie(6);
myExtraBonusCasino.rollDie(20);
myExtraBonusCasino.rollDie(100);
*/
