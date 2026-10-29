let contenedor = document.getElementById("Ejercicios")

let planetsCount = 3
let planets = []


window.addEventListener("keydown", (event) => {
    if (event.key == "Enter") search()
})
document.getElementById("search-btn").addEventListener("click", search)


function planetOnList(planetName, planetsList) {
    let planetOnList = false
    for (let p = 0; p < planetsList.length; p++) {
        if (planetName == planetsList[p].nombre) planetOnList = true
    }
    return planetOnList
}

function planetExistOnData(planetName, planetsData) {
    return planetsData[planetName]
}


function search() {
    let planetToSearch = document.getElementById("my-input").value.toLowerCase()
    let planet = sistemaSolar[planetToSearch]
    if (planets.length < planetsCount) {
        if (!planetExistOnData(planetToSearch, sistemaSolar)) {
            document.getElementById("alert").innerHTML = `<p>El planeta no se ha encontrado</p>`
            setTimeout(() => {
                document.getElementById("alert").innerHTML = ""
            }, 2000)
        } else if (planetOnList(planet.nombre, planets)) {
            document.getElementById("alert").innerHTML = `<p>El planeta ya esta en la lista</p>`
            setTimeout(() => {
                document.getElementById("alert").innerHTML = ""
            }, 2000)
        } else {
            contenedor.innerHTML = ""
            planets.push(planet)
            planets.forEach((planet) => {
                contenedor.innerHTML += `
              <div class="planet-card" id="${planet.nombre}">
                <h1>${planet.nombre}</h1>
                <img src="${planet.imagen}" alt="${planet.nombre}" />
                <p>Color: ${planet.color}</p>
                <p>Temperatura: ${planet.temperatura} °C</p>
                <button id=${`btn-${planet.nombre}`} >format color</button>
              </div>`
            })
            planets.forEach((planet) => {
                document.getElementById(`btn-${planet.nombre}`).addEventListener("click", () => {
                    changeColor(planet.nombre, planet.color)
                })
            })
        }
    }
    if (planets.length == planetsCount) {
        document.getElementById("search-box").innerHTML = `
            <button id="clear-btn">clear</button>
        `
        document.getElementById("clear-btn").addEventListener("click", clear)
    }

    document.getElementById("my-input").value = ""

}

function changeColor(cardId, color) {
    document.getElementById(cardId).style.background == color ?
        document.getElementById(cardId).style.background = "white" :
        document.getElementById(cardId).style.background = color
}

function clear() {
    contenedor.innerHTML = ""
    planets = []
    document.getElementById("search-box").innerHTML = `
            <input id="my-input" type="text">
            <button id="search-btn">search</button>
        `
    document.getElementById("search-btn").addEventListener("click", search)
}