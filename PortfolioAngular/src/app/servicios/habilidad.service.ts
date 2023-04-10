import { Injectable } from '@angular/core';
import { Habilidad } from '../modelo/Habilidad';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  constructor(private http:HttpClient) { }

  // API Back End
  Url = "http://localhost:8080/api/habilidad";

  // Crear nueva habilidad
  crearHabilidad(skill: Habilidad): Observable <any> {
    return this.http.post<Habilidad>(this.Url + "/" + "new", skill);
  }

  // Listar habilidades
  obtenerHabilidad(): Observable <any>{
    return this.http.get<Habilidad[]>(this.Url);
  }

  // Editar habilidad


  // Borrar Habilidad

  
}
