//1

// let num1 = parseInt(prompt("Introduce el primero numero:"))
// let num2 = parseInt(prompt("Introduce el segundo numero:"))

// let biggerNum = num1 > num2 ? num1 : num2
// let smallerNum = num1 < num2 ? num1 : num2

// alert(`
//     Suma: ${num1 + num2}
//     Resta:  ${num1 - num2}
//     Multiplicacion:  ${num1 * num2}
//     Media:  ${(num1 + num2) / 2}
//     El numero mas grande es: ${biggerNum}
//     El numero mas pequeño es: ${smallerNum}
//     `)



//2
// const age = parseInt(prompt("Dame tu edad"))

// if(age <= 8){
//     alert("pasa al tobogán")
// }else {
//     alert("eres demasiado mayor")
// }


//3
// const num1 = parseInt(prompt("dame el primer numero"))
// const num2 = parseInt(prompt("dame el segundo numero"))
// const num3 = parseInt(prompt("dame el tercer numero"))


// if (num1 + num2 == num3) {
//     alert(`${num1}+${num2}=${num3}`)
// } else {
//     alert(`${num1}+${num2}≠${num3}`)
// }


//4
// const num1 = parseInt(prompt("dame el primer numero"))
// const num2 = parseInt(prompt("dame el segundo numero"))
// const num3 = parseInt(prompt("dame el tercer numero"))

// // if(Math.abs(num1-num2) == 20 || Math.abs(num1-num3 == 20) || Math.abs(num2-num3 == 20)){

// // }

// if (num1 - num2 == 20) alert(`${num1}-${num2}=20`)
// if (num1 - num3 == 20) alert(`${num1}-${num3}=20`)
// if (num2 - num1 == 20) alert(`${num2}-${num1}=20`)
// if (num2 - num3 == 20) alert(`${num2}-${num3}=20`)
// if (num3 - num1 == 20) alert(`${num3}-${num1}=20`)
// if (num3 - num2 == 20) alert(`${num3}-${num2}=20`)


//5
// const day = prompt("dame un dia de la semana").toLowerCase()
// //solucion 1
// switch (day) {
//     case "lunes":
//     case "martes":
//     case "miércoles":
//     case "jueves":
//     case "viernes":
//         alert("hoy es " + day)
//         break
//     case "sábado":
//     case "domingo":
//         alert("hoy es fin de semana")
//         break
// }
// //solucion 2
// if (day == "sábado" || day == "domingo") {
//     alert("hoy es fin de semana")
// } else {
//     alert("hoy es " + day)
// }


//6
// let num = parseFloat(prompt("dame un número"))

// if (num >= 1) {
//     alert(`
//         ${num}**=${Math.pow(num, 2)}
//         ${num}***=${num * num * num}
//         `)
// }


//7
// const numerador = parseInt(prompt("dame el numerador"))
// const denominador = parseInt(prompt("dame el denominador"))

// if (denominador !== 0) {
//     alert(`${numerador}/${denominador}=${numerador / denominador}`)
// } else {
//     alert("no se puede dividir por 0")
// }


//8
// const num1 = parseInt(prompt("dame el primer numero"))
// const num2 = parseInt(prompt("dame el segundo numero"))

// if(num1 > num2) alert(`${num1}>${num2}`)
// if(num1 < num2) alert(`${num1}<${num2}`)
// if(num1 == num2) alert(`${num1}=${num2}`)


//9
// const temperature = prompt("Qué temperatura hace")
// //solucion 1
// if (temperature > 40) {
//     alert("vete a otro sitio")
// } else if (temperature >= 30) {
//     alert("enciende el aire acondicionado")
// } else if (temperature >= 20) {
//     alert("no hagas nada")
// } else if (temperature >= 10) {
//     alert("enciende la calefaccion")
// } else {
//     alert("vete que hiela")
// }
// //solucion 2
// if (temperature > 40 || temperature < 10) alert("vete a otro sitio")
// if (temperature >= 30 && temperature < 40) alert("enciende el aire acondicionado")
// if (temperature >= 20 && temperature < 30) alert("no hagas nada")
// if (temperature >= 10 && temperature < 20) alert("enciende la calefaccion")

