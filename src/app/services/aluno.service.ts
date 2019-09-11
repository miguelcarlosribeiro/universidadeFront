import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  public login(obj){
    return this.http.post(environment.serverurl+"/aluno/login", obj)
  } 
  constructor(private http: HttpClient) {

   }
}

