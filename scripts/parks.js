function locationOption(item) {
    const option = document.createElement("option");
    option.value = item;
    option.innerHTML = item;
    return option;
}

function parkCard(item) {
    let card;
    if (item.Visit != undefined) {
        card = document.createElement("a");
        card.target = "_blank";
        card.href = item.Visit;
    } else {
        card = document.createElement("div");
    }
    card.classList.add("card");
    card.innerHTML = item.LocationName;
    card.innerHTML += "<br><br>"
    card.innerHTML += item.City
    return card;
}

function showCards(list, target) {
    target.innerHTML = ""; //CLEAR
    list.forEach(item => target.appendChild(parkCard(item)));
}

document.addEventListener("DOMContentLoaded", () => {
    const results = document.getElementById("results");
    const selectLocation = document.getElementById("location");
    const selectType = document.getElementById("type");
    // const search = document.getElementById("search");

    function applyFilters() {
        const v = selectLocation.selectedOptions[0].value;
        const matches = nationalParksArray.filter(item => item.State == v || v == "");

        const v2 = selectType.selectedOptions[0].value;
        const matches2 = matches.filter(item => item.LocationName.toLowerCase().includes(v2.toLowerCase()) || v2 == "");

        const v3 = search.value;
        const matches3 = matches2.filter(item => JSON.stringify(item).toLowerCase().includes(v3.toLowerCase()) || v3 == "");

        showCards(matches3, results);
    }

    locationsArray.forEach(item => selectLocation.appendChild(locationOption(item)));
    parkTypesArray.forEach(item => selectType.appendChild(locationOption(item)));

    selectLocation.addEventListener("change", applyFilters);
    selectType.addEventListener("change", applyFilters);
    search.addEventListener("keyup", applyFilters);

    //SHOW ALL CARDS
    showCards(nationalParksArray, results);
});