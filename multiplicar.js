
function generarTablas() {
    let numero = document.getElementById("txtNumero").value;
    let contenido = "";

    for (let i = 1; i <= 10; i++) {
        contenido += "<div class='fila'>" + numero + " × " + i + " = " + (numero * i) + "</div>";
    }

    let contenedor = document.getElementById("contenedorTabla");
    contenedor.innerHTML = contenido;
}
