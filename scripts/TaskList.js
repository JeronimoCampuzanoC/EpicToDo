class Tabla {
    constructor() {
        this.tareas = []; // Array para almacenar las tareas
    }

    // Método para agregar una nueva tarea
    agregarTarea(tarea) {
        this.tareas.push(tarea);
    }

    // Método para eliminar una tarea por su índice en el array
    eliminarTarea(indice) {
        if (indice >= 0 && indice < this.tareas.length) {
            this.tareas.splice(indice, 1);
        } else {
            console.error("Índice no válido para eliminar la tarea");
        }
    }

    // Método para modificar una tarea por su índice en el array
    modificarTarea(indice, nuevaTarea) {
        if (indice >= 0 && indice < this.tareas.length) {
            this.tareas[indice] = nuevaTarea;
        } else {
            console.error("Índice no válido para modificar la tarea");
        }
    }

    // Método para ordenar las tareas por nombre
    ordenarTareasNombre() {
        this.tareas.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }

    // Método para ordenar las tareas por importancia
    ordenarTareasImportancia() {
        this.tareas.sort((a, b) => a.importancia - b.importancia);
    }

    // Método para ordenar las tareas por fecha de creación
    ordenarTareasFecha() {
        this.tareas.sort((a, b) => a.fechaCreacion - b.fechaCreacion);
    }
}