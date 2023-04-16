import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Experiencia } from 'src/app/modelo/Experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  
  trabajosList: Array <Experiencia>;
   
  id!: any;
  
  constructor(private workService: ExperienciaService, private toastr: ToastrService) {

    this.trabajosList = new Array <Experiencia>();

  }
  
  ngOnInit(): void {

    this.obtenerTrabajos();

  }


  // Mostrar trabajos //
  obtenerTrabajos(): void {
    this.workService.getExperiencia().subscribe(data =>{
      this.trabajosList = data;
    });
  }

    
  // Borrar trabajo //
  borrarTrabajo(id: any): void {
    this.workService.deleteExperiencia(id).subscribe(data =>{
      this.toastr.success('Borrado con éxito!');      
    });    
  }

}
