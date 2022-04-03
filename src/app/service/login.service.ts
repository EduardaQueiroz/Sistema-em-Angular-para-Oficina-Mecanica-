import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginModel } from './../models/loginModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as urls from '../../global';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URL_LOGIN = urls.urlLocal + "usuario/";

  /* acrescentar descOficina e codfuncionario */
  usuarioAutenticado: LoginModel = {
    login: "", senha: "", auth: false, codfuncionario: 0,
    get_funcionario: {
      cod_oficina: 0,
      descricao_oficina: "",
      cod_funcionario: 0,
      cargo_funcionario: ""
    }
  };

  constructor(private http: HttpClient, private router: Router) { 
    console.log(this.usuarioAutenticado);
  }

  verificarUsuario(usuario: LoginModel): Observable<LoginModel[]>{
    return this.http.get<LoginModel[]>(this.URL_LOGIN + `?login=${usuario.login}&senha=${usuario.senha}`);    
  }

  pegarUsuarioAutenticado(usuario: LoginModel){
    this.verificarUsuario(usuario).subscribe(usuarioVerificado => {
      console.log(usuarioVerificado);
      if(usuarioVerificado.length == 1){
        this.usuarioAutenticado = usuarioVerificado[0];
        this.usuarioAutenticado.auth = true;
        console.log(this.usuarioAutenticado);
        this.router.navigate(['/telaPrincipal/atendimentos']);
      }
    })
    
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado.auth;
  }

  /* verificarUsuario(usuario: LoginModel): Observable<LoginModel>{

    if(this.http.get<LoginModel>(this.URL_LOGIN + `?login=${usuario.login}&senha=${usuario.senha}`) != null){
      this.usuarioAutenticado = {login: usuario.login, senha: usuario.senha, auth: true};
    }
    console.log(this.usuarioAutenticado);
    return this.http.get<LoginModel>(this.URL_LOGIN + `?login=${usuario.login}&senha=${usuario.senha}`);
  } */

  /* http://127.0.0.1:8000/usuario/?login=admin&senha=admin */
}
