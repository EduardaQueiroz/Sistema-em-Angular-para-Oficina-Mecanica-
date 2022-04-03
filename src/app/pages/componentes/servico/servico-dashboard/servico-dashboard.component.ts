import { LoginService } from './../../../../service/login.service';
import { LoginModel } from './../../../../models/loginModel';
import { OrdemServicoDemorouMaisTempoModel } from './../../../../models/ordemServicoDemorouMaisTempoModel';
import { ModelosMarcasMaisAtendidosModel } from './../../../../models/modelosMarcasMaisAtendidosModel';
import { ItensDeServicoPorServicosModel } from './../../../../models/itensDeServicoPorServicoModel';
import { DashboardService } from './../../../../service/dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servico-dashboard',
  templateUrl: './servico-dashboard.component.html',
  styleUrls: ['./servico-dashboard.component.scss']
})
export class ServicoDashboardComponent implements OnInit {

  selectServico: string = "";
  listaItensDeServico: ItensDeServicoPorServicosModel[] = [];
  itens: string[] = [];

  listaOrdemServicoDemorouMaisTempo: OrdemServicoDemorouMaisTempoModel[] = [];

  listaModelosMarcasMaisAtendidos: ModelosMarcasMaisAtendidosModel[] = [];

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
    this.getItensDeServico();
  }

  onChange(e: any) {
    this.selectServico = e.target.value;
    this.listarItensDeServico();
  }

  getItensDeServico(){
    this.dashboardService.getFuncionariosClientes(this.usuarioLogado).subscribe(listaDashboard => {
      this.listaItensDeServico = listaDashboard.itens_servico_dado_determinado_servico;
      this.listaModelosMarcasMaisAtendidos = listaDashboard.carros_modelos_mais_atendidos;
      this.listaOrdemServicoDemorouMaisTempo = listaDashboard.ordem_servico_demandaram_mais_tempo;
    })
  }

  listarItensDeServico(){
    this.listaItensDeServico.forEach(element => {
      if(element.servico == this.selectServico){
        this.itens = element.itens;
      }
    });
  }

}
