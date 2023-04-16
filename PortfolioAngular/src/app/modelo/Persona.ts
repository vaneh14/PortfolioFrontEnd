export class Persona {
    id?: any;
    nombre: String;
    apellido: String;
    titulo: String;
    sobre_mi: String;
    url_linkedin: String;
    url_github: String;

    constructor (nombre: String, apellido: String, titulo: String, sobre_mi: String, url_linkedin: String, url_github: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this. sobre_mi = sobre_mi;
        this.url_linkedin = url_linkedin;
        this.url_github = url_github;
    }
}