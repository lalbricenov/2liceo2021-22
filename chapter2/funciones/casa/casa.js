function pisoBase(){
    console.log("________");
    console.log("__|  |__");
    console.log("__|  |__");
}
function casa(nPisos){
    techo();
    piso();
    pisoBase();
}
let nPisos = parseInt(prompt("Ingrese el numero de pisos"))
casa(nPisos);