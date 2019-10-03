
let resultado = false;
do {
    let numero = Number(prompt("Introduce un número"));

    if (Number.isInteger(numero) && (numero>0 && numero<10)) {
        //document.write("todo bien");

        let tabla = "<table border=1><th>Tabla del " + numero + "</th>";

        for (let i = 0; i <= 10; i++) {
            tabla += "<tr><td>" + numero + " x " + i + " = " + numero * i + "</td></tr>";
        }

        tabla += "</table>"

        document.write(tabla);
        resultado = true;
    } else {
        alert("Introduce un número válido");
        resultado = false;
    }

} while (resultado == false);