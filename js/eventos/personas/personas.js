displayCard(persons[0])

function displayCard(person) {
    getHTML("persons").innerHTML = `
<div class="person-card" style="background-color:${person.eyeColor}">
        <img src="${person.image}" alt="">
        <h2>Nombre: ${person.name}</h2>
        <p>Edad: ${person.age}</p>
        <p>Email: ${person.email}</p>
        <p>Direccion: ${person.address}</p>
        <p>Color de ojos: ${person.eyeColorES}</p>
</div>
`
}


function searchPersonByIndex() {
    let inputValue = getHTML("index-input").value
    if(persons[inputValue]){
        displayCard(persons[inputValue])
    }
}

function getHTML(id) {
    return document.getElementById(id)
}