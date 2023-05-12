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
  url: string = "https://portfolio-backend-lvf9.onrender.com/api/habilidad";

  // Crear nueva habilidad //
  createHabilidad(skill: Habilidad): Observable <any> {
    return this.http.post<Habilidad>(`${this.url}/new`, skill);
  }

  // Mostrar habilidades //
  getHabilidad(): Observable <any> {
    return this.http.get<Habilidad[]>(this.url);
  }

  // Editar Habulidad //
  getHabilidadId(id: any): Observable <Habilidad> {
    return this.http.get<Habilidad>(`${this.url}/edit/${id}`);
  }

  updateHabilidad(skill: Habilidad): Observable <any> {
    return this.http.put(`${this.url}/edit/${skill.id}`, skill);
  }

  // Borrar habilidad //
  deleteHabilidad(id: any): Observable <any> {
    return this.http.delete(`${this.url}/delete/${id}`);
  }
}
