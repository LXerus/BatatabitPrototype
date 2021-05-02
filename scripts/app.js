let cardPosition = 0;
let currentTablePosition = 0;
const cards = document.getElementsByClassName("plans__container-card");
const tableButtons = document.getElementsByClassName("currency__table-button");
const currencyTable = document.getElementById("currency-table");
const commissionTable = document.getElementById("commission-table");
const cardsLength = cards.length;

document
  .getElementById("currency__table-button--right")
  .addEventListener("click", () => {
    toCommissionTable();
  });

document
  .getElementById("currency__table-button--left")
  .addEventListener("click", () => {
    toCurrencyTable();
  });

document.getElementById("plans__button--prev").addEventListener("click", () => {
  previousCard();
});

document.getElementById("plans__button--next").addEventListener("click", () => {
  nextCard();
});

function toCommissionTable() {
  currentTablePosition++;
  updateTables(currentTablePosition);
}

function toCurrencyTable() {
  currentTablePosition--;
  updateTables(currentTablePosition);
}

function updateTables(tablePosition) {
  for (let button of tableButtons) {
    button.classList.remove("currency__table-button--visible");
    button.classList.add("currency__table-button--hidden");
  }

  if (tablePosition === 0) {
    currencyTable.classList.add("table--visible");
    currencyTable.classList.remove("table--hidden");
    commissionTable.classList.remove("table--visible");
    commissionTable.classList.add("table--hidden");
    tableButtons[tablePosition].classList.remove(
      "currency__table-button--hidden"
    );
  }
  if (tablePosition === 1) {
    tableButtons[tablePosition].classList.remove(
      "currency__table-button--hidden"
    );
    commissionTable.classList.add("table--visible");
    commissionTable.classList.remove("table--hidden");
    currencyTable.classList.remove("table--visible");
    currencyTable.classList.add("table--hidden");
  }

  tableButtons[tablePosition].classList.add("currency__table-button--visible");
}

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
