export class Educacion {

    //Atributos
    id?: any;
    nombre_curso: String;
    fecha_inicio: String;
    fecha_fin: String;
    descripcion: String;
    lenguaje: String;
    url_curso: String;
    persona_id: number;

    //Constructor
    constructor (nombre_curso: String, fecha_inicio: String, fecha_fin: String, descripcion: String, 
                 lenguaje: String, url_curso: String, persona_id: number){
        this.nombre_curso = nombre_curso;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
        this.descripcion = descripcion;
        this.lenguaje = lenguaje;
        this.url_curso = url_curso;
        this.persona_id = persona_id;
    }

}