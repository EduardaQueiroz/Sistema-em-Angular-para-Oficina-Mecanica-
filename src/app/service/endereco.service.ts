import { take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnderecoModel } from './../models/enderecoModel';
import { Injectable } from '@angular/core';

import * as urls from '../../global';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  URL_ENDERECO = urls.urlLocal + 'endereco/';

  constructor(private http: HttpClient) { }

  salvarEndereco(endereco: EnderecoModel) : Observable<EnderecoModel>{
    console.log(endereco);
    return this.http.post<EnderecoModel>(this.URL_ENDERECO, endereco);
  }

  getEnderecos() : Observable<EnderecoModel[]>{
    return this.http.get<EnderecoModel[]>(this.URL_ENDERECO).pipe(take(1));
  }

  getEnderecoById(id: number): Observable<EnderecoModel>{
    return this.http.get<EnderecoModel>(this.URL_ENDERECO + `${id}`).pipe(take(1));
  }
}
