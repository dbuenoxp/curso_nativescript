import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import * as ApplicationSettings from '@nativescript/core/application-settings';
//import * as ApplicationSettings from "tns-core-modules/application-settings";

import { AuthenticateService } from "./authenticate.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticateGuard implements CanActivate {

  constructor(private authenticate: AuthenticateService){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(next.params);
    this.authenticate.setCredentials(next.params.firstname, next.params.lastname);
    // if(this.authenticate.isAuthenticated()){
    //   return true;
    // }

    // return false;

    return this.authenticate.isAuthenticated();
    // let firstname = ApplicationSettings.getString("firstname", "");
    // let lastname = ApplicationSettings.getString("lastname", "");
    // if(next.params.firstname == "" && next.params.lastname == ""){
    //   if(firstname != "" && lastname != ""){
    //     return true;
    //   }
    // }else{
    //   ApplicationSettings.setString("firstname", next.params.firstname);
    //   ApplicationSettings.setString("lastname", next.params.lastname);
    //   return true;
    // }
    // return false;
  }
}