//10
// const num1 = prompt("dame el primer numero")
// const num2 = prompt("dame el segundo numero")

// if (num1 == num2) alert(0)
// if (num1 % 6 == num2 % 6) alert(num1 < num2 ? num1 : num2)
// if (num1 % 6 !== num2 % 6) alert(num1 > num2 ? num1 : num2)

//11
// const num1 = parseInt(prompt("dame el primer numero entre 25 y 75"))
// const num2 = parseInt(prompt("dame el segundo numero entre 25 y 75"))

// if ((num1 < 25 || num1 > 75) || (num2 < 25 || num2 > 75)) {
//     alert("te dije entre 25 y 75")
// } else {
//     let digitoNum1_1 = num1.toString().substring(0, 1)
//     let digitoNum1_2 = num1.toString().substring(1, 2)
//     let digitoNum2_1 = num2.toString().substring(0, 1)
//     let digitoNum2_2 = num2.toString().substring(1, 2)

//     if (digitoNum1_1 == digitoNum2_1 ||
//         digitoNum1_1 == digitoNum2_2 ||
//         digitoNum1_2 == digitoNum2_1 ||
//         digitoNum1_2 == digitoNum2_2
//     ) {
//         alert("tienen digitos en comun")
//     } else {
//         alert("no tienen digitos en comun")
//     }
// }

//12
// const position = parseInt(prompt("dime el puesto"))
//a
// if (position == 1) {
//     alert("Ganaste")
// }else{
//     alert("lo importante es participar")
// }

//b
// if (position == 1) alert("Medalla de oro")
// if (position == 2) alert("Medalla de plata")
// if (position == 3) alert("Medalla de bronce")
// if (position > 3) alert("lo importante es participar")

// //c
// switch (position) {
//     case 1: alert("Medalla de oro")
//         break
//     case 2: alert("Medalla de plata")
//         break
//     case 3: alert("Medalla de bronce")
//         break
//     default: alert("lo importante es participar")
// }

// //d
// if (position == 1 || position == 2 || position == 3) {
//     alert("Sube al podium")
// } else {
//     alert("se acabó la carrera")
// }

//13
// let sentence = prompt("dame una frase")
// let middle

// if (sentence.length % 2 == 0) {
//     middle = sentence.substring(sentence.length / 2 - 1, sentence.length / 2 + 1)
// } else {
//     middle = sentence.substring(parseInt(sentence.length / 2), parseInt(sentence.length / 2) + 1)
// }

// alert(middle)

//14
// const date = new Date
// alert(date.toDateString())

//15
// const iceCreamNumber = parseInt(prompt("Cuantos helados quieres"))
// const price = 2

// if (iceCreamNumber > 10) {
//     alert(`
//         helados: ${iceCreamNumber + 1}
//         pagado: ${price * iceCreamNumber}
//         `)
// } else {
//     alert(`
//         helados: ${iceCreamNumber}
//         pagado: ${price * iceCreamNumber}
//         `)
// }


//17
// const num1 = parseInt(prompt("dame el primer numero"))
// const num2 = parseInt(prompt("dame el segundo numero"))
// const num3 = parseInt(prompt("dame el tercer numero"))

// let biggestNum = num1 > num2 ? num1 : num2
// biggestNum = biggestNum > num3 ? biggestNum : num3
// alert(`el numero mas grande es ${biggestNum}`)


//19
// const test1 = parseFloat(prompt("nota del examen 1"))
// const test2 = parseFloat(prompt("nota del examen 2"))
// const test3 = parseFloat(prompt("nota del examen 3"))

// if (test1 > 5 || test2 > 5 || test3 > 5) {
//     alert("nota no valida")
// } else {
//     let bestGrade = test1 > test2 ? test1 : test2
//     let finalGrade = bestGrade + test3

//     if (finalGrade == 10) alert("matricula")
//     if (finalGrade >= 9 && finalGrade < 10) alert("sobresaliente")
//     if (finalGrade >= 7 && finalGrade < 9) alert("notable")
//     if (finalGrade >= 6 && finalGrade < 7) alert("bien")
//     if (finalGrade >= 5 && finalGrade < 6) alert("suficiente")
//     if (finalGrade < 5) alert("suspenso")
// }

