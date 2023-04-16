import { Injectable } from '@angular/core';
import { Persona } from '../modelo/Persona';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http:HttpClient) { }

  // API Back End //
  Url = "http://localhost:8080/api/persona";

  // Mostrar personas //
  getPersonas(): Observable <any>{
    return this.http.get<Persona[]>(this.Url);
  }
}
