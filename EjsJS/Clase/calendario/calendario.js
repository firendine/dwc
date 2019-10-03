let fecha = new Date();

let meses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let diaSemana = fecha.getDay()+3;
let calendario = "";

calendario += "<table border='1'><tr>";
calendario += "<td>L</td>";
calendario += "<td>M</td>";
calendario += "<td>X</td>";
calendario += "<td>J</td>"
calendario += "<td>V</td>";
calendario += "<td>S</td>";
calendario += "<td>D</td>";
calendario += "</tr>";

let dias = 1;
while (dias <= meses[8]) {
    for (let rowSemana = 1; rowSemana <= 6; rowSemana++) {
        calendario += "<tr>";
        for (let celdaDiaSemana = 1; celdaDiaSemana <= 7; celdaDiaSemana++) {
            if (diaSemana <= celdaDiaSemana && dias==1) {
                if (dias > meses[8]) {
                    break;
                } else {
                    calendario += "<td>" + dias + "</td>";
                    dias++;
                }
            } else {
                calendario += "<td>" + "h " + "</td>";

            }
        }
        calendario += "</tr>";
        if (dias > meses["8"]) {
            // break;
        }
    }
}
calendario += "</table>";

document.write(calendario);
document.write(meses[8]);
document.write(diaSemana);