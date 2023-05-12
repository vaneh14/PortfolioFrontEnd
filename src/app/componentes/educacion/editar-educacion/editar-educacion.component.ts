import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Educacion } from 'src/app/modelo/Educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})

export class EditarEducacionComponent {

  cursosList: Array <Educacion>;

  id!: any;

  cursoActual: Educacion = {
    nombre_curso: "",
    fecha_inicio: "",
    fecha_fin: "",
    descripcion: "",
    lenguaje: "",
    url_curso: "",
    persona_id: 1 };
  
  constructor(private eduService:EducacionService, private router: Router, private activatedRoute: ActivatedRoute, private toastr: ToastrService) {

    this.cursosList = new Array <Educacion>();
    
  }

  ngOnInit(): void {

    this.obtenerCursoId()
    
  }

 
  // Crear curso //
  agregarCurso(): void {    
    this.eduService.createEducacion(this.cursoActual).subscribe(data =>{
      this.cursosList.push(data);
      this.toastr.success('Agregado con éxito!');
      this.router.navigate(["/portfolio"]);
    });
  }


  // Editar curso //
  obtenerCursoId(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.eduService.getEducacionId(this.id).subscribe(data =>{
      this.cursoActual = data;
    })
  }
  

  editarCurso(curso: Educacion): void {
    this.eduService.updateEducacion(this.cursoActual).subscribe(data =>{
      this.cursosList.push(curso);
      this.toastr.success('Actualizado con éxito!');
      this.router.navigate(["/portfolio"]);     
    });
  }
  

}
