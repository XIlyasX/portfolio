function openModal(id) {
    document.getElementById(id).style.display = 'flex';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

function searchProjects() {
    var input, filter, cards, card, title, i;
    input = document.getElementById("projectSearch");
    filter = input.value.toLowerCase();
    cards = document.getElementById("projectCards").getElementsByClassName("card");

    for (i = 0; i < cards.length; i++) {
        card = cards[i];
        title = card.getElementsByTagName("h3")[0];
        if (title.innerHTML.toLowerCase().indexOf(filter) > -1) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    }
}
