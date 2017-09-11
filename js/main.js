// Javascript

var cards = [
 {
 	rank: "queen",
 	suit: "hearts",
 	cardImage: "images/queen-of-hearts.png"
 },
 {
 	rank: "queen",
 	suit: "diamonds",
 	cardImage: "images/queen-of-diamonds.png"
 },
 {
 	rank: "king",
 	suit: "hearts",
 	cardImage: "images/king-of-hearts.png"
 },
 {
 	rank: "king",
 	suit: "diamonds",
 	cardImage: "images/king-of-diamonds.png"
 }
];

var cardsInPlay = [];

var checkForMatch = function(){

	if (cardsInPlay[0] === cardsInPlay[1]){
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		}

}


function flipCard(cardElement){

  var card = cards[this.getAttribute('data-id')];


	cardsInPlay.push(card.rank);
	cardsInPlay.push(card.suit);
	cardsInPlay.push(card.cardImage);

	console.log('User flipped ' + card.rank);
	console.log(card.cardImage);
	console.log(card.suit);

	if (cardsInPlay.length === 2){
			checkForMatch();
		} else {
      console.log("no match yet");
		}
}



function createBoard(){

	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
    cardElement.addEventListener("click", flipCard);
		document.getElementById('game-board').appendChild(cardElement);
		}


}

createBoard();
