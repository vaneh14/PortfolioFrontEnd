import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Educacion } from '../modelo/Educacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EducacionService {

  constructor(private http:HttpClient) { }

  // API Back End
  Url = "http://localhost:8080/api/educacion";

  // Crear nuevo curso
  crearEducacion(curso: Educacion): Observable <any> {
    return this.http.post<Educacion>(this.Url + "/" + "new", curso);
  }

  // Listar cursos
  obtenerEducacion(): Observable <any> {
    return this.http.get<Educacion[]>(this.Url);
  }

  // Editar curso
  modificarEducacion(curso: Educacion): Observable <void> {
    return this.http.put<void>(this.Url + "/" + "update", curso);
  }

  // Borrar curso
  borrarEducacion(id: number): Observable <void> {
    return this.http.delete<void>(this.Url + "/" + "delete/${id}");
  }

}
