import { Injectable } from '@angular/core';
import { Experiencia } from '../modelo/Experiencia';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(private http:HttpClient) { }

  // API Back End //
  Url = "http://localhost:8080/api/experiencia-laboral";

  // Crear nuevo trabajo //
  createExperiencia(work: Experiencia): Observable <any> {
    return this.http.post<Experiencia>(`${this.Url}/new`, work);
  }

  // Mostrar trabajos //
  getExperiencia(): Observable <any> {
    return this.http.get<Experiencia[]>(this.Url);
  }

  // Editar trabajo //
  getExperienciaId(id: any): Observable <Experiencia> {
    return this.http.get<Experiencia>(`${this.Url}/edit/${id}`);
  }

  updateExperiencia(work: Experiencia): Observable <any> {
    return this.http.put(`${this.Url}/edit/${work.id}`, work);
  }

  // Borrar trabajo //
  deleteExperiencia(id: any): Observable <any> {
    return this.http.delete(`${this.Url}/delete/${id}`);
  }

}
