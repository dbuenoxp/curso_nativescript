import { Component, OnInit } from '@angular/core';

import { trigger, style, animate, transition, keyframes } from "@angular/animations";

import { RouterExtensions } from "@nativescript/angular/router";

import { isAndroid, device } from "@nativescript/core/platform";

import * as Application from "@nativescript/core/application";

import { AuthenticateService } from "../authenticate.service";

@Component({
  selector: 'ns-route-one',
  templateUrl: './route-one.component.html',
  styleUrls: ['./route-one.component.css'],
  animations: [
    trigger("state ", [
        transition("inactive => active", [
            animate(2000, keyframes([
                style({transform: 'scale(1, 1)' }),
                style({transform: 'scale(0.5, 0.5)' }),
                style({transform: 'scale(1, 1)' }),
            ]))
        ])
    ])
]
})
export class RouteOneComponent implements OnInit {

  firstname: string;
  lastname: string;
  //people: Array<any>;
  currentState: boolean;

  constructor( private router: RouterExtensions, private authenticate: AuthenticateService) { 
      this.firstname = "";
      this.lastname = "";
     //this.people = [];
     this.currentState = false;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() =>{
      this.currentState = !this.currentState;
    }, 3000)
  }

  onSubmitTap(): void{
    // alert(this.firstname + " " + this.lastname);
    this.router.navigate(["/route-two", this.firstname, this.lastname], 
    { queryParams: {site: "Diego Bueno Perfil"}});

  }

  clearStorage(): void {
    this.authenticate.clearCredentials();
  }

  onHelpTap(): void{
    if(isAndroid){
      let packageManager = android.content.pm.PackageManager;
      let pkg = Application.android.context.getPackageManager().getPackageInfo(
        Application.android.context.PackageName(), packageManager.GET_META_DATA
      );
      alert({title: "Version", message: java.lang.Integer.toString(pkg.versionCode), okButtonText: "Close"});
    }else{
      let version = NSBundle.mainBundle.objectForInfoDictionaryKey("CFBundleShortVersionString");
      alert({title: "Version", 
            message: version, 
            okButtonText: "Close"
      });
    }
  }
}
