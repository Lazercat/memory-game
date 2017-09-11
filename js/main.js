// Javascript

console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[2];


cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log('User flipped ' + cardsInPlay);

if (cardsInPlay.length === 2){
	console.log('User picked 2 cards');
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}


} else {
	console.log('User has not picked 2 cards.');
}
