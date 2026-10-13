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

//23

// year/4 bisiesto
// year/100 no bisiesto
// year/400 bisiesto

const year = parseInt(prompt("Dame un año:"))

if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
    alert(`${year} es bisiesto`)
} else {
    alert(`${year} no es bisiesto`)
}

