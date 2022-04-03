import { LoginModel } from './../models/loginModel';
import { ItensDeServicoPorServicosModel } from './../models/itensDeServicoPorServicoModel';
import { FuncionarioClienteModel } from './../models/funcionarioClienteModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import * as urls from '../../global';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private URL_DASHBOARD = urls.urlLocal + 'dashboard/';

  constructor(private http: HttpClient) { }

  getFuncionariosClientes(usuarioLogado: LoginModel): Observable<any> {
    if (usuarioLogado.get_funcionario.cargo_funcionario == "PRESIDENTE") {
      return this.http.get(this.URL_DASHBOARD);
    }

    return this.http.get(this.URL_DASHBOARD+`?oficina_id=${usuarioLogado.get_funcionario.cod_oficina}`);

  }

  /* getItensDeServicoPorServicos(): Observable<ItensDeServicoPorServicosModel>{
    return this.http.get<ItensDeServicoPorServicosModel>(this.URL_DASHBOARD+"/itens_servico_dado_determinado_servico")
  } */


}
