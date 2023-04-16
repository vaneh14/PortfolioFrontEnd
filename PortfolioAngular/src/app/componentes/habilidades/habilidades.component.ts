import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Habilidad } from 'src/app/modelo/Habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})

export class HabilidadesComponent {
  
  skillsList: Array <Habilidad>;

  id!: any;
 
  constructor(private skillService: HabilidadService, private toastr: ToastrService) { 

    this.skillsList = new Array <Habilidad>();

  }
  
  ngOnInit(): void {
    this.obtenerHabilidades();
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
