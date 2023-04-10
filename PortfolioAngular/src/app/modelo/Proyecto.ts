export class Proyecto {
    id?: number;
    nombre_proyecto: String;
    url_repositorio: String;
    url_proyecto: String;

    constructor (nombre_proyecto: String, url_repositorio: String, url_proyecto: String){
        this.nombre_proyecto = nombre_proyecto;
        this.url_repositorio = url_repositorio;
        this.url_proyecto = url_proyecto;
    }
}