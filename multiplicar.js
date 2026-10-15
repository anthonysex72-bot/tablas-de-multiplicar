
function generarTablas() {
    let contenido = "";

    for (let i = 1; i <= 10; i++) {
        contenido += "<div class='fila'>3 × " + i + " = " + (3 * i) + "</div>";
    }

    let contenedor = document.getElementById("contenedorTabla");
    contenedor.innerHTML = contenido;
}
