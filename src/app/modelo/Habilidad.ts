export class Habilidad {
    id?: any;
    nombre_habilidad: string;
    porcentaje: string;
    url_logo: string;
    tipo: string;
    persona_id: number;

    constructor (nombre_habilidad: string, porcentaje: string, url_logo: string, tipo: string, 
                persona_id: number){
        this.nombre_habilidad = nombre_habilidad;
        this.porcentaje = porcentaje;
        this.url_logo = url_logo;
        this.tipo = tipo;
        this.persona_id = persona_id;
    }
}