import { Component } from '@angular/core';
import { Persona } from 'src/app/modelo/Persona';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})

export class AcercaDeComponent {
  
  personasList: Array <Persona>;

  id!: any;

  //Variable esta logueado
  isLogged = false;
  
  constructor(private persService: PersonaService, 
              private authService: AutenticacionService) {

    this.personasList = new Array <Persona>();

  }
  
  ngOnInit(): void {

    // Mostrar personas al cargar la página //
    this.obtenerPersonas();

    // Esta logueado si se obtiene el token //
    this.authService.token ? this.isLogged = true : this.isLogged = false;

  }


  // Mostrar personas //
  obtenerPersonas(): void {
    this.persService.getPersonas().subscribe(data =>{
      this.personasList = data;      
    });
  }


}
