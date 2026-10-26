//3
// let num = {
//     value: 0,
//     color: ""
// }

// num.value =4
// parseInt(prompt("introduzca un numero"))

// if (num.value < 100) num.color = "green"
// if (num.value > 100 && num.value < 200) num.color = "yellow"
// if (num.value > 200) num.color = "red"

// document.getElementById("ejercicios").innerHTML = `<h1>${num.value}</h1>`

// document.getElementById("ejercicios").style.color = num.color


//5
// const name = prompt("dime el nombre")
// const surname = prompt("dime el apellido")
// const age = prompt("dime la edad")
// const gender = prompt("masculino (m) o femenino (f)")
// const image = prompt("dime la imagen que quieres")

// let superHeroe = {
//     letraNombre: name.substring(0, 1),
//     letraApellido: surname.substring(surname.length - 1, surname.length),
//     fechaNacimiento: age.substring(age.length - 1, age.length)
// }

// let superHeroeName = superHeroe.letraNombre + superHeroe.letraApellido + superHeroe.fechaNacimiento
// document.getElementById("ejercicios").innerHTML = `
// <p>${superHeroeName}</p>
// <img src="${image}"/>
// `


//6

// let personas = [
//     {
//         name: "Marta",
//         years: 25,
//         eyesColor: "grey",
//         email: "martared@gmail.com",
//         photo: "https://static.vecteezy.com/system/resources/thumbnails/049/601/762/small/portrait-outdoors-serious-angry-male-face-african-american-man-looking-at-camera-standing-in-urban-city-handsome-confident-guy-looks-street-lifestyle-real-people-close-up-facial-confidence-human-gaze-photo.jpg"
//     },
//     {
//         name: "Jorge",
//         years: 27,
//         eyesColor: "green",
//         email: "jorgeblue@gmail.com",
//         photo: "https://img.magnific.com/foto-gratis/estilo-vida-emociones-gente-concepto-casual-confiado-agradable-sonriente-mujer-asiatica-brazos-cruzados-pecho-seguro-listo-ayudar-escuchando-companeros-trabajo-participando-conversacion_1258-59335.jpg?semt=ais_hybrid&w=740&q=80"
//     }
// ]

// let personName = prompt("que persona quieres consultar").toLowerCase()
// let html = document.getElementById("ejercicios")
// let foundPerson = false

// for (let i = 0; i < personas.length; i++) {
//     if (personName == personas[i].name.toLowerCase()) {
//         html.innerHTML = `
//         <h3>${personas[i].name}</h3>
//         <p>${personas[i].years}</p>
//         <p>${personas[i].email}</p>
//         <img src="${personas[i].photo}"/>
//         `
//         html.style.background = personas[i].eyesColor
//         foundPerson = true
//     }
// }

// if (!foundPerson) alert("el usuario no existe")

//7
import sistema_solar from "./sistema_solar.js"

console.log(sistema_solar.pluton)

let html = document.getElementById("ejercicios")

for (let i = 1; i <= 3; i++) {
    let planet = prompt(`elije un planeta (${i}/3)`).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (sistema_solar[planet]) {
        html.innerHTML += `
        <div id="planet-${i}">
        <img src="${sistema_solar[planet].imagen}"/>
        <h1>${sistema_solar[planet].nombre}</h1>
        <p>Color: ${sistema_solar[planet].color}</p>
        <p>Temperatura: ${sistema_solar[planet].temperatura}</p>
        </div>
        `
        document.getElementById(`planet-${i}`).style.background = sistema_solar[planet].color
    } else {
        html.innerHTML += `
        <div>
        <p>El planeta ${planet} no se ha encontrado</p>
        </div>
        `
    }
}

