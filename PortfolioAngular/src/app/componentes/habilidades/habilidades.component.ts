import { Component } from '@angular/core';
import { Habilidad } from 'src/app/modelo/Habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent {
  
  skillList: any;

  skillNueva: Habilidad = {nombre_habilidad: "", porcentaje: "", persona_id: 1}
 
  constructor(private datosPortfolio:HabilidadService) { }
  
  // Listar habilidades
  ngOnInit(): void {
    this.datosPortfolio.obtenerHabilidad().subscribe(data =>{
      this.skillList = data;            
    });
  }

  // Nueva habilidad
  agregarHabilidad(): void {
    this.datosPortfolio.crearHabilidad(this.skillNueva).subscribe(data=>{
      this.skillList.push(data);
      alert("Habilidad agregada!");
    })
  }

}
