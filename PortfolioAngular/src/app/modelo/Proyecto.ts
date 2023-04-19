export class Proyecto {
    id?: any;
    nombre_proyecto: String;
    fecha_creacion: String;
    descripcion: String;
    url_imagen: String;
    url_repositorio: String;
    url_proyecto: String;
    persona_id: number;

    constructor (nombre_proyecto: String, fecha_creacion: String, descripcion: String, url_imagen: String, url_repositorio: String, url_proyecto: String, persona_id: number){
        this.nombre_proyecto = nombre_proyecto;
        this.fecha_creacion = fecha_creacion;
        this.descripcion = descripcion;
        this.url_imagen = url_imagen;
        this.url_repositorio = url_repositorio;
        this.url_proyecto = url_proyecto;
        this.persona_id = persona_id;
    }
}