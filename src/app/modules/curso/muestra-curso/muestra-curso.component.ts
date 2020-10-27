import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from '../servicios/curso.service';

@Component({
  selector: 'app-muestra-curso',
  templateUrl: './muestra-curso.component.html',
  styleUrls: ['./muestra-curso.component.css']
})
export class MuestraCursoComponent implements OnInit {


    displayedColumns: string[] = ['nombre', 'profesor', 'anio','estado', 'editar', 'eliminar'];
    dataSource: any[] = [];
  idCurso: any;
  
    constructor(private router:Router,private conectaService: CursoService,private route: ActivatedRoute) { }
  
    parametro:any;
  
    ngOnInit(): void {
  
    this.getCursos();
    }
  
  
    
  
    getCursos(){
      this.conectaService.getCursos().subscribe((data: any) => {
        //debugger;
        this.dataSource = data;
      });
    }
    
  
    goToEditar(idCurso) {		
          this.router.navigate(["/curso/crearCurso/" + idCurso]);
        }

    goToEliminar(curso:any) {		

    this.idCurso = curso._id;
    this.conectaService.borrarCurso(this.idCurso).subscribe( result  => {
      console.log("Curso borrado: ", curso)
    });
  }
          
    
    
  
  

}
