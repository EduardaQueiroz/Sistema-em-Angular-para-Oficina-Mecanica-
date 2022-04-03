import { urlLocal } from './../../global';
import { LoginModel } from './../models/loginModel';

import { ServicoModel } from './../models/servicoModel';
import { OrdemServicoModel } from '../models/ordemservicoModel';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Ordem_ServicoModel } from '../models/ordem_servicoModel';

import * as urls from '../../global';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoService {

  private URL_ORDEMSERVICO = urls.urlLocal + "os/";
  private URL_ORDEM_SERVICO = urls.urlLocal + "ordem_servico/?codordemservico=";
  private URL_SERVICO = urls.urlLocal + 'servico/';

  constructor(private http: HttpClient) { }

  getListarAtendimentos(): Observable<OrdemServicoModel[]> {
    return this.http.get<OrdemServicoModel[]>(this.URL_ORDEMSERVICO).pipe(take(1));
  }

  /* pegar os servicos por id */
  getServicoById(id: number): Observable<ServicoModel> {
    return this.http.get<ServicoModel>(this.URL_SERVICO + `${id}`)
  }

  getOrdemServico(usuarioLogado: LoginModel): Observable<OrdemServicoModel[]> {
    console.log(usuarioLogado.get_funcionario.cod_oficina)
    if (usuarioLogado.get_funcionario.cargo_funcionario == "PRESIDENTE") {
      setTimeout(() => { console.log("this is the first message") }, 2000);
      return this.http.get<OrdemServicoModel[]>(this.URL_ORDEMSERVICO);
    }

    setTimeout(() => { console.log("this is the first message") }, 2000);
    return this.http.get<OrdemServicoModel[]>(this.URL_ORDEMSERVICO+`?oficina_id=${usuarioLogado.get_funcionario.cod_oficina}`);

  }

  getOrdem_ServicoById(id: number): Observable<Ordem_ServicoModel[]> {
    return this.http.get<Ordem_ServicoModel[]>(this.URL_ORDEM_SERVICO + `${id}`)
  }

  updateOrdemServico(ordem: OrdemServicoModel): Observable<OrdemServicoModel> {
    return this.http.put<OrdemServicoModel>(this.URL_ORDEMSERVICO + `${ordem.codordemservico}/`, ordem);
  }
}
