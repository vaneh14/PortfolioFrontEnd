export class Proyecto {
    id?: any;
    nombre_proyecto: string;
    descripcion: string;
    url_imagen: string;
    url_repositorio: string;
    url_proyecto: string;
    persona_id: number;

    constructor (nombre_proyecto: string, descripcion: string, url_imagen: string, 
                 url_repositorio: string, url_proyecto: string, persona_id: number){
        this.nombre_proyecto = nombre_proyecto;
        this.descripcion = descripcion;
        this.url_imagen = url_imagen;
        this.url_repositorio = url_repositorio;
        this.url_proyecto = url_proyecto;
        this.persona_id = persona_id;
    }
}