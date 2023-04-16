import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Proyecto } from 'src/app/modelo/Proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-editar-proyectos',
  templateUrl: './editar-proyectos.component.html',
  styleUrls: ['./editar-proyectos.component.css']
})

export class EditarProyectosComponent {

  proyectosList: Array <Proyecto>;

  id!: any;

  proyectoActual: Proyecto = {
    nombre_proyecto: "",
    url_repositorio: "",
    url_proyecto: "",
    persona_id: 1 };
  
  constructor(private proyService: ProyectoService, private router: Router, private activatedRoute: ActivatedRoute, private toastr: ToastrService) {

    this.proyectosList = new Array <Proyecto>();
    
  }

  ngOnInit(): void {

    this.obtenerProyectoId()
    
  }

 
  // Crear proyecto //
  agregarProyecto(): void {    
    this.proyService.createProyecto(this.proyectoActual).subscribe(data =>{
      this.proyectosList.push(data);
      this.toastr.success('Agregado con éxito!');
      this.router.navigate(["/portfolio"]);
    });
  }


  // Editar proyecto //
  obtenerProyectoId(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.proyService.getProyectoId(this.id).subscribe(data =>{
      this.proyectoActual = data;
    })
  }
  

  editarProyecto(proyecto: Proyecto): void {
    this.proyService.updateProyecto(this.proyectoActual).subscribe(data =>{
      this.proyectosList.push(proyecto);
      this.toastr.success('Actualizado con éxito!');
      this.router.navigate(["/portfolio"]);     
    });
  }

}
