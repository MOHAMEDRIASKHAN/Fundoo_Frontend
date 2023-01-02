import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthgaurdService } from '../Services/Authgaurd/authgaurd.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdGuard implements CanActivate {
  constructor(private auth: AuthgaurdService, private router: Router){}

  canActivate(): boolean
  {
    if(!this.auth.access())
    {
      this.router.navigateByUrl("/Demo");
      return true;
    }
    else
    {
      return this.auth.access();
    }
  }
  
}
