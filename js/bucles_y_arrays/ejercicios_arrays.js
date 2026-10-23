
//1
// let values = ["valor1", "valor2", "valor3", "valor4", "valor5", "valor6", "valor7", "valor8", "valor9", "valor10"]

// for (let value = 0; value < values.length; value++) {
//     document.getElementById("ejercicios").innerHTML +=
//         `<p>${values[value]}</p>`
// }

//2
// let values = []

// for (let i = 0; i < 3; i++) {
//     values.push(prompt("inserte un valor"))
// }

// values.push(values.splice(0, 1))

// for (let value = 0; value < values.length; value++) {
//     document.getElementById("ejercicios").innerHTML +=
//         `<p>${values[value]}</p>`
// }

//3
// let values = []

// for(let i = 20; i >=11; i--){
//     values.push(i)
// }

// for (let value = 0; value < values.length; value++) {
//     document.getElementById("ejercicios").innerHTML +=
//         `<p>${values[value]}</p>`
// }


//5

// let months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio",
//     "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
// ]

// let eleccion = parseInt(prompt("di un numero del 1 al 12"))

// alert(`Has elegido ${months[eleccion - 1]}`)


//6
//modificado, buscar el mas pequeño de 20 numeros
// let nums = []
// let minNum = 100000000000

// for (let i = 0; i < 20; i++) {
//     // nums.push(parseFloat(prompt("dame un numero")))
//     nums.push(parseInt(Math.random() * 100))
// }

// console.log(nums)

// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < minNum) minNum = nums[i]
// }

// console.log(minNum)


//7
// let nums = []
// let suma = 0
// for (let i = 0; i < 10; i++) {
//     nums.push(parseInt(Math.random() * 100))
// }

// for (let i = 0; i < nums.length; i++) {
//     suma += nums[i]
// }

// alert(`la media es: ${suma / nums.length}`)


//8
// let ages = []
// let suma = 0
// for (let i = 0; i < 20; i++) {
//     ages.push(parseInt(Math.random() * (35 - 18) + 18))
// }

// for (let i = 0; i < ages.length; i++) {
//     suma += ages[i]
// }

// alert(`la media es: ${suma / ages.length}`)

//9
// let values = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// let userNum = 0

// while (userNum < 10) {
//     userNum = parseInt(prompt(`
//         ${values}
//         Introduce un numero del 0 al 9
//         `))

//     values[userNum] = values[userNum] * 2
// }

//10
// let nums = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// let userNum = 0

// while (userNum >= 0) {
//     userNum = parseInt(prompt(`
//         ${nums}
//         Introduce un numero del 0 al 10
//         `))

//     if (userNum > 10) {
//         alert("ese numero es incorrecto")
//     } else if (userNum < 0) {
//         for (let i = 0; i < 11; i++) {
//             document.getElementById("ejercicios").innerHTML +=
//                 `<p>${i} || ${nums[i]}</p>`
//         }
//     } else {
//         nums[userNum] += 1
//     }
// }


//13

// let list = ["C3PO", "Luck Skywalker", "Chewaka"]
// list.push("Leia")
// list.push("Yoda")

// document.getElementById("ejercicios").innerHTML = `
// <ul id='list'></ul>
// <p id="number"></p>
// `

// let newMember = prompt("introduzca un personaje de star wars")
// let memberAlreadyExist = false

// for (let i = 0; i < list.length; i++) {
//     if (newMember == list[i]) {
//         memberAlreadyExist = true
//         i = list.length
//     }
// }

// if (!memberAlreadyExist) {
//     list.push(newMember)
// } else {
//     alert("el personaje ya esta incluido")
// }

// for (let i = 0; i < list.length; i++) {
//     document.getElementById("list").innerHTML += `<li>${list[i]}</li>`
// }

// document.getElementById("number").innerText = `La lista tiene ${list.length}`


//14
// let nums = []
// let quantityNums = [0, 0, 0, 0, 0, 0, 0, 0, 0]


// for (let i = 0; i < 20; i++) {
//     nums.push(parseInt(Math.random()*(9) + 1))
// }

// for (let i = 0; i < nums.length; i++) {
//     for (let j = 1; j < quantityNums.length + 1; j++) {
//         if (j == nums[i]) quantityNums[j - 1]++
//     }
// }
// console.log(nums)

// for (let i = 0; i < quantityNums.length; i++) {
//     document.getElementById("list").innerHTML += `<p>${i + 1}:${quantityNums[i]}</p>`
// }

//15
// let enteros = []
// let decimales = []
// let numeroUsuario = 0

// while (numeroUsuario >= 0) {
//     numeroUsuario = parseFloat(prompt("dame un numero"))
//     let hasDecimal = numeroUsuario !== parseInt(numeroUsuario)
//     if (numeroUsuario > 0) {
//         if (hasDecimal) decimales.push(numeroUsuario)
//         if (!hasDecimal) enteros.push(numeroUsuario)
//     }
// }

// let sumaEnteros = 0
// for (let n = 0; n < enteros.length; n++) {
//     sumaEnteros += enteros[n]
// }

// let sumaDecimales = 0
// for (let n = 0; n < decimales.length; n++) {
//     sumaDecimales += decimales[n]
// }

// let media =
//     (sumaEnteros + sumaDecimales) /
//     (enteros.length + decimales.length)


// alert(`
//     Hay ${decimales.length} decimales
//     Hay ${enteros.length} enteros
//     Suma de los enteros: ${sumaEnteros}
//     La media de todos los numeros es: ${media}
//     `)


//16
// let names = ["jose", "felipe", "carla", "estefania", "maria", "jorge"]
// let grades = [3, 4, 7, 7, 6, 3]
// let namesWithMaxGrade = []
// let namesWithMinGrade = []
// let namesOverMedia = []
// let salir = false
// let media = 0
// let maxGrade = 0
// let minGrade = 10

// while (!salir) {
//     let name = prompt("Nombre del alumno")
//     salir = name == "salir"
//     if (!salir) {
//         let grade = parseFloat(prompt(`nota del alumno ${name}`))
//         if (grade >= 0 && grade <= 10) {
//             grades.push(grade)
//             names.push(name)
//         } else {
//             alert("nota no valida")
//         }
//     }
// }

// media = grades.reduce((a, b) => a + b) / grades.length

// for (let g = 0; g < grades.length; g++) {
//     if (grades[g] > media) namesOverMedia.push(names[g])
// }

// for (let g = 0; g < grades.length; g++) {
//     if (grades[g] > maxGrade) maxGrade = grades[g]
//     if (grades[g] < minGrade) minGrade = grades[g]
// }

// for (let g = 0; g < grades.length; g++) {
//     if (grades[g] == maxGrade) namesWithMaxGrade.push(names[g])
//     if (grades[g] == minGrade) namesWithMinGrade.push(names[g])
// }

// alert(`
//     ${names}
//     ${grades}
//     Nota maxima: ${maxGrade}
//     ${namesWithMaxGrade}
//     Nota minima: ${minGrade}
//     ${namesWithMinGrade}
//     Media: ${media}
//     `)