//20
// const temperature = parseFloat(prompt("dame la temperatura que quieres convertir"))
// const convertTo = prompt("Elije si lo quieres convertir a celsius (C) o farenheit (F)").toUpperCase()

// if (convertTo == "C") {
//     let temperatureToC = (temperature - 32) * 5 / 9
//     alert(`La temperatura ${temperature}F = ${temperatureToC}C`)
// } else if (convertTo == "F") {
//     let temperatureToF = temperature * 9 / 5 + 32
//     alert(`La temperatura ${temperature}C = ${temperatureToF}F`)
// } else {
//     alert("conversion invalida")
// }


//22
// const age = parseInt(prompt("Dime tu edad"))
// const dayPrice = 25
// const weekPrice = 150
// let userName
// let surname
// let cityPickUp
// let daysNumber
// let totalCost

// if (age >= 18) {
//     let haveDriveLicense = prompt("tienes carnet de conducir") == "si" ? true : false
//     if (haveDriveLicense) {
//         userName = prompt("nombre")
//         surname = prompt("apellido")
//         cityPickUp = prompt("ciudad de recogida")
//         daysNumber = parseInt(prompt("número de días"))

//         let weeksNumber = parseInt(daysNumber / 7)
//         totalCost = weeksNumber * weekPrice + (daysNumber - 7 * weeksNumber) * dayPrice

//         alert(`
//             Nombre: ${userName}
//             Apellido: ${surname}
//             Ciudad de recogida: ${cityPickUp}
//             Número de días: ${daysNumber}
//             Precio final: ${totalCost}
//             `)

//     } else {
//         alert("no puedes alquilar el coche")
//     }
// } else {
//     alert("no puedes alquilar el coche")
// }


//23
// year/4 bisiesto
// year/100 no bisiesto
// year/400 bisiesto

// const year = parseInt(prompt("Dame un año:"))

// if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
//     alert(`${year} es bisiesto`)
// } else {
//     alert(`${year} no es bisiesto`)
// }

//24
// const num = parseInt(prompt("dame un numero de tres digitos"))

// const digit1 = parseInt(num / 100)
// const digit2 = parseInt((num - digit1 * 100) / 10)
// const digit3 = parseInt(num - digit1 * 100 - digit2 * 10)

// const num = prompt("dame un numero de tres digitos")

// const digit1 = parseInt(num.substring(0, 1))
// const digit2 = parseInt(num.substring(1, 2))
// const digit3 = parseInt(num.substring(2, 3))

// if (digit1 % 2 == 0 && digit2 % 2 == 0 && digit3 % 2 == 0) {
//     alert("Todos los digitos son pares")
// } else if (digit1 % 2 !== 0 && digit2 % 2 !== 0 && digit3 % 2 !== 0) {
//     alert("todos son impares")
// } else {
//     alert("hay mezcla")
// }

//25
// const sentence = prompt("dile algo a Bob")

// if (sentence.includes("?!") || sentence.includes("!?")) {
//     alert("eh tranquilizate yo sé lo que hago")
// } else if (sentence.includes("!")) {
//     alert("eh tranquilizate")
// } else if (sentence.includes("?")) {
//     alert("¡Claro!")
// } else if (sentence.length == 0) {
//     alert("vale con que esas tenemos")
// } else {
//     alert("sin más")
// }

//26

const computerChoice = parseInt(Math.random() * 3) + 1

const userChoice = prompt(`
    1 - piedra
    2 - papel
    3 - tijera
    `)

if (computerChoice == 1 && userChoice == 2 ||
    computerChoice == 2 && userChoice == 3 ||
    computerChoice == 3 && userChoice == 1
) {
    alert(`
        1 - piedra
        2 - papel
        3 - tijera
        el ordenador ha elegido: ${computerChoice}
        tú has elegido: ${userChoice}
        has ganado`)
} else if (computerChoice == userChoice) {
    alert(`
        1 - piedra
        2 - papel
        3 - tijera
        el ordenador ha elegido: ${computerChoice}
        tú has elegido: ${userChoice}
        habeis empatado`)
} else {
    alert(`
        1 - piedra
        2 - papel
        3 - tijera
        el ordenador ha elegido: ${computerChoice}
        tú has elegido: ${userChoice}
        has perdido`)
}

