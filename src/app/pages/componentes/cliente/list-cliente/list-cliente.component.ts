import { OficinaLocalizadaModel } from './../../../../models/oficinaLocalizadaModel';
import { ClientesDevedoresModel } from './../../../../models/clientesDevedoresModel';
import { DashboardService } from './../../../../service/dashboard.service';
import { EnderecoService } from './../../../../service/endereco.service';
import { EnderecoModel } from './../../../../models/enderecoModel';
import { ClienteService } from './../../../../service/cliente.service';
import { ClienteModel } from './../../../../models/clienteModel';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.scss']
})
export class ListClienteComponent implements OnInit {

  listaClientes: ClienteModel[] = [];

  infoCliente: ClienteModel = { codcliente: 0, nome: "", cpfcnpj: 0, rg: 0, telefone: 0, celular: 0, codendereco: 0, tipocliente: "" }
  infoEnderecoCliente: EnderecoModel = { codendereco: 0, rua: "", numero: 0, bairro: "", cidade: "", estado: "", cep: 0, latitude: 0, longitude: 0 }

  oficinaLocalizada: OficinaLocalizadaModel = {
    nome: "",
    distancia_oficina: {
      distancia_em_km: 0,
      descricao_oficina: ""
    }
  }

  constructor(private router: Router, private clienteService: ClienteService,
    private enderecoService: EnderecoService) { }

  ngOnInit(): void {
    this.getListarFuncionario();
    
  }

  openCreateCliente(): void {
    console.log("entrei no click do botão")
    this.router.navigate(['telaPrincipal/clientes/create'])
  }

  getListarFuncionario() {
    this.clienteService.getListarClientes().subscribe(
      (clientes: ClienteModel[]) => {
        clientes.forEach((element: any) => {
          this.listaClientes.push(element);

        })

      },
    );

  }

  getInfoCliente(cliente: ClienteModel) {
    this.listaClientes.forEach((element: any) => {
      if (element.codcliente == cliente.codcliente) {
        this.infoCliente = element;
        this.enderecoService.getEnderecoById(element.codendereco).subscribe(endereco => {
          this.infoEnderecoCliente = endereco;
          this.localizarOficinaMaisProx(this.infoCliente.nome);
        })
      }
    })
  }

  openInformacoesClienteComponent() {
    this.router.navigate(['telaPrincipal/clientes/informacoes'])
  }

  localizarOficinaMaisProx(nomeCliente: string) {
    this.clienteService.getLocalizarOficinaClienteCadastrado().subscribe(oficinas => {
      console.log(oficinas);
      oficinas.forEach(element => {
        if(nomeCliente === element.nome){
          this.oficinaLocalizada = element;
          return;
        }
      });
    })
  }
}
