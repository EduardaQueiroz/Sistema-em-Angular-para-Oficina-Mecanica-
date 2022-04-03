import { AuthGuardChild } from './../guards/auth-guard-child';
import { AuthGuard } from './../guards/auth-guard';
import { ServicoDashboardComponent } from './componentes/servico/servico-dashboard/servico-dashboard.component';
import { FuncionarioDashboardComponent } from './componentes/funcionario/funcionario-dashboard/funcionario-dashboard.component';
import { ClienteDashboardComponent } from './componentes/cliente/cliente-dashboard/cliente-dashboard.component';
import { LoginComponent } from './componentes/login/login.component';
import { CreateFuncionarioComponent } from './componentes/funcionario/create-funcionario/create-funcionario.component';
import { ListFuncionarioComponent } from './componentes/funcionario/list-funcionario/list-funcionario.component';
import { CreateClienteComponent } from './componentes/cliente/create-cliente/create-cliente.component';
import { ListClienteComponent } from './componentes/cliente/list-cliente/list-cliente.component';
import { TelaPrincipalComponent } from './componentes/tela-principal/tela-principal.component';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtendimentoComponent } from './componentes/atendimento/atendimento.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "telaPrincipal",
    component: TelaPrincipalComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuardChild],
    children: [
      {
        path: "clientes",
        component: ListClienteComponent
      },
      {
        path: "clientes/create",
        component: CreateClienteComponent
      },
      {
        path: "clientes/informacoes",
        component: ClienteDashboardComponent
      },
      {
        path: "funcionarios",
        component: ListFuncionarioComponent
      },
      {
        path: "funcionarios/informacoes",
        component: FuncionarioDashboardComponent
      },
      {
        path: "atendimentos",
        component: AtendimentoComponent,
      },
      {
        path: "servicos/informacoes",
        component: ServicoDashboardComponent,
      },
      {
        path: "dashboard",
        component: DashboardComponent
      }
    ]
  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PageRoutingModule { }
