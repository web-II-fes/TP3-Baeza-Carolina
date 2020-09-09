import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PersonaComponent} from './persona/persona.component' 

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PersonaService } from './servicios/persona.service';


@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    
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
    MatInputModule

  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
