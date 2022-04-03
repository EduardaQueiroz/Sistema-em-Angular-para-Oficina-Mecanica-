
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PageRoutingModule } from './page-routing.module';

import { LoginComponent } from './componentes/login/login.component';

import { NavbarComponent } from './componentes/navbar/navbar.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { TelaPrincipalComponent } from './componentes/tela-principal/tela-principal.component';
import { AtendimentoComponent } from './componentes/atendimento/atendimento.component';
import { ListClienteComponent } from './componentes/cliente/list-cliente/list-cliente.component';
import { CreateClienteComponent } from './componentes/cliente/create-cliente/create-cliente.component';
import { CreateFuncionarioComponent } from './componentes/funcionario/create-funcionario/create-funcionario.component';
import { ListFuncionarioComponent } from './componentes/funcionario/list-funcionario/list-funcionario.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ClienteDashboardComponent } from './componentes/cliente/cliente-dashboard/cliente-dashboard.component';
import { FuncionarioDashboardComponent } from './componentes/funcionario/funcionario-dashboard/funcionario-dashboard.component';
import { ServicoDashboardComponent } from './componentes/servico/servico-dashboard/servico-dashboard.component';

@NgModule({
  declarations: [
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    TelaPrincipalComponent,
    AtendimentoComponent,
    ListClienteComponent,
    CreateClienteComponent,
    CreateFuncionarioComponent,
    ListFuncionarioComponent,
    DashboardComponent,
    ClienteDashboardComponent,
    FuncionarioDashboardComponent,
    ServicoDashboardComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    FormsModule
  ],
  exports: [
    LoginComponent,
    TelaPrincipalComponent,
  ]
})
export class PageModule { }
