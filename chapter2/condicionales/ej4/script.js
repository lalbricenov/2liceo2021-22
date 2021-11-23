let urlVolta = "https://museovirtual.csic.es/salas/magnetismo/biografias/img/1volta.jpg"
let urlNewton = "https://www.biografiasyvidas.com/biografia/n/fotos/newton.jpg"
let imgHtml = document.querySelector("#imagenCientifico")

let nombre = prompt("Ingrese el nombre del científico")
if (nombre == "Volta"){
    imgHtml.src = urlVolta
}else{
    imgHtml.src = urlNewton
}