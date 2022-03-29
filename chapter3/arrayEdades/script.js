let parrafo = document.querySelector("#resultado")

let nombres = ["Ana", "Daniel", "Daniela", "Francisco", "Gabriela", "Jacobo", "Jorge", "José", "Juan", "Juana", "Mariana", "Mateo", "Nicolás", "Samuel", "Sergio", "Sofía", "Tomás"]

let edades = []

for (let i = 0; i < 17; i++){
    let edad;
    do{
        edad = Number(prompt(`Ingrese la edad de ${nombres[i]}`))
    }while(isNaN(edad) || edad < 10 || edad > 20);

    edades.push(edad)
}
suma = 0
for (let i = 0; i < 17; i++){
    suma = suma + edades[i]
}

parrafo.innerHTML= `El promedio de las edades es ${suma/17}`

