import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Habilidad } from 'src/app/modelo/Habilidad';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})

export class HabilidadesComponent {
  
  skillsList: Array <Habilidad>;

  id!: any;

  //Variable esta logueado
  isLogged = false;
 
  constructor(private skillService: HabilidadService, 
              private toastr: ToastrService, 
              private authService: AutenticacionService) { 

    this.skillsList = new Array <Habilidad>();

  }
  
  ngOnInit(): void {

    // Mostrar habilidades al cargar la página //
    this.obtenerHabilidades();

    // Esta logueado si se obtiene el token //
    this.authService.token ? this.isLogged = true : this.isLogged = false;

  }


  // Mostrar habilidades //
  obtenerHabilidades(): void {
    this.skillService.getHabilidad().subscribe(data =>{
      this.skillsList = data;
    });
  }

  
  // Borrar habilidad
  borrarHabilidad(id: number): void {
    this.skillService.deleteHabilidad(id).subscribe(data =>{
      this.toastr.success('Borrado con éxito!');
      this.obtenerHabilidades();      
    });    
  }
 
}
