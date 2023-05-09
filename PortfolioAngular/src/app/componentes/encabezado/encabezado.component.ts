import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelo/Persona';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})

export class EncabezadoComponent {

  personasList: Array <Persona>;

  // Variable esta logueado //
  isLogged = false;

  // Variable mostrar login //
  showLogin = true;
  
  constructor(private persService:PersonaService,
              private authService: AutenticacionService,
              private router: Router) {

    this.personasList = new Array <Persona>();

  }
  
  ngOnInit(): void {

    // Mostrar personas al cargar la página //
    this.obtenerPersonas();

    // Esta logueado si se obtiene el token //
    this.authService.token ? this.isLogged = true : this.isLogged = false;

    // Se muestra el login si no se obtiene el token //
    this.authService.token ? this.showLogin = false : this.showLogin = true;

  }


  // Mostrar personas //
  obtenerPersonas(): void {
    this.persService.getPersonas().subscribe(data =>{
      this.personasList = data;      
    });
  }


  // Scroll secciones //
  toHome(){
    document.getElementById("home")?.scrollIntoView({behavior:"smooth"});
  }

  toAbout(){
    document.getElementById("about")?.scrollIntoView({behavior:"smooth"});
  }
  
  toEducation(){
    document.getElementById("education")?.scrollIntoView({behavior:"smooth"});
  }

  toSkills(){
    document.getElementById("skills")?.scrollIntoView({behavior:"smooth"});
  }
 
  toExperience(){
    document.getElementById("experience")?.scrollIntoView({behavior:"smooth"});
  }

  toProjects(){
    document.getElementById("projects")?.scrollIntoView({behavior:"smooth"});
  }
  

  // Cerrar sesion //
  logout() {
    this.router.navigate(['/portfolio']);
    this.authService.cerrarSesion();
  }

}
