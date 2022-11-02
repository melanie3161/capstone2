function mountainImage(item) {
    const img = document.createElement("img");
    img.src = "images/" + item.img;
    return img;
}

function mountainTitle(item) {
    const text = document.createElement("div");
    text.classList.add("card-title");
    text.innerHTML = item.name;
    return text
}

function mountainDescription(item) {
    const text = document.createElement("div");
    text.classList.add("card-description");
    text.innerHTML = `<b>Description:</b><br>` + item.desc;
    return text;
}

function mountainCard(item) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.appendChild(mountainImage(item));
    card.appendChild(mountainTitle(item));
    card.appendChild(mountainDescription(item));
    return card;
}
function filter() {
    const effort = document.getElementById("effort");
    const v = effort.selectedOptions[0 ].value;
    console.log(v)
    if (v == "all") {
        showMountains(mountainsArray)

    }
    else {
        showMountains(mountainsArray.filter(m => m.effort == v))

    }
}

function showMountains(list) {
    window.results.innerHTML = ""; //clear the old
    list.forEach(m => window.results.appendChild(mountainCard(m)));
}

document.addEventListener("DOMContentLoaded", () => {
    // mountainsArray.forEach( m => window.results.appendChild(mountainCard(m)));
    showMountains(mountainsArray)
    //HOW TO GET UNIQ LIST OF STRING FOR A SELECT FROM A LIST OF OBJECT
    const allEfforts = mountainsArray.map(m => m.effort); //pull out one property
    const list = [... new Set(allEfforts)]; //make unique using ES6 Set

    //SAME AS FOR LISTS ON PARKS
    const effort = document.getElementById("effort");
    effort.innerHTML = " <Option> all </option>"
    effort.size = list.length + 1;
    list.forEach(e => effort.innerHTML += `<option value="${e}">${e}</option`);
    effort.addEventListener("change", filter);
});