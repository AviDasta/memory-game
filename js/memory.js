class MemoryGame {
    constructor(cards) {
        this.cards = cards;
        // add the rest of the class properties here
        this.pickedCards = [];
        this.pairGuessed = 0;
        this.pairClicked = 0;
    }
    shuffleCards() {
        // ... write your code here
        // cards.sort((a, b) => 0.5 - Math.random())
        for (let i = cards.length - 1; i >= 0; i--) {
            let j = Math.floor(Math.random() * i);
            console.log(j, i);
            [cards[i], cards[j]] = [cards[j], cards[i]];
            console.log([cards[i], cards[j]]);
            console.log([cards[j], cards[i]]);
            console.log([cards[j], cards[i]] = [cards[i], cards[j]]);
        }
    }
    checkIfPair(card1, card2) {
        this.pairClicked++;
        if (card1 === card2) {
            this.pairGuessed++;
            return true;
        } else {
            return false;
        }


    }
    checkIfFinished() {
        if (this.pairGuessed == this.cards.length / 2) {
            console.log('GAME OVER - YOU WON')
            return true;
        } else {
            console.log('GAME OVER - YOU LOST')
            return false;
        }
    }
}