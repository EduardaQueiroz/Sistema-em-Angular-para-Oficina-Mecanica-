import { LoginService } from './../../../service/login.service';
import { LoginModel } from './../../../models/loginModel';
import { OrdemServicoDemorouMaisTempoModel } from './../../../models/ordemServicoDemorouMaisTempoModel';
import { FuncionarioRecebeMesmoSalarioModel } from './../../../models/funcionarioRecebeMesmoSalarioModel';
import { FuncionarioGanhaMaisQueMediaModel } from './../../../models/funcionarioGanhaMaisQueMediaModel';
import { FuncionarioClienteModel } from './../../../models/funcionarioClienteModel';
import { DashboardService } from './../../../service/dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  listaFuncionariosQueSaoClientes: FuncionarioClienteModel[] = [];
  listaFuncionariosQueGanhamMaisQueMediaSalarial: FuncionarioGanhaMaisQueMediaModel[] = [];
  listaFuncionariosQueRecebemMesmoSalario: FuncionarioRecebeMesmoSalarioModel[] = [];

  mesSelecionado: string = "";

  usuarioLogado: LoginModel = {
    login: "", senha: "", auth: false, codfuncionario: 0,
    get_funcionario: {
      cod_oficina: 0,
      descricao_oficina: "",
      cod_funcionario: 0,
      cargo_funcionario: ""
    }
  };

  constructor(private dashboardService: DashboardService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.usuarioLogado = this.loginService.usuarioAutenticado;
    this.getFuncionarioCliente();
  }

  getFuncionarioCliente() {
    this.dashboardService.getFuncionariosClientes(this.usuarioLogado).subscribe(listaDashboard => {
      console.log(listaDashboard);
      this.listaFuncionariosQueSaoClientes = listaDashboard.fun_que_tmb_sao_clientes;
      this.listaFuncionariosQueGanhamMaisQueMediaSalarial = listaDashboard.qnt_func_ganham_mais_que_media_salario;
      this.listaFuncionariosQueRecebemMesmoSalario = listaDashboard.fun_recebem_mesmo_salario;
      
    })

  }

  onChange(e: any) {
    this.mesSelecionado = e.target.value;
    console.log(this.mesSelecionado);
  }

}
