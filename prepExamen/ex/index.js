



function getProducto(id) {
/*Paso (1) */ http = new XMLHttpRequest();
/*Paso (2) */ http.open("GET", "http://localhost:3000/articulos/" + id, true) //articulos es el nombre del array JSON
/*Paso (3) */ http.send()
/*Paso (4) */ http.addEventListener('readydystatechange', function () {
    if (http.readyState === 4 && http.status === 200) { //status debe ser siempre 200 para que todo haya ido bien
        document.innerHTML = http.responseText;
    }
    })
}

