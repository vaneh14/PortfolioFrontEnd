import { Component, Input } from '@angular/core';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { Educacion } from 'src/app/modelo/Educacion';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent {
  
  cursosList: Array <Educacion>;
 
  id: any;
 
  constructor(private eduService:EducacionService, private toastr: ToastrService) {
    
    this.cursosList = new Array <Educacion>();
    
   }  
  
  ngOnInit(): void {
    
    this.obtenerCursos();
    
  }


  // Mostrar cursos //
  obtenerCursos(): void {
    this.eduService.getEducacion().subscribe(data =>{
      this.cursosList = data;
      
    });
  }

  
  // Borrar curso //
  borrarCurso(id: any): void {
    this.eduService.deleteEducacion(id).subscribe(data =>{
      this.toastr.success('Borrado con éxito!');
      this.obtenerCursos();      
    });    
  }
 
}
