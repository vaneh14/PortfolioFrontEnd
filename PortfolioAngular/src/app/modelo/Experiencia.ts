export class Experiencia {
    id?: number;
    nombre_puesto: String;
    nombre_empresa: String;
    fecha_inicio: String;
    fecha_fin: String;
    descripcion: String;

    constructor (nombre_puesto: String, nombre_empresa: String, fecha_inicio: String, fecha_fin: String, descripcion: String){
        this.nombre_puesto = nombre_puesto;
        this.nombre_empresa = nombre_empresa;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
        this.descripcion = descripcion;
    }
}