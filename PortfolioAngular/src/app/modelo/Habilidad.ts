export class Habilidad {
    id?: number;
    nombre_habilidad: String;
    porcentaje: String;
    persona_id: number;

    constructor (nombre_habilidad: String, porcentaje: String, persona_id: number){
        this.nombre_habilidad = nombre_habilidad;
        this.porcentaje = porcentaje;
        this.persona_id = persona_id;
    }
}