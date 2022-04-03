import { Router } from '@angular/router';
import { EnderecoService } from './../../../../service/endereco.service';
import { ClienteService } from './../../../../service/cliente.service';
import { EnderecoModel } from './../../../../models/enderecoModel';
import { ClienteModel } from './../../../../models/clienteModel';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.scss']
})
export class CreateClienteComponent implements OnInit {

  
  cliente: ClienteModel = { codcliente: 0, nome: "", cpfcnpj: 0, rg: 0, telefone: 0, celular: 0, codendereco: 0, tipocliente: "" };
  endereco: EnderecoModel = { codendereco: 0, rua: "", numero: 0, bairro: "", cidade: "", estado: "", cep: 0, latitude: 0, longitude: 0 }

  estadoSelecionado: any;

  /* estados: any[] = [
    { sigla: 'AC' },
    { sigla: 'AL' },
    { sigla: 'AP' },
    { sigla: 'AM' },
    { sigla: 'BA' },
    { sigla: 'CE' },
    { sigla: 'DF' },
    { sigla: 'ES' },
    { sigla: 'GO' },
    { sigla: 'MA' },
    { sigla: 'MT' },
    { sigla: 'MS' },
    { sigla: 'MG' },
    { sigla: 'PA' },
    { sigla: 'PB' },
    { sigla: 'PR' },
    { sigla: 'PE' },
    { sigla: 'PI' },
    { sigla: 'RJ' },
    { sigla: 'RN' },
    { sigla: 'RS' },
    { sigla: 'RO' },
    { sigla: 'RR' },
    { sigla: 'SC' },
    { sigla: 'SP' },
    { sigla: 'SE' },
    { sigla: 'TO' }]; */

  listaDeEstados: string[] = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR",
    "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"];

  constructor(private router: Router, private clienteService: ClienteService, private enderecoService: EnderecoService) {

  }

  ngOnInit(): void {

  }

  onChange(e: any) {
    this.estadoSelecionado = e.target.value;
  }

  openClientesComponent(): void {
    this.router.navigate(['/clientes'])
  }

  salvarCliente() {
    console.log(this.endereco);
    let endereco = this.enderecoService.salvarEndereco(this.endereco).subscribe(endereco => {
      this.cliente.codendereco = endereco.codendereco;
      this.clienteService.salvarCliente(this.cliente).subscribe();
    });
    
    this.openClientesComponent();
  }

}
