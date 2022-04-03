import { LoginService } from './../../../service/login.service';
import { ClienteModel } from './../../../models/clienteModel';
import { ClienteService } from './../../../service/cliente.service';
import { LoginModel } from './../../../models/loginModel';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: LoginModel = {
    login: "", senha: "", auth: false, codfuncionario: 0,
    get_funcionario: {
      cod_oficina: 0,
      descricao_oficina: "",
      cod_funcionario: 0,
      cargo_funcionario: ""
    }
  };

  constructor(private router: Router, private loginService: LoginService, private clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  fazerLogin() {
    this.loginService.pegarUsuarioAutenticado(this.login);
  }

}
