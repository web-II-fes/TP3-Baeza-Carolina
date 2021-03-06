import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { PersonaService } from '../servicios/persona.service';


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})

export class PersonaComponent implements OnInit {
  personaForm: FormGroup;
  
  personas: any[] = [];
  idPersona: any;

  constructor(private fb: FormBuilder, private router: Router, private personaService: PersonaService) { }

  ngOnInit() {
    this.initForm();

    this.getPersona();
  }

  nombreControl = new FormControl('Cliente');

  initForm(){
    this.personaForm = this.fb.group({
      nombre : ['', Validators.required],
      apellido : ['', Validators.required],
      edad : ['']
    
    });
  }

  getPersona(){
    this.personaService.getPersonas().subscribe((personas: any) => {
      this.personas = personas;
    });
  }


  editarPersona(persona: any){
    this.idPersona = persona._id;
    this.personaForm.patchValue({
      nombre: persona.nombre,
      apellido: persona.apellido,
      edad: persona.edad
    });
  }

  borrarPersona(persona: any){
    this.idPersona = persona._id;
    this.personaService.borrarPersona(this.idPersona).subscribe( result  => {
      console.log("Persona borrada: ", persona)
    });
  }
  
  cargarPersona(){
    // debugger;
    if (this.idPersona){
      this.personaService.editarPersona(this.idPersona, this.personaForm.value).subscribe(persona => {
        console.log("Persona editada: ", persona);
      });
    } else{
      this.personaService.guardarPersona(this.personaForm.value).subscribe(persona => {
        console.log("Persona Nueva: ", persona);
      });
    }
  };
  
  

}