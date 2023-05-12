import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AutenticacionService {

  // API Back End //
  url: string = "http://localhost:8080/api/auth/authenticate";

  currentUserSubject: BehaviorSubject <any>;

  // Obtener token //
  get token() {
    return sessionStorage.getItem("token");
  }

  // Variable esta logueado //
  isLogged = false;

  // Variable mostrar login //
  showLogin = true;

  constructor(private http: HttpClient) {

    console.log("El servicio de autenticacion está corriendo");

    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem("token") || "{}"));
    this.currentUserSubject.next(!!this.token);
    
   }

   
   // Metodo iniciar sesion //
   iniciarSesion(credenciales: any): Observable <any>{
    return this.http.post(this.url, credenciales).pipe(map(data =>{
      sessionStorage.setItem("token", JSON.stringify(data));
      this.currentUserSubject.next(data);
      return data;
    }))
   }


   // Metodo cerrar sesion //
   cerrarSesion() {
    sessionStorage.removeItem('token');
    sessionStorage.clear();
    this.currentUserSubject.next('{}');
    this.isLogged = false;
    this.showLogin = true;
    console.log("Sesion cerrada");
  }

}
