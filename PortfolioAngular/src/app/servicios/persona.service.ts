import { Injectable } from '@angular/core';
import { Persona } from '../modelo/Persona';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http:HttpClient) { }

  // API Back End //
  url: string = "http://localhost:8080/api/persona";

  // Crear nuevo persona //
  createPersona(persona: Persona): Observable <any> {
    return this.http.post<Persona>(`${this.url}/new`, persona);
  }

  // Mostrar personas //
  getPersonas(): Observable <any>{
    return this.http.get<Persona[]>(this.url);
  }

  // Editar persona //
  getPersonaId(id: any): Observable <Persona> {
    return this.http.get<Persona>(`${this.url}/edit/${id}`);
  }

  updatePersona(persona: Persona): Observable <any> {
    return this.http.put(`${this.url}/edit/${persona.id}`, persona);
  }

  // Borrar persona //
  deletePersona(id: any): Observable <any> {
    return this.http.delete(`${this.url}/delete/${id}`);
  }

}
