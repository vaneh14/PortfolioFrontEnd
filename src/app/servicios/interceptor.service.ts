import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})

export class InterceptorService implements HttpInterceptor {

  constructor(private authService: AutenticacionService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable <HttpEvent <any>> {

    req.clone({
      headers: req.headers.set("Authorization", "Bearer ${this.authService.token}")
    })
          
    console.log("El interceptor está corriendo: token: " + this.authService.token)
    return next.handle(req);    
  }
}
