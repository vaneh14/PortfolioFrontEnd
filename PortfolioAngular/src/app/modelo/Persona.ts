export class Persona {
    id?: any;
    nombre: string;
    apellido: string;
    sobre_mi: string;
    url_imagen: string;
    url_linkedin: string;
    url_github: string;

    constructor (nombre: string, apellido: string, sobre_mi: string, url_imagen: string, 
                 url_linkedin: string, url_github: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this. sobre_mi = sobre_mi;
        this.url_imagen = url_imagen;
        this.url_linkedin = url_linkedin;
        this.url_github = url_github;
    }
}