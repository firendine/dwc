
let fecha = new Date();
let saludo = "";

//alert(fecha);

let mes = fecha.getMonth();

let dia = fecha.getDate();
let diaSemana = fecha.getDay();

switch(diaSemana){
    case 0: diaSemana="Lunes";
        break;
    case 1: diaSemana="Martes";
        break;
    case 2: diaSemana="Miercoles";
        break;
    case 3: diaSemana="Jueves";
        break;
    case 4: diaSemana="Viernes";
        break;
    case 5: diaSemana="Sabado";
        break;
    case 6: diaSemana="Domingo";
        break;
}

var meses =["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

saludo += "Buenos días, hoy es " +diaSemana +" "+dia+ " de " +meses[mes];

alert(saludo);


