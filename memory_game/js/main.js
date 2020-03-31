let cards = [
  {
    rank: 'queen',
    suit: 'hearts',
    image: 'images/queen-of-hearts.png'
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    image: 'images/queen-of-diamonds.png'
  },
  {
    rank: 'king',
    suit: 'hearts',
    image: 'images/king-of-hearts.png'
  },
  {
    rank: 'king',
    suit: 'diamonds',
    image: 'images/king-of-diamonds.png'
  },
];
let cardsInPlay = [];

function checkForMatch() {
  if(cardsInPlay[0] === cardsInPlay[1]) {
    alert('You found a match!');
  } else {
    alert('Sorry, try again!');
  }
  resetCards();
}

function resetCards() {
  let allCards = document.querySelectorAll('#game-board img');
  for(let i = 0; i < allCards.length; i++) {
    allCards[i].setAttribute('src', 'images/back.png');
  }
  cardsInPlay = [];
}

function flipCard() {
  let cardId = this.getAttribute('data-id');
  console.log("User flipped " + cards[cardId].rank);
  this.setAttribute('src', cards[cardId].image)
  cardsInPlay.push(cards[cardId].rank);
  if(cardsInPlay.length >= 2) {
    checkForMatch();
  }
}

function createBoard() {
  for(let i = 0; i < cards.length; i++) {
    let cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.querySelector('#game-board').appendChild(cardElement);
  }
}

createBoard();
