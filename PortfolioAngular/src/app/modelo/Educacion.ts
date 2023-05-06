export class Educacion {

    //Atributos
    id?: any;
    nombre_curso: string;
    fecha_inicio: string;
    fecha_fin: string;
    descripcion: string;
    lenguaje: string;
    url_curso: string;
    persona_id: number;

    //Constructor
    constructor (nombre_curso: string, fecha_inicio: string, fecha_fin: string, descripcion: string, 
                 lenguaje: string, url_curso: string, persona_id: number){
        this.nombre_curso = nombre_curso;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
        this.descripcion = descripcion;
        this.lenguaje = lenguaje;
        this.url_curso = url_curso;
        this.persona_id = persona_id;
    }

}