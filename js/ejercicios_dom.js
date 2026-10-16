//1
// document.getElementById("ejercicios").innerHTML = `
//     <h1>titulo del ejercicio 1</h1>
//     <p>Lorem, ipsum dolor.</p>
// `

//2
// let userName = prompt("dame tu numbre")

// document.getElementById("ejercicios").innerHTML = `
// <p>Tu nombre es ${userName}</p>
// `

//3
// let userName = prompt("dime tu numbre")
// let userAge = prompt("dime tu edad")

// if (userAge < 18) {
//     document.getElementById("ejercicios").innerHTML =
//         `<p>Hola ${userName}, eres menor de edad</p>`
// } else {
//     document.getElementById("ejercicios").innerHTML =
//         `<p>Hola ${userName}, eres mayor de edad</p>`
// }

// switch (userAge) {
//     case "1":
//     case "2":
//     case "14":
//     case "15":
//     case "16":
//     case "17":
//         document.getElementById("ejercicios").innerHTML =
//            document.getElementById("ejercicios").innerHTML =
// `<p>Hola ${userName}, eres mayor de edad</p>`
//         break
//     default:
//         document.getElementById("ejercicios").innerHTML =
//             `<p>Hola ${userName}, eres mayor de edad</p>`
//         break
// }

// document.getElementById("ejercicios").innerHTML =
//     userAge < 18 ?
//         `<p>Hola ${userName}, eres menor de edad</p>` :
//         `<p>Hola ${userName}, eres mayor de edad</p>`


//4
// let html = document.getElementById("ejercicios")
// if (userAge < 18) {
//     html.innerHTML = `<p>Hola ${userName}, eres menor de edad</p>`
//     html.style.color = "red"

// } else {
//     html.innerHTML = `<p>Hola ${userName}, eres mayor de edad</p>`
//     html.style.color = "green"
// }

//5
// const num1 = parseFloat(prompt("dame el primer numero"))
// const num2 = parseFloat(prompt("dame el segundo numero"))
// let html = document.getElementById("ejercicios")
// html.innerHTML = `
//   <p id="sum" style="color:red; background-color: green" >Suma: ${num1 + num2}</p>
//     <p id="sub">Resta: ${num1 - num2}</p>
//     <p id="mul">Multiplicacion: ${num1 * num2}</p>
//     <p id="div">Division: ${num1 / num2}</p>
//     <p id="res">Resto: ${num1 % num2}</p>
// `
// document.getElementById("sub").style.color = "green"
// document.getElementById("sub").style.background = "orange"
// document.getElementById("mul").style.color = "violet"
// document.getElementById("div").style.color = "yellow"
// document.getElementById("res").style.color = "brown"

//6
// const operation = parseInt(prompt(`
//     Elija operación:
//     1 - suma
//     2 - resta
//     3 - multiplicacion
//     4 - division
//     5 - resto
//     `))

// const num1 = parseFloat(prompt("Dame primer numero"))
// const num2 = parseFloat(prompt("Dame segundo numero"))
// let html = document.getElementById("ejercicios")

// switch (operation) {
//     case 1:
//         html.innerHTML = `<p>${num1}+${num2}=${num1 + num2}</p>`
//         break
//     case 2:
//         html.innerHTML = `<p>${num1}-${num2}=${num1 - num2}</p>`
//         break
//     case 3:
//         html.innerHTML = `<p>${num1}x${num2}=${num1 * num2}</p>`
//         break
//     case 4:
//         html.innerHTML = `<p>${num1}/${num2}=${num1 / num2}</p>`
//         break
//     case 5:
//         html.innerHTML = `<p>${num1}%${num2}=${num1 % num2}</p>`
//         break
// }

//7
// import { new_1, new_2, new_3 } from "./news_ejercicio_7_dom.js"
// document.getElementById("header").innerHTML = `
//         <a href="#new-1">noticia 1</a>
//         <a href="#new-2">noticia 2</a>
//         <a href="#new-3">noticia 3</a>
// `
// document.getElementById("main").innerHTML = `
//         <div id="new-1">
//             <h2>Noticia 1</h2>
//             <p>${new_1}</p>
//         </div>
//         <div id="new-2">
//             <h2>Noticia 2</h2>
//             <p>${new_2}</p>
//         </div>
//         <div id="new-3">
//             <h2>Noticia 3</h2>
//             <p>${new_3}</p>
//         </div>
// `
// document.getElementById("footer").innerHTML = `
//   <a href="#header">inicio</a>
// `

//8
const age = parseInt(prompt("Dime tu edad"))
const dayPrice = 25
const weekPrice = 150
let userName
let surname
let cityPickUp
let daysNumber
let totalCost

if (age >= 18) {
    let haveDriveLicense = prompt("tienes carnet de conducir") == "si" ? true : false
    if (haveDriveLicense) {
        userName = prompt("nombre")
        surname = prompt("apellido")
        cityPickUp = prompt("ciudad de recogida")
        daysNumber = parseInt(prompt("número de días"))

        let weeksNumber = parseInt(daysNumber / 7)
        totalCost = weeksNumber * weekPrice + (daysNumber - 7 * weeksNumber) * dayPrice

        document.getElementById("ejercicios").innerHTML = `
            <p>Nombre: ${userName}</p>
            <p>Apellido: ${surname}</p>
            <p>Ciudad de recogida: ${cityPickUp}</p>
            <p>Número de días: ${daysNumber}</p>
            <p>Precio final: ${totalCost}</p>
            `

    } else {
        document.getElementById("ejercicios").innerHTML = "<h3>no puedes alquilar el coche</h3>"
    }
} else {
    document.getElementById("ejercicios").innerHTML = "<h3>no puedes alquilar el coche</h3>"
}