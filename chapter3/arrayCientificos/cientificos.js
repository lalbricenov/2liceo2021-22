let contenedor = document.querySelector("#cientificos")
let html = ""
let ulrImgs = ["https://museovirtual.csic.es/salas/magnetismo/biografias/img/1volta.jpg", "https://www.biografiasyvidas.com/biografia/n/fotos/newton.jpg", "https://www.bbvaopenmind.com/wp-content/uploads/2016/01/bbva-openmind-schrodinger-3.jjpg_-1.jpg", "https://upload.wikimedia.org/wikipedia/commons/f/f1/Charles_Darwin_portrait.jpg"]
let nombres = ["Alessandro Volta", "Isaac Newton", "Erwin Schrödinger", "Charles Darwin"]

for (let i = 0; i < ulrImgs.length; i++) {
    html = html + `<div class="cientifico"><img src="${ulrImgs[i]}"><p>${nombres[i]}</p></div>`    
}
contenedor.innerHTML = html;