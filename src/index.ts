/*
3) Se necesita vender los pasajes de un colectivo.
El colectivo tiene 20 filas de 3 butacas cada uno
Por convención se pone un 0 en el asiento libre 
y un 1 en el ya vendido. Cuando los pasajes se ponen 
a la venta están todos los asientos libres 
Cuando una persona quiere comprar se muestra los 
lugares desocupados y se le asigna un asiento elegido 
por el pasajero
*/
let asientos = new Array(60)

let inicializarAsientos = function (asientos: number[]) {
  for(let asiento = 0; asiento <60;asiento++){
    asientos[asiento] = 0;
  }
}


let venderAsiento = function (asientos[]: number) {
  
  for(let asiento = 0; asiento <60;asiento++){
    if (asientos[asiento] === 0){
      console.log(asientos[asiento])
    }
    // let vender = prompt("Asiento?");
    asientos[vender] = 1;
  }
}
inicializarAsientos;
venderAsiento
