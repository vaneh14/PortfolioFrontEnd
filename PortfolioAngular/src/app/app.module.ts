import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { HomeComponent } from './componentes/home/home.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';

import { HttpClientModule } from "@angular/common/http";
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { AppRoutingModule } from './app-routing.module';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EducacionService } from './servicios/educacion.service';
import { PersonaService } from './servicios/persona.service';
import { HabilidadService } from './servicios/habilidad.service';
import { ExperienciaService } from './servicios/experiencia.service';
import { ProyectoService } from './servicios/proyecto.service';
import { EditarEducacionComponent } from './componentes/educacion/editar-educacion/editar-educacion.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditarExperienciaComponent } from './componentes/experiencia/editar-experiencia/editar-experiencia.component';
import { EditarProyectosComponent } from './componentes/proyectos/editar-proyectos/editar-proyectos.component';
import { EditarHabilidadesComponent } from './componentes/habilidades/editar-habilidades/editar-habilidades.component';
import { EditarPersonaComponent } from './componentes/acerca-de/editar-persona/editar-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    HomeComponent,
    AcercaDeComponent,
    EducacionComponent,
    HabilidadesComponent,
    ExperienciaComponent,
    ProyectosComponent,
    FooterComponent,
    IniciarSesionComponent,
    PortfolioComponent,
    EditarEducacionComponent,
    EditarExperienciaComponent,
    EditarProyectosComponent,
    EditarHabilidadesComponent,
    EditarPersonaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: "toast-center-center",
      timeOut:3000,
      closeButton: true
    })
  ],
  providers: [
    EducacionService,
    PersonaService,
    HabilidadService,
    ExperienciaService,
    ProyectoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
