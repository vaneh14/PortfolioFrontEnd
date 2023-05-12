export class Experiencia {
    id?: any;
    nombre_puesto: string;
    nombre_empresa: string;
    fecha_inicio: string;
    fecha_fin: string;
    descripcion: string;
    persona_id: number;

    constructor (nombre_puesto: string, nombre_empresa: string, fecha_inicio: string, fecha_fin: string, 
                 descripcion: string, persona_id: number){
        this.nombre_puesto = nombre_puesto;
        this.nombre_empresa = nombre_empresa;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
        this.descripcion = descripcion;
        this.persona_id = persona_id;
    }
}