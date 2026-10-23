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