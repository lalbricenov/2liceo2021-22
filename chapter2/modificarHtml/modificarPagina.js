// Creo una variable que apunte
// hacia el h1 en el que se va a
// hacer el saludo
let h1Saludo = document.querySelector("#saludo")
let nombre = prompt("Ingrese su nombre")

h1Saludo.innerHTML = `Hola ${nombre}`
h1Saludo.style.color = "green"
console.log(h1Saludo)