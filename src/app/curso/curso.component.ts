import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CursoService } from '../servicios/curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  cursoForm: FormGroup;
  
  cursos: any[] = [];
  idCurso: any;

  constructor(private fb: FormBuilder, private router: Router, private cursoService: CursoService) { }

  ngOnInit() {
    this.initForm();

    this.getCurso();
  }

  nombreControl = new FormControl('Curso');

  initForm(){
    this.cursoForm = this.fb.group({
      nombre : ['', ],
      profesor : [''],
      anio : [''],
      estado:['']
    
    });
  }

  getCurso(){
    this.cursoService.getCursos().subscribe((cursos: any) => {
      this.cursos = cursos;
    });
  }


  editarCurso(curso: any){
    this.idCurso = curso._id;
    this.cursoForm.patchValue({
      nombre: curso.nombre,
      profesor: curso.profesor,
      anio: curso.anio,
      estado: curso.estado
    });
  }

  borrarCurso(curso: any){
    this.idCurso = curso._id;
    this.cursoService.borrarCurso(this.idCurso).subscribe( result  => {
      console.log("Curso borrado: ", curso)
    });
  }
  
  cargarCurso(){
    
    if (this.idCurso){
      this.cursoService.editarCurso(this.idCurso, this.cursoForm.value).subscribe(curso => {
        console.log("Curso editado: ", curso);
      });
    } else{
      this.cursoService.guardarCurso(this.cursoForm.value).subscribe(curso => {
        console.log("Curso Nuevo: ", curso);
      });
    }
  };
  
  

}
 