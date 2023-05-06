export class Habilidad {
    id?: any;
    nombre_habilidad: string;
    porcentaje: string;
    persona_id: number;

    constructor (nombre_habilidad: string, porcentaje: string, persona_id: number){
        this.nombre_habilidad = nombre_habilidad;
        this.porcentaje = porcentaje;
        this.persona_id = persona_id;
    }
}