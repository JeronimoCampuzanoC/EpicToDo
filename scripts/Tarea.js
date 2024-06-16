export class Tarea {
  constructor(titulo, descripcion, fechaLimite, categoria, importancia, esRecordatorio) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.fechaLimite = fechaLimite;
    this.categoria = categoria;
    this.importancia = importancia;
    this.esRecordatorio = esRecordatorio;
  }
}