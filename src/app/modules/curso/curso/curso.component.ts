import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CursoService } from '../servicios/curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
   
  idCurso: String;
  
  cursoForm: FormGroup;
 
  
  constructor(private fb: FormBuilder, private cursoService: CursoService,private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
    this.initForm();
    this.route.paramMap.subscribe((param) => {
      this.idCurso = param.get('id');

      if (this.idCurso !== 'new'){
        this.getCursoById(this.idCurso);
      }
    });
  }

  getCursoById(idCurso: String){
    this.cursoService.getCursoById(idCurso).subscribe((data) =>{
      let cursoId = data;

      this.cursoForm.patchValue(cursoId);
    });
  }

  initForm(){
    this.cursoForm = this.fb.group({
      nombre: [ '' ],
      profesor: [ '' ],
      anio: [],
      estado: [ '' ]
    });
  }

  cargarCurso() {
    if (this.idCurso ){
      this.cursoService.editarCurso(this.idCurso, this.cursoForm.value).subscribe((curso) => {
      });
    } else {
      this.cursoService.guardarCurso(this.cursoForm.value).subscribe((curso) => {
        // let cursoNuevo = curso;
        console.log("se crea curso");
      });
    }
    this.router.navigate(['/curso/mostrarCurso']);
  }
}
