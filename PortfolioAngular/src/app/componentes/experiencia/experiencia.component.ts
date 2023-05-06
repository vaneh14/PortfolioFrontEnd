import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Experiencia } from 'src/app/modelo/Experiencia';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  
  trabajosList: Array <Experiencia>;
   
  id!: any;

  //Variable esta logueado
  isLogged = false;
  
  constructor(private workService: ExperienciaService, 
              private toastr: ToastrService,
              private authService: AutenticacionService) {

    this.trabajosList = new Array <Experiencia>();

  }
  
  ngOnInit(): void {

    // Mostrar trabajos al cargar la página //
    this.obtenerTrabajos();

    // Esta logueado si se obtiene el token //
    this.authService.token ? this.isLogged = true : this.isLogged = false;

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
