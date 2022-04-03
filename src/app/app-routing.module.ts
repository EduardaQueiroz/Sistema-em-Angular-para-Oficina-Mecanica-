import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/componentes/login/login.component';
import { AtendimentoComponent } from './pages/componentes/atendimento/atendimento.component';
import { CreateClienteComponent } from './pages/componentes/cliente/create-cliente/create-cliente.component';
import { CreateFuncionarioComponent } from './pages/componentes/funcionario/create-funcionario/create-funcionario.component';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
