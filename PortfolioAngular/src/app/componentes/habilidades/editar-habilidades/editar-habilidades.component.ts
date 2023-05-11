import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Habilidad } from 'src/app/modelo/Habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-editar-habilidades',
  templateUrl: './editar-habilidades.component.html',
  styleUrls: ['./editar-habilidades.component.css']
})

export class EditarHabilidadesComponent {

  skillsList: Array <Habilidad>;

  id!: any;

  skillActual: Habilidad = {
    nombre_habilidad: "",
    porcentaje: "",
    url_logo: "",
    tipo: "",
    persona_id: 1 };
  
  constructor(private skillService: HabilidadService, private router: Router, private activatedRoute: ActivatedRoute, private toastr: ToastrService) {

    this.skillsList = new Array <Habilidad>();
    
  }

  ngOnInit(): void {

    this.obtenerHabilidadId()
    
  }

 
  // Crear habilidad //
  agregarHabilidad(): void {    
    this.skillService.createHabilidad(this.skillActual).subscribe(data =>{
      this.skillsList.push(data);
      this.toastr.success('Agregado con éxito!');
      this.router.navigate(["/portfolio"]);
    });
  }


  // Editar habilidad //
  obtenerHabilidadId(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.skillService.getHabilidadId(this.id).subscribe(data =>{
      this.skillActual = data;
    })
  }
  

  editarHabilidad(skill: Habilidad): void {
    this.skillService.updateHabilidad(this.skillActual).subscribe(data =>{
      this.skillsList.push(skill);
      this.toastr.success('Actualizado con éxito!');
      this.router.navigate(["/portfolio"]);     
    });
  }

}
