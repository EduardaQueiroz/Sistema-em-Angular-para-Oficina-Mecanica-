import { LoginService } from './../../../../service/login.service';
import { LoginModel } from './../../../../models/loginModel';
import { FuncionarioModel } from './../../../../models/funcionarioModel';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FuncionarioService } from 'src/app/service/funcionario.service';

@Component({
  selector: 'app-list-funcionario',
  templateUrl: './list-funcionario.component.html',
  styleUrls: ['./list-funcionario.component.scss']
})
export class ListFuncionarioComponent implements OnInit {

  codFuncionario: number = 0;
  nome: string = "";
  cpfcnpj: number = 0;
  rg: number = 0;
  telefone: number = 0;
  dataDeAdmissao: string = "";
  salario: number = 0.0;
  especialidade: string = "";
  foto: string = "";

  listaFuncionarios: FuncionarioModel[] = [];
  infoFuncionario: FuncionarioModel = {
    codfuncionario: 0, nome: "", cpfcnpj: 0, rg: 0, telefone: 0, dataadmissao: "", salario: 0.0,
    especialidade: "", foto: "", oficina_nome: ""
  };

  usuarioLogado: LoginModel = {
    login: "", senha: "", auth: false, codfuncionario: 0,
    get_funcionario: {
      cod_oficina: 0,
      descricao_oficina: "",
      cod_funcionario: 0,
      cargo_funcionario: ""
    }
  };

  constructor(private router: Router, private funcionarioService: FuncionarioService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.usuarioLogado = this.loginService.usuarioAutenticado;
    this.getListarFuncionario();
  }

  openCreateFuncionario(): void {
    this.getListarFuncionario();
  }

  getListarFuncionario() {
    this.funcionarioService.getListarFuncionarios(this.usuarioLogado).subscribe(
      (funcionarios: FuncionarioModel[]) => {

        funcionarios.forEach((element: any) => {
          this.listaFuncionarios.push(element);
          this.nome = element.nome;

        })

      },
    );

  }

  getInfoFuncionario(funcionario: FuncionarioModel) {
    this.listaFuncionarios.forEach((element: any) => {
      if (element.codfuncionario == funcionario.codfuncionario) {

        this.infoFuncionario = element;
      }
    })
  }

  deleteFuncionario(funcionario: FuncionarioModel) {
    this.funcionarioService.deleteFuncionario(funcionario.codfuncionario).subscribe();

    setTimeout(() => {
      this.listaFuncionarios = [];
      this.openCreateFuncionario();
    }, 1000);

  }

  openInformacoesClienteComponent() {
    this.router.navigate(['telaPrincipal/funcionarios/informacoes']);
  }
}
