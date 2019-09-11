import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormControl}from '@angular/forms';
import { AlunoService } from 'src/app/services/aluno.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    email: new FormControl(),
    matricula: new FormControl(),
  })
  constructor(private service:AlunoService, private router:Router) {

   }

  ngOnInit() {
  }
  
  public entrar(){
    // if(this.form.invalid){
    //   alert("Existe campos invalidos");
    //   return;
    // }
    // this.service.login(this.form.value).subscribe(() => {
    //   this.router.navigateByUrl("admin")
    // }, ()=> {alert("Login invalido!")})
    this.router.navigateByUrl("admin")
  }
}
