import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,private service: ApiService){}
  canActivate(){
    if (this.service.isloggedin()){
      return true;
    }
    alert("You have not logged in....Please Login");
    this.router.navigate(['./login'])
    return false;
  }
  }
  

