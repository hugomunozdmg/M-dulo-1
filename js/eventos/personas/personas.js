
function displayCards(person) {
    getHTML("persons").innerHTML += `
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

function search() {
    let value = getHTML("my-input").value

    if(parseInt(value)){
        searchPersonByIndex()
    }else{
        searchPersonByText()
    }
}

function searchPersonByIndex() {
    load()
    setTimeout(() => {
    let index = getHTML("my-input").value
    persons[index] ? displayCards(persons[index]) :
        showError("el suario no existe", "search-error")
    }, 3700)
}

function searchPersonByText() {
    let text = getHTML("my-input").value
    let foundUser = false
    getHTML("persons").innerHTML = ""
    for (let i = 0; i < persons.length; i++) {
        if (persons[i].name.toLowerCase().includes(text)) {
            displayCards(persons[i])
            foundUser = true
        }
    }
    if (!foundUser) {
        showError("el suario no existe", "search-error")
    }
}

let puntos = ""
let contador = 0

function load() {
    setTimeout(() => {
        contador += 1
        if (puntos.length < 3) {
            puntos += "."
        } else {
            puntos = ""
        }
        getHTML("loading").innerText = puntos
        if (contador < 12) {
            load()
        } else {
            getHTML("loading").innerText = ""
            contador = 0
        }
    }, [300])
}

function showError(message, id) {
    getHTML(id).innerText = message
    setTimeout(() => {
        getHTML(id).innerText = ""
    }, 2000)
}




function getHTML(id) {
    return document.getElementById(id)
}