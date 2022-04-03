import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardChild {

  constructor() { }

  canActivateChild(route: ActivatedRouteSnapshot
  , state: RouterStateSnapshot): boolean{
    /* if(this.authLoginService.usuarioAutenticado.auth == true){
      return true;
    }
    this.router.navigate(["/telaPrincipal/atendimentos"]);
    return false;
     */
    return true;
  }
}
