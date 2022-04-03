import { LoginService } from './../service/login.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authLoginService: LoginService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    console.log("guarda de rota")
    if(this.authLoginService.usuarioEstaAutenticado()){
      console.log("GR - entrei no if")
      return true;
    }
    this.router.navigate(['/']);
    return false;
    
  }
}
