import { Injectable } from '@angular/core';
import { Proyecto } from '../modelo/Proyecto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(private http:HttpClient) { }

  Url = "http://localhost:8080/api/proyecto";

  obtenerDatos(): Observable <any>{
    return this.http.get<Proyecto[]>(this.Url);
  }
}
