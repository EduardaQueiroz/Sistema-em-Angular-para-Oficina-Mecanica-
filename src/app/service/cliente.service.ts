import { VeiculoModel } from './../models/veiculoModel';
import { take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ClienteModel } from './../models/clienteModel';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import * as urls from '../../global';
import { OficinaLocalizadaModel } from '../models/oficinaLocalizadaModel';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  URL_CLIENTE = urls.urlLocal + 'cliente/';
  URL_VEICULO = urls.urlLocal + 'veiculo/';
  URL_OFICINALOCALIZADA = urls.urlLocal + 'oficinas-mais-proximas/';

  constructor(private http: HttpClient) { }

  salvarCliente(cliente: ClienteModel) : Observable<ClienteModel>{
    return this.http.post<ClienteModel>(this.URL_CLIENTE, cliente);
  }

  getListarClientes() : Observable<ClienteModel[]>{
    return this.http.get<ClienteModel[]>(this.URL_CLIENTE).pipe(take(1));
  }

  getClienteById(id: number): Observable<ClienteModel>{
    return this.http.get<ClienteModel>(this.URL_CLIENTE + `${id}`);
  }

  getVeiculoClienteByPlaca(placa: string): Observable<VeiculoModel>{
    return this.http.get<VeiculoModel>(this.URL_VEICULO + `${placa}`)
  }

  getLocalizarOficinaClienteCadastrado(): Observable<OficinaLocalizadaModel[]>{
    return this.http.get<OficinaLocalizadaModel[]>(this.URL_OFICINALOCALIZADA);
  }
}
