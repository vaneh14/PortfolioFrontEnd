import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelo/Persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})

export class EncabezadoComponent {

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
  
}
