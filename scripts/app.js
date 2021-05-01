let cardPosition = 0;
const cards = document.getElementsByClassName("plans__container-card");
const cardsLength = cards.length;

document.getElementById("plans__button--prev").addEventListener("click", () => {
  previousCard();
});

document.getElementById("plans__button--next").addEventListener("click", () => {
  nextCard();
});

function previousCard() {
  if (cardPosition === 0) {
    cardPosition = cardsLength - 1;
  } else {
    cardPosition--;
  }

  updateCardclasses(cardPosition);
}

function nextCard() {
  if (cardPosition === cardsLength - 1) {
    cardPosition = 0;
  } else {
    cardPosition++;
  }

  updateCardclasses(cardPosition);
}

function updateCardclasses(position) {
  for (let card of cards) {
    card.classList.remove("plan__card--visible");
    card.classList.add("plan__card--hidden");
  }

  cards[position].classList.add("plan__card--visible");
}

