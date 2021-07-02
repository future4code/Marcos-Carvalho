console.log("Bem-vindo(a) ao jogo de blackjack")

let jogo = confirm("Quer iniciar uma nova rodada?")

if (jogo) {
    let carta1Usuario = comprarCarta()
    let carta2Usuario = comprarCarta()
    let carta1Pc = comprarCarta()
    let carta2Pc = comprarCarta()

    let pontuacaoUsuario = carta1Usuario.valor + carta2Usuario.valor
    let pontuacaoPc = carta1Pc.valor + carta2Pc.valor

    console.log(`Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto} - ${pontuacaoUsuario}`)
    console.log(`Computador - cartas: ${carta1Pc.texto} ${carta2Pc.texto} - ${pontuacaoPc}`)

    if (pontuacaoUsuario > pontuacaoPc) {
        console.log("O usuário ganhou!")
    } else if (pontuacaoPc > pontuacaoUsuario) {
        console.log("O computador ganhou!")
    } else if (pontuacaoUsuario === pontuacaoPc) {
        console.log("Empate!")
    }

} else {
    console.log("O jogo acabou")
}


let suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
let values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 
'Four', 'Three', 'Two'];



// DOM Variables

let textArea = document.getElementById('text-area');
let newGameButton = document.getElementById('new-game-button');
let hitButton = document.getElementById('hit-button');
let stayButton = document.getElementById('stay-button');



// Game Variables 

let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [];



hitButton.style.display = 'none';
stayButton.style.display = 'none';
showStatus();

newGameButton.addEventListener('click', function(){
  gameStarted = true;
  gameOver = false;
  playerWon = false;
  
  deck = createDeck;
  shuffleDeck(deck);
  dealerCards = [getNextCard(), getNextCard()];
  playerCards = [getNextCard(), getNextCard()];
  
  textArea.innerText = "Started...";
  newGameButton.style.display = 'none';
  hitButton.style.display = "inline";
  stayButton.style.display = "inline";
  showStatus();
});

function createDeck(){
  let deck = [];
  for(let suitIdx = 0; suitIdx < suits.length; suitIdx++){
    for(let valueIdx = 0; valueIdx < values.length; valueIdx++){
      let card = {
        suit: suits[suitIdx],
        value: values[valuesIdx]
      };
        deck.push( card );
    }   
    }
  return deck;
}

let deck = createDeck();

for (let i = 0; i < deck.length; i++ )

let playerCards = [getNextCard(), getNextCard()];

function shuffleDeck(deck){
  for (let i = 0; i < deck.length; i++ ){ let swapIdx = Math.trunc(Math.random() * deck.length);
  let tmp = deck[swapIdx];
  deck[swapIdx] = deck[i];
  deck[i] = tmp;
  }
}

function getCardString(card){
  return card.value + ' of ' + card.suit;
}

function getNextCard(){
  return deck.shift();
}

function getCardNumericValue(card){
  switch(card.value){
    case 'Ace':
      return 1;
    case 'Two':
      return 2;
    case 'Three':
      return 3;
    case 'Four':
      return 4;
    case 'Five':
      return 5;
    case 'Six':
      return 6;
    case 'Seven':
      return 7;
    case 'Eight':
      return 8;
    case 'Nine':
      return 9;
    default:
      return 10;
  }
}

function getScore(cardArray){
  let score = 0;
  let hasAce = false;
  for (let i = 0; i < cardArray.length; i++){
    let card = cardArray[i];
    score += getCardNumericValue(card);
    if (card.value === 'Ace'){
      hasAce = true;
    }
  }
  if (hasAce && score + 10 <= 21){
    return score + 10;
  }
  return score;
}

function updateScores(){
  dealerScore = getScore(dealerCards);
  playerScore = getScore(playerCards);
}

function showStatus(){
  if (!gameStarted){
    text.area.innerText = "Welcome to Blackjack!";
    return;
  }
   
  let dealerCardString = '';
  for (let i=0; i<dealerCards.length; i++){dealerCardString += getCardString(dealerCards[i]) + '\n';
  }
  let playerCardString = '';
  for (let i=0; i<playerCards.length; i++){playerCardString += getCardString(dealerCards[i]) + '\n';
  }
}


updateScores();

textarea.innerText=
'Dealer has:\n' + 
dealerCardString +
'(score: '+ dealerScore + ')\n\n' + 

'Player has:\n' +
playerCardString +
'(score: '+ playerScore + ')\n\n'; 

if (gameOver) {
  if (playerWon) {
    textArea.innerText += "You Win!";
  }
  else {
    textArea.innerText += "Dealer Wins!";
  }
  newGameButton.style.display = "inline";
  hitButton.style.display = "none";
  stayButton.style.display = "none";
}

console.log("Welcome to Blackjack!");

console.log("You are dealt: ");
console.log(" " + getCardString(playerCards[0]) );
console.log(" " + getCardString(playerCards[1]) );