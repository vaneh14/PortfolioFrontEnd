import { Component, Input } from '@angular/core';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { Educacion } from 'src/app/modelo/Educacion';
import { ToastrService } from 'ngx-toastr';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent {
  
  cursosList: Array <Educacion>;
 
  id: any;

  // Variable esta logueado //
  isLogged = false;
 
  constructor(private eduService: EducacionService, 
              private toastr: ToastrService,
              private authService: AutenticacionService) {
    
    this.cursosList = new Array <Educacion>();
    
   }  
  
  ngOnInit(): void {
    
    // Mostrar cursos al cargar la página //
    this.obtenerCursos();

    // Esta logueado si se obtiene el token //
    this.authService.token ? this.isLogged = true : this.isLogged = false;
    
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
