import { Injectable } from '@angular/core';
import { Persona } from '../modelo/Persona';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http:HttpClient) { }

  Url = "http://localhost:8080/api/persona";

  obtenerDatos(): Observable <any>{
    return this.http.get<Persona[]>(this.Url);
  }
}
