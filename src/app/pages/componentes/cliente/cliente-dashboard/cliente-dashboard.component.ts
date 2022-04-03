import { LoginService } from './../../../../service/login.service';
import { LoginModel } from './../../../../models/loginModel';
import { ClientesDevedoresModel } from './../../../../models/clientesDevedoresModel';
import { DashboardService } from './../../../../service/dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-dashboard',
  templateUrl: './cliente-dashboard.component.html',
  styleUrls: ['./cliente-dashboard.component.scss']
})
export class ClienteDashboardComponent implements OnInit {

  listaClientesDevedores: ClientesDevedoresModel[] = [];

  valorTotalDivida: number = 0;
  valorTemp: number = 0;

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
    this.openInformacoesClienteComponent();
  }

  openInformacoesClienteComponent() {
    this.dashboardService.getFuncionariosClientes(this.usuarioLogado).subscribe(listaDashboard => {
      console.log(listaDashboard.divida_total_clientes_devedores)
      this.listaClientesDevedores = listaDashboard.divida_total_clientes_devedores;

      this.listaClientesDevedores.forEach(element => {
        this.valorTemp += element.total;
      });

      this.valorTotalDivida = this.valorTemp;  
    });


  }



}
