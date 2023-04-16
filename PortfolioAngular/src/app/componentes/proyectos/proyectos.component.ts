import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Proyecto } from 'src/app/modelo/Proyecto';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent {
  
  proyectosList: Array <Proyecto>;

  id!: any;
    
  constructor(private proyService: ProyectoService, private toastr: ToastrService) {

    this.proyectosList = new Array <Proyecto>();

  }
  
  ngOnInit(): void {
    this.obtenerProyectos();
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
