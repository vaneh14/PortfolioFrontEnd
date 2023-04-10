import { Component } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
 
  personaList: any;

  constructor(private datosPortfolio:PersonaService) {  }

  ngOnInit(): void {

    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.personaList = data;
    });


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

}