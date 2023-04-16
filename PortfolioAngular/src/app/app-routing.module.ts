import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { EditarEducacionComponent } from './componentes/educacion/editar-educacion/editar-educacion.component';
import { EditarExperienciaComponent } from './componentes/experiencia/editar-experiencia/editar-experiencia.component';
import { EditarProyectosComponent } from './componentes/proyectos/editar-proyectos/editar-proyectos.component';
import { EditarHabilidadesComponent } from './componentes/habilidades/editar-habilidades/editar-habilidades.component';

const routes: Routes = [
  {path: "portfolio", component: PortfolioComponent},
  {path: "iniciar-sesion", component: IniciarSesionComponent},
  {path: "", redirectTo:"portfolio", pathMatch:"full"},  

  {path: "editar-educacion/:id", component: EditarEducacionComponent},
  {path: "agregar-educacion", component: EditarEducacionComponent},

  {path: "editar-habilidad/:id", component: EditarHabilidadesComponent},
  {path: "agregar-habilidad", component: EditarHabilidadesComponent},

  {path: "editar-experiencia/:id", component: EditarExperienciaComponent},
  {path: "agregar-experiencia", component: EditarExperienciaComponent},

  {path: "editar-proyecto/:id", component: EditarProyectosComponent},
  {path: "agregar-proyecto", component: EditarProyectosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }