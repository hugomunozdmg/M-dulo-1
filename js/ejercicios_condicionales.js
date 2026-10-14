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


//13
// let sentence = prompt("dame una frase")
// let middle

// if (sentence.length % 2 == 0) {
//     middle = sentence.substring(sentence.length / 2 - 1, sentence.length / 2 + 1)
// } else {
//     middle = sentence.substring(parseInt(sentence.length / 2), parseInt(sentence.length / 2) + 1)
// }

// alert(middle)


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