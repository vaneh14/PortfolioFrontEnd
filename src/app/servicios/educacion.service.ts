import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Educacion } from '../modelo/Educacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EducacionService {

  constructor(private http:HttpClient) { }

  // API Back End //
  url: string = "http://localhost:8080/api/educacion";

  // Crear nuevo curso //
  createEducacion(curso: Educacion): Observable <any> {
    return this.http.post<Educacion>(`${this.url}/new`, curso);
  }

  // Mostrar cursos //
  getEducacion(): Observable <any> {
    return this.http.get<Educacion[]>(this.url);
  }

  // Editar curso //
  getEducacionId(id: any): Observable <Educacion> {
    return this.http.get<Educacion>(`${this.url}/edit/${id}`);
  }

  updateEducacion(curso: Educacion): Observable <any> {
    return this.http.put(`${this.url}/edit/${curso.id}`, curso);
  }

  // Borrar curso //
  deleteEducacion(id: any): Observable <any> {
    return this.http.delete(`${this.url}/delete/${id}`);
  }

}
