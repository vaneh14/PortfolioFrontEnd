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
  url: string = "https://portfolio-backend-lvf9.onrender.com/api/experiencia-laboral";

  // Crear nuevo trabajo //
  createExperiencia(work: Experiencia): Observable <any> {
    return this.http.post<Experiencia>(`${this.url}/new`, work);
  }

  // Mostrar trabajos //
  getExperiencia(): Observable <any> {
    return this.http.get<Experiencia[]>(this.url);
  }

  // Editar trabajo //
  getExperienciaId(id: any): Observable <Experiencia> {
    return this.http.get<Experiencia>(`${this.url}/edit/${id}`);
  }

  updateExperiencia(work: Experiencia): Observable <any> {
    return this.http.put(`${this.url}/edit/${work.id}`, work);
  }

  // Borrar trabajo //
  deleteExperiencia(id: any): Observable <any> {
    return this.http.delete(`${this.url}/delete/${id}`);
  }

}
