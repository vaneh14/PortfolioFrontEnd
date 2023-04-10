import { Injectable } from '@angular/core';
import { Experiencia } from '../modelo/Experiencia';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(private http:HttpClient) { }

  Url = "http://localhost:8080/api/experiencia-laboral";

  obtenerDatos(): Observable <any>{
    return this.http.get<Experiencia[]>(this.Url);
  }
}
