import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Persona } from 'src/app/modelo/Persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})

export class AcercaDeComponent {
  
  personasList: Array <Persona>;

  id!: any;
  
  constructor(private persService: PersonaService, private toastr: ToastrService) {

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


  // Borrar persona //
  borrarPersona(id: any): void {
    this.persService.deletePersona(id).subscribe(data =>{
      this.toastr.success('Borrado con éxito!');
      this.obtenerPersonas();      
    });    
  }

}
