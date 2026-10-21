//1
// const age = parseInt(prompt("dime tu edad"))
// let year = 0

// while (year < age) {
//     year++
//     document.getElementById("ejercicios").innerHTML += "<p>Feliz cumpleaños</p>"
// }

//2
// const num = parseInt(prompt("dime un numero"))
// let index = 0
// let result = 0

// while (index < num) {
//     index++
//     result += index
// }

// document.getElementById("ejercicios").innerHTML = `<p>${result}</p>`

//3
// const final = 20
// let num = 10

// while (num <= final) {
//     document.getElementById("ejercicios").innerHTML += `
//     <p>${num}</p>
//     <p style="height:20px"></p>
//     `
//     num++
// }

//4
// let suma = 0

// for (let i = 1; i <= 10; i++) {
//     suma += parseFloat(prompt(`dame el numero ${i}`))
// }

// alert(`La media es: ${suma / 10}`)

//5
// let num
// let suma = 0

// while (num !== 0) {
//     num = parseFloat(prompt("dame un numero"))
//     suma += num
// }

// alert(`la suma es: ${suma}`)

//6
// let factorial = 1

// for (let i = 1; i <= 10; i++) {
//     factorial = factorial * i
//     document.getElementById("ejercicios").innerHTML += `<p>${i} | ${factorial}</p>`
// }

//7
// let num
// let suma = 0

// while (num !== 0) {
//     num = parseFloat(prompt("dame un numero"))
//     if (num >= 0) {
//         suma += num
//     } else {
//         alert("no valen numeros negativos")
//     }
// }
// alert(`la suma es: ${suma}`)


//8
// let userOption = "valor-inicio"

// while (userOption !== "P" && userOption !== "I") {
//     if (userOption !== "valor-inicio") alert("ese valor no sirve")
//     userOption = prompt("Mostrar pares (P) o impares (I)").toUpperCase()
// }
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 0 && userOption == "P") document.getElementById("ejercicios").innerHTML += `<p>${i}</p>`
//     if (i % 2 !== 0 && userOption == "I") document.getElementById("ejercicios").innerHTML += `<p>${i}</p>`
// }

//9
// for (let i = 1; i <= 12; i++) {
//     document.getElementById("ejercicios").innerHTML += `<p>${i} | ${i % 2 == 0 ? i * i * i : i * i}</p>`
// }

//10
// for (let i = 1; i <= 100; i++) {
//     document.getElementById("ejercicios").innerHTML += `<p>${i % 5 !== 0 ? i : ""}</p>`
// }

//11
// let num
// let oppositeNum = ""

// while (num != 0) {
//     num = prompt("dame un numero")
//     oppositeNum = ""
//     if (parseInt(num) && parseInt(num) > 0 && parseInt(num) == parseFloat(num)) {
//         for (let i = num.length - 1; i >= 0; i--) {
//             oppositeNum += num.substring(i, i + 1)
//         }

//         alert(oppositeNum)
//     }
// }

//12
// let num = prompt("dame un numero de 3 digitos")

// if (num.length == 3) {
//     let suma = 0
//     for (let i = 0; i < 3; i++) {
//         suma += parseInt(num.substring(i, i + 1))
//     }
//     alert(suma)
// } else {
//     alert("ese numero no tiene 3 digitos")
// }


//13
// let date = window.prompt("Dime la fecha de cumpleaños (dd-mm-aaaa):")

// let d = parseInt(date.substring(0, 2))
// let m = parseInt(date.substring(3, 5))
// let a = parseInt(date.substring(6, 11))

// let suma1 = (d + m + a).toString()

// let suma2 = 0
// for (let i = 0; i < suma1.length; i++) {
//     suma2 += parseInt(suma1.substring(i, i + 1))
// }

// let suma3 = 0
// for (let i = 0; i < suma2.toString().length; i++) {
//     suma3 += parseInt(suma2.toString().substring(i, i + 1))
// }

// alert(suma3)


//14
// let userNum = parseInt(prompt("dime un numero"))
// let line = ""

// for (let i = 1; i <= userNum; i++) {
//     line += "*"
//     console.log(line)
// }

//15
// let password = prompt("contraseña:")
// let passwordMinimumLength = password.length >= 8
// let passwordContentFirstCapitalLetter =
//     password.substring(0, 1).toLocaleUpperCase() == password.substring(0, 1)

// let passwordContentNumbers = false

// for (let i = 0; i < password.length; i++) {
//     let c = password.substring(i, i + 1)
//     if (parseInt(c)) {
//         passwordContentNumbers = true
//         i = password.length
//     }
// }

// let passwordCorrect =
//     passwordMinimumLength &&
//     passwordContentNumbers &&
//     passwordContentFirstCapitalLetter


// if (passwordCorrect) {
//     alert("la contraseña es correcta")
// } else {
//     if (!passwordMinimumLength) alert("la contraseña debe tener al menos 8 caracteres")
//     if (!passwordContentNumbers) alert("la contraseña debe tener numeros")
//     if (!passwordContentFirstCapitalLetter) alert("la primera letra debe ser mayuscula")
// }


//16
// let date = prompt("dame una fecha (dd-mm-aaaa)")

// let d = parseInt(date.substring(0, 2))
// let m = parseInt(date.substring(3, 5))
// let a = parseInt(date.substring(6, 11))

// let aBisiesto = (a % 4 == 0 && (a % 100 != 0 || a % 400 == 0))

// let days31 = [1, 3, 5, 7, 8, 10, 12]
// let days30 = [4, 6, 9, 11]
// let days28 = 2
// let daysMonth


// for (let i = 0; i < days31.length; i++) {
//     if (m == days31[i]) {
//         daysMonth = 31
//     }
// }

// for (let i = 0; i < days30.length; i++) {
//     if (m == days30[i]) {
//         daysMonth = 30
//     }
// }

// if (m == 2 && aBisiesto) {
//     daysMonth = 29
// } else if (m == 2) {
//     daysMonth = 28
// }

// if (d > daysMonth || m > 12) {
//     alert("año invalido")
// } else {

//     if (d == 31 && daysMonth == 31 ||
//         d == 30 && daysMonth == 30 ||
//         d == 29 && daysMonth == 29 ||
//         d == 28 && daysMonth == 28
//     ) {
//         d = 1
//         if (m == 12) {
//             m = 1
//             a = a + 1
//         } else {
//             m = m + 1
//         }
//     } else {
//         d = d + 1
//     }

//     alert(`${d}/${m}/${a}`)
// }

//17
// let pyramidHeigth = parseInt(prompt("altura de la piramide"))
// let symbol = prompt("simbolo")

// for (let i = 1; i < 2 * pyramidHeigth; i += 2) {
//     let level = symbol + "  "
//     for (let j = 1; j < i; j++) {
//         level += symbol + "  "
//     }
//     document.getElementById("ejercicios").innerHTML += `<p>${level + i}</p>`
// }
// document.getElementById("ejercicios").style.display = "flex"
// document.getElementById("ejercicios").style.flexDirection = "column"
// document.getElementById("ejercicios").style.alignItems = "center"


//Ejercicio largo

