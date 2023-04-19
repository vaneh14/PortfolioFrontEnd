export class Persona {
    id?: any;
    nombre: String;
    apellido: String;
    sobre_mi: String;
    url_imagen: String;
    url_linkedin: String;
    url_github: String;

    constructor (nombre: String, apellido: String, sobre_mi: String, url_imagen: String, url_linkedin: String, url_github: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this. sobre_mi = sobre_mi;
        this.url_imagen = url_imagen;
        this.url_linkedin = url_linkedin;
        this.url_github = url_github;
    }
}