import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Experiencia } from 'src/app/modelo/Experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})

export class EditarExperienciaComponent {

  trabajosList: Array <Experiencia>;

  id!: any;

  trabajoActual: Experiencia = {
    nombre_puesto: "",
    nombre_empresa: "",
    fecha_inicio: "",
    fecha_fin: "",
    descripcion: "",    
    persona_id: 1 };
  
  constructor(private workService:ExperienciaService, private router: Router, private activatedRoute: ActivatedRoute, private toastr: ToastrService) {

    this.trabajosList = new Array <Experiencia>();
    
  }

  ngOnInit(): void {

    this.obtenerTrabajoId()
    
  }

 
  // Crear trabajo //
  agregarTrabajo(): void {    
    this.workService.createExperiencia(this.trabajoActual).subscribe(data =>{
      this.trabajosList.push(data);
      this.toastr.success('Agregado con éxito!');
      this.router.navigate(["/portfolio"]);
    });
  }


  // Editar trabajo //
  obtenerTrabajoId(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.workService.getExperienciaId(this.id).subscribe(data =>{
      this.trabajoActual = data;
    })
  }
  

  editarTrabajo(work: Experiencia): void {
    this.workService.updateExperiencia(this.trabajoActual).subscribe(data =>{
      this.trabajosList.push(work);
      this.toastr.success('Actualizado con éxito!');
      this.router.navigate(["/portfolio"]);     
    });
  }

}
