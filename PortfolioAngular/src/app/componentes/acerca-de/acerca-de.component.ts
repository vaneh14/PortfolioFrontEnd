import { Component } from '@angular/core';
import { Persona } from 'src/app/modelo/Persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})

export class AcercaDeComponent {
  
  personasList: Array <Persona>;
  
  constructor(private persService:PersonaService) {

    this.personasList = new Array <Persona>();

  }
  
  ngOnInit(): void {
    this.obtenerPersonas();
  }


  // Mostrar personas //
  obtenerPersonas(): void {
    this.persService.getPersonas().subscribe(data =>{
      this.personasList = data;      
    });
  }

}
