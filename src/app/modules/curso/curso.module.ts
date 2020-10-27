import { AuthService } from '../auth/servicios/auth.service';
import { CursoRoutingModule } from'./curso.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { TokenStorageService } from '../auth/servicios/token-storage.service';

@NgModule({
    declarations: [  ],
    imports: [ ReactiveFormsModule, HttpClientModule, CommonModule, CursoRoutingModule,
    MatFormFieldModule, MatInputModule ],
    providers: [ AuthService, TokenStorageService ],
  })
  export class CursoModule { }