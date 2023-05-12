import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Proyecto } from 'src/app/modelo/Proyecto';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent {
  
  proyectosList: Array <Proyecto>;

  id!: any;

  //Variable esta logueado
  isLogged = false;
    
  constructor(private proyService: ProyectoService, 
              private toastr: ToastrService,
              private authService: AutenticacionService) {

    this.proyectosList = new Array <Proyecto>();

  }
  
  ngOnInit(): void {

    // Mostrar proyectos al cargar la página //
    this.obtenerProyectos();

    // Esta logueado si se obtiene el token //
    this.authService.token ? this.isLogged = true : this.isLogged = false;

  }


  // Mostrar proyectos //
  obtenerProyectos(): void {
    this.proyService.getProyecto().subscribe(data =>{
      this.proyectosList = data;
    });
  }

  
  // Borrar proyecto //
  borrarProyecto(id: any): void {
    this.proyService.deleteProyecto(id).subscribe(data =>{
      this.toastr.success('Borrado con éxito!');
      this.obtenerProyectos();      
    });    
  }

}
