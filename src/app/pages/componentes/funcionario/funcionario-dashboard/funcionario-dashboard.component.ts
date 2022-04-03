import { LoginService } from './../../../../service/login.service';
import { LoginModel } from './../../../../models/loginModel';
import { FuncionarioFezTodosOsServicosModel } from './../../../../models/funcionarioFezTodosOsServicosModel';
import { FuncionarioRecebeMesmoSalarioModel } from './../../../../models/funcionarioRecebeMesmoSalarioModel';
import { FuncionarioGanhaMaisQueMediaModel } from './../../../../models/funcionarioGanhaMaisQueMediaModel';
import { FuncionarioClienteModel } from './../../../../models/funcionarioClienteModel';
import { DashboardService } from './../../../../service/dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario-dashboard',
  templateUrl: './funcionario-dashboard.component.html',
  styleUrls: ['./funcionario-dashboard.component.scss']
})
export class FuncionarioDashboardComponent implements OnInit {

  listaFuncionariosQueSaoClientes: FuncionarioClienteModel[] = [];
  listaFuncionariosQueGanhamMaisQueMediaSalarial: FuncionarioGanhaMaisQueMediaModel[] = [];
  listaFuncionariosQueRecebemMesmoSalario: FuncionarioRecebeMesmoSalarioModel[] = [];

  listaFuncionarioExecutouTodosServicos: FuncionarioFezTodosOsServicosModel[] = [];
  mensagem: string = "";
  titulo: string = "";
  funcionarios: string[] = [];

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
      this.listaFuncionarioExecutouTodosServicos = listaDashboard.fun_part_todos_os_concertos;
    })

    if (this.listaFuncionarioExecutouTodosServicos.length == 0) {
      console.log(this.listaFuncionarioExecutouTodosServicos.length);
      this.mensagem = "Não existe nenhum mecânico que executou todos os serviços.";
    } else {
      this.mensagem = `${this.listaFuncionarioExecutouTodosServicos.length}` + " mecânicos executaram todos os servicos.";
      this.titulo = "FUNCIONÁRIOS";
      this.listaFuncionarioExecutouTodosServicos.forEach(element => {
        this.funcionarios.push(element.nome);
      });
    }

  }

}
