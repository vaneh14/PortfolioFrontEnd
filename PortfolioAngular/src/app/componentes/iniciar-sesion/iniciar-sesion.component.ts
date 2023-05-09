import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})

export class IniciarSesionComponent {

  form: FormGroup;

  // Variable esta logueado //
  isLogged = false;

  // Variable mostrar login //
  showLogin = true;

  constructor (private formBuilder:FormBuilder, 
               private authService: AutenticacionService, 
               private router: Router){
    
    // Formulario Iniciar Sesion //
    this.form = this.formBuilder.group(
      {
        email:["", [Validators.required, Validators.email]],
        password:["", [Validators.required, Validators.minLength(8)]]
      }
    );

    // Esta logueado si se obtiene el token //
    if(this.authService.token) {
      this.isLogged = true;
      this.showLogin = false;
    }

  }

  get Email(){
    return this.form.get("email");
  }

  get Password(){
    return this.form.get("password");
  }


  // Boton iniciar sesion //
  submitForm() {
    if (this.form.invalid) {
      return;
    }

    this.authService.iniciarSesion(this.form.value).subscribe((data) => {
      this.isLogged = true;
      this.showLogin = false;
      console.log("data:" + data);
      this.router.navigate(['/portfolio']);
    });
  }


  // Cerrar sesion //
  logout() {
    this.router.navigate(['/portfolio']);
    this.authService.cerrarSesion();
  }

}
