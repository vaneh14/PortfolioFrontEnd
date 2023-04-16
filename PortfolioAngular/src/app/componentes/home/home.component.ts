import { Component } from '@angular/core';
import { Persona } from 'src/app/modelo/Persona';
import { PersonaService } from 'src/app/servicios/persona.service';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
 
  personasList: Array <Persona>;

  constructor(private persService:PersonaService) {

    this.personasList = new Array <Persona>();

  }

  ngOnInit(): void {

    this.obtenerPersonas();


    // EFECTO TYPEWRITER //
    const target = document.querySelector('.tw');

    const writer = new Typewriter(target, {
      loop: true,
      typeColor: '#D47AE8',
      deleteSpeed: 80
    })
    
    writer
      .type(' Full Stack Developer Jr ')
      .rest(600)
      .start()
  }


  // Mostrar personas //
  obtenerPersonas(): void {
    this.persService.getPersonas().subscribe(data =>{
      this.personasList = data;      
    });
  }

}