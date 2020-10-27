import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../servicios/auth.service';
import { TokenStorageService } from './../servicios/token-storage.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  itemForm: FormGroup;


  constructor( private router: Router,private tokenService: TokenStorageService, private authService: AuthService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.itemForm = this.fb.group({
      username: [''],
      email: [''],
      password: ['']
    });
  }

  submit(){
    let credenciales = this.itemForm.value;
    this.authService.registro(credenciales).subscribe((data) => {
      let user = data;
      this.tokenService.guardarToken(data.token);
    });
    this.router.navigate(['/login']);
  }

}
