function addTask() {
    // Obtener los valores de los campos de entrada
    var titulo = document.getElementById("titulo").value;
    var descripcion = document.getElementById("descripcion").value;
    var fecha = document.getElementById("fecha").value;
    var categoria = document.getElementById("categoria").value;
    var importancia = document.getElementById("importancia").value;
    var recordatorio = document.getElementById("recordatorio").value;

    // Obtener la tabla y el cuerpo de la tabla
    var tabla = document.getElementById("tabla");
    var tbody = tabla.getElementsByTagName("tbody")[0];

    // Crear una nueva fila
    var fila = tbody.insertRow();

    // Insertar celdas y asignarles valores
    var celda1 = fila.insertCell(0);
    celda1.innerHTML = titulo;

    var celda2 = fila.insertCell(1);
    celda2.innerHTML = descripcion;

    var celda3 = fila.insertCell(2);
    celda3.innerHTML = fecha;

    var celda4 = fila.insertCell(3);
    celda4.innerHTML = categoria;

    var celda5 = fila.insertCell(4);
    celda5.innerHTML = importancia;

    var celda6 = fila.insertCell(5);
    celda6.innerHTML = recordatorio;

    // Limpiar los campos de entrada después de agregar la tarea
    document.getElementById("titulo").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("importancia").value = "";
    document.getElementById("recordatorio").value = "";
}

function abrirmenu() {
    var menu = document.getElementById("menuRecordatorio");
    if (menu.style.display == "block"){
        menu.style.display = "none"; // Ocultar el menú al hacer clic en "menu"
        return;
    }else{
        menu.style.display = "block"; // Mostrar el menú al hacer clic en "menu"
    }
}