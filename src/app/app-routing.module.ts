import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoComponent } from './modules/curso/curso/curso.component';




const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule)
  },
  // {
  //   path: 'persona',
  //   loadChildren: () => import('./modules/persona/servicios/persona.service').then((m) => m.PersonaModule)
  // },
  {
    path: 'curso',
    loadChildren: () => import('./modules/curso/curso.module').then((m) => m.CursoModule)
  },
  // { path: 'arrays', component: ArraysComponent },

  {
    path: 'crearCurso',
    component: CursoComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
