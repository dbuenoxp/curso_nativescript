import { Injectable } from '@angular/core';
import * as ApplicationSettings from "@nativescript/core/application-settings";
//import { onErrorResumeNext } from 'rxjs';


export interface Credentials{
  firstname: string,
  lastname: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }

  setCredentials(firstname: string, lastname: string): void{
    if(firstname != "" && lastname != ""){
      ApplicationSettings.getString("firstname", firstname);
      ApplicationSettings.getString("lastname", lastname);
    }
  }

  getCredentials(): Credentials{
    let firstname = ApplicationSettings.getString("firstname", "");
    let lastname = ApplicationSettings.getString("lastname", "");
    return{
      firstname: firstname,
      lastname: lastname
    }
  }

  clearCredentials(): void{
    ApplicationSettings.clear();
  }

  isAuthenticated(): boolean {
    let credentials = this.getCredentials();
    if(credentials.firstname != "" && credentials.lastname != ""){
      return true;
    }
    return false;
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
