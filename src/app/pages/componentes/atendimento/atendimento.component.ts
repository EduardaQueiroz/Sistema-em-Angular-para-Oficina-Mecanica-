import { LoginService } from './../../../service/login.service';
import { LoginModel } from './../../../models/loginModel';
import { Router } from '@angular/router';
import { AtendimentoPrincipalModel } from './../../../models/atendimentoPrincipalModel';
import { VeiculoModel } from './../../../models/veiculoModel';
import { EnderecoModel } from './../../../models/enderecoModel';
import { ClienteModel } from './../../../models/clienteModel';
import { EnderecoService } from './../../../service/endereco.service';
import { ClienteService } from './../../../service/cliente.service';
import { FuncionarioService } from 'src/app/service/funcionario.service';
import { OrdemServicoModel } from './../../../models/ordemservicoModel';
import { ServicoModel } from './../../../models/servicoModel';
import { FuncionarioModel } from './../../../models/funcionarioModel';
import { Ordem_ServicoModel } from './../../../models/ordem_servicoModel';

import { Component, OnInit } from '@angular/core';
import { AtendimentoService } from '../../../service/atendimento.service';

//import * as $ from 'jquery';

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.scss']
})
export class AtendimentoComponent implements OnInit {

  /* Informações para montar o Atendimento no jeito de mandar pro HTML */

  listaAtendimentosAbertos: OrdemServicoModel[] = [];

  enderecoCliente: EnderecoModel = {
    codendereco: 0, rua: "", numero: 0, bairro: "", cidade: "", estado: "", cep: 0,
    latitude: 0, longitude: 0
  };

  listaOrdem_ServicoPorAtendimento: Ordem_ServicoModel[] = [];

  atendimentoAtual: OrdemServicoModel = {
    codordemservico: 0, entrada: "", saida: "", total: 0, codcliente: 0, placa: "",
    codfuncionario: 0, pendente: "", totalservico: 0, valordesconto: 0, get_cliente_info: { nome: "", cpf: 0, codEndereco: 0 },
    get_funcionario_info: { nome: "" }, get_veiculo_info: { marca: "", modelo: "" }
  };

  listaServicos: ServicoModel[] = [];
  servico: ServicoModel = { codservico: 0, descricao: "", preco: 0 };

  usuarioLogado: LoginModel = {
    login: "", senha: "", auth: false, codfuncionario: 0,
    get_funcionario: {
      cod_oficina: 0,
      descricao_oficina: "",
      cod_funcionario: 0,
      cargo_funcionario: ""
    }
  };

  constructor(private atendimentoService: AtendimentoService, private enderecoService: EnderecoService, private loginService: LoginService) {

  }

  ngOnInit(): void {
    this.usuarioLogado = this.loginService.usuarioAutenticado;
    this.getOrdemServico();
    console.log(this.usuarioLogado);
  }

  openListAtendimento(): void {
    this.getOrdemServico();
  }

  getOrdemServico() {

    this.atendimentoService.getOrdemServico(this.usuarioLogado).subscribe((ordemServico: OrdemServicoModel[]) => {
      ordemServico.forEach(element => {
        if (element.pendente == 'S') {
          this.listaAtendimentosAbertos.push(element);
        }
      });
      /* Pega todas as ordemservico pendentes */
    })
  }


  getServicosOrdemServico(ordemservico: OrdemServicoModel) {
    /* pegando todos os servicos referentes aquele atendimento */
    this.atendimentoService.getOrdem_ServicoById(ordemservico.codordemservico).subscribe((ordem_servico: Ordem_ServicoModel[]) => {
      this.listaOrdem_ServicoPorAtendimento = ordem_servico; /* recebe a lista de ordem_servico do atendimento */
      this.atendimentoAtual = ordemservico;
      this.enderecoService.getEnderecoById(ordemservico.get_cliente_info.codEndereco).subscribe(endereco => {
        this.enderecoCliente = endereco;
      })

      this.listaOrdem_ServicoPorAtendimento.forEach(servico => {
        this.atendimentoService.getServicoById(servico.codservico).subscribe(servico => {
          this.listaServicos.push(servico);
        })
      });

    });

  }

  finalizarAtendimento(atendimento: OrdemServicoModel) {
    atendimento.pendente = "N";
    this.atendimentoService.updateOrdemServico(atendimento).subscribe();

    setTimeout(() => {
      this.listaAtendimentosAbertos = [];
      this.openListAtendimento();
    }, 1000);

    //$("#verAtendimentoCompletoModal").hide;

  }

  localizarCliente(){
    
  }

}
