//1
// function decirHola80Veces() {
//     for (let i = 0; i < 80; i++) {
//         console.log("hola")
//     }
// }

// decirHola80Veces()

//2
// let x = 3
// let x2 = 5

// function decirHolaXVeces(x) {
//     for (let i = 0; i < x; i++) {
//         console.log("hola")
//     }
// }

// decirHolaXVeces(parseInt(prompt("cuantas veces hola")))

//3
// import { suma, resta } from "./operaciones.js"

// console.log(suma(2, 3))
// console.log(resta(1, 6))

//4
// function suma(a, b) {
//     return a + b
// }

// let num1 = parseFloat(prompt("dame un numero"))
// let num2 = parseFloat(prompt("dame un numero"))

// alert(`la suma es: ${suma(num1, num2)}`)


//5
// let num1 = parseFloat(prompt("dame un numero"))
// let num2 = parseFloat(prompt("dame un numero"))

// function biggestNumber(a, b) {
//     return a > b
// }

// let firstIsBigger = biggestNumber(num1, num2)

// if(firstIsBigger) console.log("el primer numero es ams grande")
// if(!firstIsBigger) console.log("el segundo numero es ams grande")


//6
// let num1
// let num2

// while (num2 != 0) {
//     num1 = parseFloat(prompt("dame un numero"))
//     num2 = parseFloat(prompt("dame un numero"))
//     alert(`la division es ${divide(num1, num2)}`)
// }

// function divide(a, b) {
//     return a / b
// }

//7

// let num = parseFloat(prompt("dame un numero"))

// // if (esPar(num)) {
// //     alert("el numero es par")
// // } else {
// //     alert("el numero es impar")
// // }

// alert(`El numero es ${esPar(num) ? "par" : "impar"}`)

// function esPar(num) {
//     return num % 2 == 0
// }


//8

// let num = parseInt(prompt("dame un numero"))

// alert(factorial(num))

// function factorial(n) {
//     let result = 1
//     for (let i = 1; i <= n; i++) {
//         result = result * i
//     }
//     return result
// }


//10

// import { calcularAreaCirculo, calcularAreaTriangulo, calcularAreaCuadrado } from "./operaciones.js"

// let cuandoElUsuarioDiga = "seguir"

// while(cuandoElUsuarioDiga == "seguir") {
//     let figura = prompt("figura para calcular el area")

//     if (figura == "circulo") {
//         let radio = parseFloat(prompt("radio"))
//         alert(`area circulo: ${parseInt(calcularAreaCirculo(radio))}`)
//     }

//     if (figura == "cuadrado") {
//         let lado = parseFloat(prompt("lado"))
//         alert(`area cuadrado: ${parseInt(calcularAreaCuadrado(lado))}`)
//     }

//     if (figura == "triangulo") {
//         let base = parseFloat(prompt("base"))
//         let altura = parseFloat(prompt("altura"))
//         alert(`area triangulo: ${parseInt(calcularAreaTriangulo(base, altura))}`)
//     }

//     if (figura == "salir") {
//         cuandoElUsuarioDiga = "salir"
//     }
// }


//11
// const euToPound = 0.86
// const euToDolar = 1.28611
// const euToYen = 175.84

// let euros = parseFloat(prompt("dame la cantidad en euros"))
// let currency = prompt("a que lo quieres cambiar (dolar, libra, yen)")

// euToCurrency(euros, currency)

// function euToCurrency(euros, currency) {
//     let selected
//     let selectedSymbol
//     if (currency == "dolar") {
//         selected = euToDolar
//         selectedSymbol = "$"
//     }
//     if (currency == "libra") {
//         selected = euToPound
//         selectedSymbol = "£"
//     }
//     if (currency == "yen") {
//         selected = euToYen
//         selectedSymbol = "¥"
//     }

//     document.getElementById("ejercicios").innerHTML = `
//     <div>
//         <label for="">Euros a cambiar: ${euros}€</label>
//         <p>Moneda seleccionada: ${currency}</p>
//         <p>Cantidad en ${selectedSymbol}: ${euros * selected}</p>
//     </div>
//     `
// }


//12
let year = parseInt(prompt("Dame un año:"))

isLeap(year) ? alert(`El año ${year} es bisiesto`) : alert(`El año ${year} no es bisiesto`)

function isLeap(year) {
    return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0 
}