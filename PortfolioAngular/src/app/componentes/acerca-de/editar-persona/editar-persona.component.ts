import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Persona } from 'src/app/modelo/Persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})

export class EditarPersonaComponent {

  personasList: Array <Persona>;

  id!: any;

  personaActual: Persona = {
    nombre: "",
    apellido: "",
    sobre_mi: "",
    url_imagen: "",
    url_linkedin: "",
    url_github: "" };
  
  constructor(private persService: PersonaService, private router: Router, private activatedRoute: ActivatedRoute, private toastr: ToastrService) {

    this.personasList = new Array <Persona>();
    
  }

  ngOnInit(): void {

    this.obtenerPersonaId()
    
  }

 
  // Crear persona //
  agregarPersona(): void {    
    this.persService.createPersona(this.personaActual).subscribe(data =>{
      this.personasList.push(data);
      this.toastr.success('Agregado con éxito!');
      this.router.navigate(["/portfolio"]);
    });
  }


  // Editar persona //
  obtenerPersonaId(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.persService.getPersonaId(this.id).subscribe(data =>{
      this.personaActual = data;
    })
  }
  

  editarPersona(persona: Persona): void {
    this.persService.updatePersona(this.personaActual).subscribe(data =>{
      this.personasList.push(persona);
      this.toastr.success('Actualizado con éxito!');
      this.router.navigate(["/portfolio"]);     
    });
  }

}
