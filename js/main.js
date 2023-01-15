const cards = [
    { name: "aquaman", img: "aquaman.jpg" },
    { name: "batman", img: "batman.jpg" },
    { name: "captain america", img: "captain-america.jpg" },
    { name: "fantastic four", img: "fantastic-four.jpg" },
    { name: "flash", img: "flash.jpg" },
    { name: "green arrow", img: "green-arrow.jpg" },
    { name: "green lantern", img: "green-lantern.jpg" },
    { name: "ironman", img: "ironman.jpg" },
    { name: "spiderman", img: "spiderman.jpg" },
    { name: "superman", img: "superman.jpg" },
    { name: "the avengers", img: "the-avengers.jpg" },
    { name: "thor", img: "thor.jpg" },
    { name: "aquaman", img: "aquaman.jpg" },
    { name: "batman", img: "batman.jpg" },
    { name: "captain america", img: "captain-america.jpg" },
    { name: "fantastic four", img: "fantastic-four.jpg" },
    { name: "flash", img: "flash.jpg" },
    { name: "green arrow", img: "green-arrow.jpg" },
    { name: "green lantern", img: "green-lantern.jpg" },
    { name: "ironman", img: "ironman.jpg" },
    { name: "spiderman", img: "spiderman.jpg" },
    { name: "superman", img: "superman.jpg" },
    { name: "the avengers", img: "the-avengers.jpg" },
    { name: "thor", img: "thor.jpg" },
];
const memoryGame = new MemoryGame(cards);

memoryGame.shuffleCards();

window.addEventListener("load", (event) => {
    let html = "";
    memoryGame.cards.forEach((pic) => {
        html += `<div class="card" data-card-name="${pic.name}">`;
        html += `<div class="back" name="${pic.img}"></div>`;
        html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
        html += `</div>`;
    });
    // Add all the divs to the HTML
    document.querySelector("#memory_board").innerHTML = html;
    // Bind the click event of each element to a function
    document.querySelectorAll(".back").forEach((card) => {
        card.addEventListener("click", function() {
            // Todo: Changes the classes to .back //
            flipCard(card);
            pickedCards(card);

            console.log(`Card clicked: ${card}`);
        });
    });

    function flipCard(card) {
        console.log("Fliped", card);
        const cardParent = card.parentNode;
        const frontCard = cardParent.querySelector(".front");
        frontCard.removeAttribute("class", "front");
        frontCard.setAttribute("class", "back");
        card.removeAttribute("class", "back");
        card.setAttribute("class", "front");
    }

    function hideCard(card) {
        console.log("hidden", card);
        const cardParent = card.parentNode;
        const frontCard = cardParent.querySelector(".back");
        frontCard.removeAttribute("class", "back");
        frontCard.setAttribute("class", "front");
        card.removeAttribute("class", "front");
        card.setAttribute("class", "back");
    }

    function pickedCards(card) {
        let pairsGuessed = document.querySelector('#pairs_guessed')

        let pairsClicked = document.querySelector('#pairs_clicked');
        pairsClicked.innerHTML = memoryGame.pairClicked;

        // console.log(memoryGame.pickedCards.length);

        memoryGame.pickedCards.push(card);
        if (memoryGame.pickedCards.length == 2) {
            if (
                memoryGame.checkIfPair(
                    memoryGame.pickedCards[0].getAttribute("name"),
                    memoryGame.pickedCards[1].getAttribute("name")
                )
            ) {
                pairsGuessed.innerHTML = memoryGame.pairGuessed;
                memoryGame.pickedCards.pop();
                memoryGame.pickedCards.pop();
                if (memoryGame.checkIfFinished()) {
                    setTimeout(function() {
                        let newGame = prompt("Wanna play again? Amigo");
                        if (newGame) {
                            window.location.reload();
                        }
                    }, 3000);
                }
            } else {
                setTimeout(() => {
                    hideCard(memoryGame.pickedCards[0]);
                    hideCard(memoryGame.pickedCards[1]);
                    memoryGame.pickedCards.pop();
                    memoryGame.pickedCards.pop();
                }, 400);
            }
        }
    }

    // // bonus //
    // function restart(){}
});