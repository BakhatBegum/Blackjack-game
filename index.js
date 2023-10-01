

let player = {         /* here we used objects */
    name: "Per", 
    chips: 200
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

/* Grad ahold of the player-el paragraph and store it in a veriable called playerEl.*/
let playerEl = document.getElementById("player-el")

/* Render out the player's name and chips in playerEl*/
playerEl.textContent = player.name + ": $" + player.chips

/*let playerName = "Ali";
let playerSnack = 100

let playerEl = document.getElementById("player-el");
playerEl.textContent = playerName + ": $ " + playerSnack; */

function getRandomCard() {					/* here we used if else statments with Comparison operators*/
	let number =  Math.floor( Math.random() * 13) + 1;     /* here in this line we used "The Math object" */
	if ( number > 10) {
		return 10;
	} else if ( number === 1) {
		return 11;
	} else {
		return number;
	}
}

function startGame() {
	/* Generate two random numbers */
	/*Re-assign the cards and sum variables so that the game can start*/
    
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];      /* here we used Array */
    sum = firstCard + secondCard;
	renderGame();
};


function renderGame(){
	cardsEl.textlContent = "Cards: " ;       /* + cards[0] + " " + cards[1];  */   /*render out firstCard and secondCard.*/
	for (let i = 0; i < cards.length; i++){        /* here we used for loop */ 
		cardsEl.textContent += cards[i] + " ";
	}

	sumEl.textContent = "Sum: " + sum;   /* here we used if else statments with Comparison operators and Booleans*/
	if (sum <= 20) {
	    message = "Do you want to draw a new card? 🙂"
	} else if (sum === 21) {
	    message = "Wohoo! You've got Blackjack! 🥳"
	    hasBlackJack = true
	} else {
	    message = "You're out of the game! 😭"
	    isAlive = false
	}
	messageEl.textContent = message;	
}

function newCard() {
	/* // Only allow the player to get a new card if she IS alive and does NOT have Blackjack*/
	
	if (isAlive === true && hasBlackJack === false) {   /* here we used logical operators.*/
		let card = getRandomCard();
		sum += card;
		cards.push(card)
		renderGame()
	  }
	}
