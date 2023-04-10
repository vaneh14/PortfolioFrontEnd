import { Component, Input } from '@angular/core';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { Educacion } from 'src/app/modelo/Educacion';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent {
  
  cursosList: Array <Educacion>;

  cursoNuevo: Educacion = {
    nombre_curso: "",
    fecha_inicio: "",
    fecha_fin: "",
    descripcion: "",
    lenguaje: "",
    url_curso: "",
    persona_id: 1 };
  
  constructor(private eduService:EducacionService) {
    this.cursosList = new Array <Educacion>();
   }  
  
  ngOnInit(): void {
    // Listar cursos
    this.eduService.obtenerEducacion().subscribe(data =>{
      this.cursosList = data;
    });
  }

  // Nuevo curso
  agregarCurso(): void {    
    this.eduService.crearEducacion(this.cursoNuevo).subscribe(data =>{
      this.cursosList.push(data);
      alert("Agregado con éxito!");      
    });
  }

  // Editar curso
  modificarCurso(curso: Educacion): void {
    this.eduService.modificarEducacion(curso).subscribe(data =>{
      this.cursosList.push(curso);
    });
  }
  
  // Borrar curso
  borrarCurso(id: number): void {
    this.eduService.borrarEducacion(id).subscribe(data =>{
      
      alert("Borrado con éxito!");
    });    
  }
 
}
