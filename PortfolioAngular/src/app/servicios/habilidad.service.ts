import { Injectable } from '@angular/core';
import { Habilidad } from '../modelo/Habilidad';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  constructor(private http:HttpClient) { }

  // API Back End //
  Url = "http://localhost:8080/api/habilidad";

  // Crear nueva habilidad //
  createHabilidad(skill: Habilidad): Observable <any> {
    return this.http.post<Habilidad>(`${this.Url}/new`, skill);
  }

  // Mostrar habilidades //
  getHabilidad(): Observable <any> {
    return this.http.get<Habilidad[]>(this.Url);
  }

  // Editar Habulidad //
  getHabilidadId(id: any): Observable <Habilidad> {
    return this.http.get<Habilidad>(`${this.Url}/edit/${id}`);
  }

  updateHabilidad(skill: Habilidad): Observable <any> {
    return this.http.put(`${this.Url}/edit/${skill.id}`, skill);
  }

  // Borrar habilidad //
  deleteHabilidad(id: any): Observable <any> {
    return this.http.delete(`${this.Url}/delete/${id}`);
  }
}
