import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


import { CursoService } from './modules/curso/servicios/curso.service';


import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';

import {MatSelectModule} from '@angular/material/select';
import { PersonaComponent } from './modules/persona/persona/persona.component';
import { CursoComponent } from './modules/curso/curso/curso.component';
import { MuestraPersonaComponent } from './modules/persona/muestra-persona/muestra-persona.component';
import { MuestraCursoComponent } from './modules/curso/muestra-curso/muestra-curso.component';
import { PersonaService } from './modules/persona/servicios/persona.service';


@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    CursoComponent,
    MuestraPersonaComponent,
    MuestraCursoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule, 
    MatButtonModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatMenuModule,
    MatSelectModule

  ],
  providers: [PersonaService,CursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
