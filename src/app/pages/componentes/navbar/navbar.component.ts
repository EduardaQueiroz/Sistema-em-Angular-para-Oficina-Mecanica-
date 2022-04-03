import { LoginService } from './../../../service/login.service';
import { LoginModel } from './../../../models/loginModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  usuarioLogado: LoginModel = {
    login: "", senha: "", auth: false, codfuncionario: 0,
    get_funcionario: {
      cod_oficina: 0,
      descricao_oficina: "",
      cod_funcionario: 0,
      cargo_funcionario: ""
    }
  };

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.usuarioLogado = this.loginService.usuarioAutenticado;
    
  }

}
