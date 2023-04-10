import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})

export class EncabezadoComponent {

  personaList: any;
  
  constructor(private datosPortfolio:PersonaService) { }
  
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.personaList = data;
    });
  }

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
