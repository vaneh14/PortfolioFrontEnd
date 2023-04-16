export class Proyecto {
    id?: any;
    nombre_proyecto: String;
    url_repositorio: String;
    url_proyecto: String;
    persona_id: number;

    constructor (nombre_proyecto: String, url_repositorio: String, url_proyecto: String, persona_id: number){
        this.nombre_proyecto = nombre_proyecto;
        this.url_repositorio = url_repositorio;
        this.url_proyecto = url_proyecto;
        this.persona_id = persona_id;
    }
}