import { LoginModel } from './../models/loginModel';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { FuncionarioModel } from '../models/funcionarioModel';

import * as urls from '../../global';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private URL_FUNCIONARIO = urls.urlLocal + 'funcionario/';

  constructor(private http: HttpClient) { }

  getListarFuncionarios(usuarioLogado: LoginModel) : Observable<FuncionarioModel[]>{
    if (usuarioLogado.get_funcionario.cargo_funcionario == "PRESIDENTE") {
      return this.http.get<FuncionarioModel[]>(this.URL_FUNCIONARIO);
    }

    return this.http.get<FuncionarioModel[]>(this.URL_FUNCIONARIO+`?oficina_id=${usuarioLogado.get_funcionario.cod_oficina}`).pipe(take(1));
  }

  deleteFuncionario(id:number) : Observable<FuncionarioModel>{
    return this.http.delete<FuncionarioModel>(this.URL_FUNCIONARIO + `${id}`).pipe(take(1));
    
  }

  getFuncionarioById(id: number) : Observable<FuncionarioModel>{
    return this.http.get<FuncionarioModel>(this.URL_FUNCIONARIO + `${id}`).pipe(take(1));
  }
}
