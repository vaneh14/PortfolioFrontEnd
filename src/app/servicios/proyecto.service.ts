import { Injectable } from '@angular/core';
import { Proyecto } from '../modelo/Proyecto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(private http:HttpClient) { }

  // API Back End //
  url: string = "https://portfolio-backend-lvf9.onrender.com/api/proyecto";

  // Crear nuevo proyecto //
  createProyecto(proyecto: Proyecto): Observable <any> {
    return this.http.post<Proyecto>(`${this.url}/new`, proyecto);
  }

  // Mostrar proyectos //
  getProyecto(): Observable <any> {
    return this.http.get<Proyecto[]>(this.url);
  }

  // Editar proyecto //
  getProyectoId(id: any): Observable <Proyecto> {
    return this.http.get<Proyecto>(`${this.url}/edit/${id}`);
  }

  updateProyecto(proyecto: Proyecto): Observable <any> {
    return this.http.put(`${this.url}/edit/${proyecto.id}`, proyecto);
  }

  // Borrar proyecto //
  deleteProyecto(id: any): Observable <any> {
    return this.http.delete(`${this.url}/delete/${id}`);
  }

}
