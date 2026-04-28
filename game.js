
// 1. All card symbols (each appears twice)
const symbols = [
  "🍕","🍕","🎈","🎈","🌟","🌟","🎸","🎸",
  "🚗","🚗","🐱","🐱","🍦","🍦","⚽","⚽"
];

// Variables used in the game
let cards = [];           // shuffled cards
let flippedCards = [];    // the two cards currently flipped
let matchedCards = 0;     // how many cards already matched
let moves = 0;            // move counter



// 2. Shuffle function (randomly mixes the cards)
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    
    // Swap values
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}



// 3. Creates the game board with all cards
function createBoard() {
  const board = document.getElementById("gameBoard");
  board.innerHTML = ""; // clear old board (if restarting)

  cards = shuffle([...symbols]); // shuffle a copy
  flippedCards = [];
  matchedCards = 0;
  moves = 0;

  document.getElementById("moveCount").textContent = moves;

  // Create each card HTML
  cards.forEach((symbol, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.index = index;

    // Card front is "?", back shows the emoji
    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front">?</div>
        <div class="card-back">${symbol}</div>
      </div>
    `;

    // When clicked → flip the card
    card.addEventListener("click", () => flipCard(card, index));

    board.appendChild(card);
  });
}



// 4. Flip a card
function flipCard(card, index) {

  // Ignore clicks if:
  if (
    card.classList.contains("flipped") ||  // already flipped
    card.classList.contains("matched") ||  // already matched
    flippedCards.length === 2              // waiting for match check
  ) return;

  // Flip the card visually
  card.classList.add("flipped");

  // Store flipped card information
  flippedCards.push({ card, index });

  // If two cards are flipped → check for match
  if (flippedCards.length === 2) {
    moves++;
    document.getElementById("moveCount").textContent = moves;

    // Wait 700ms so the user can see both cards
    setTimeout(checkMatch, 700);
  }
}



// 5. Check if the two flipped cards match
function checkMatch() {
  const [first, second] = flippedCards;

  // If the symbols are same → match!
  if (cards[first.index] === cards[second.index]) {

    first.card.classList.add("matched");
    second.card.classList.add("matched");

    matchedCards += 2;

    // If all cards matched → show winning message
    if (matchedCards === cards.length) {
      document.getElementById("gameMessage").textContent =
        `Congratulations! You won in ${moves} moves!`;
    }
  } 
  else {
    // Not a match → flip back
    first.card.classList.remove("flipped");
    second.card.classList.remove("flipped");
  }

  // Reset for next turn
  flippedCards = [];
}



// 6. Start game when page loads
document.addEventListener("DOMContentLoaded", () => {
  createBoard();
  document.getElementById("gameMessage").textContent = "";
});
