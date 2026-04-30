const search = document.getElementById("search");

search.addEventListener("keyup", function () {
  let value = search.value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let text = card.textContent.toLowerCase();
    card.style.display = text.includes(value) ? "block" : "none";
  });
});