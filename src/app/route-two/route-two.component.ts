import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular/router';

import { ActivatedRoute } from "@angular/router";
//import { ApplicationSettings } from '@nativescript/core';
import * as ApplicationSettings from '@nativescript/core/application-settings';
import { format } from "date-fns";

//import { AuthenticateService } from "../authenticate.service";

@Component({
  selector: 'ns-route-two',
  templateUrl: './route-two.component.html',
  styleUrls: ['./route-two.component.css']
})
export class RouteTwoComponent implements OnInit {

  firstname: string;
  lastname: string;

  currentTime: string;
  currentDate: string;

  constructor(private router: RouterExtensions, private route: ActivatedRoute) { 
    this.firstname = "";
    this.lastname = "";
    this.currentDate = "";
    this.currentTime = "";
  }

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   console.log(params);
    //   this.firstname = params["firstname"];
    //   this.lastname = params["lastname"];
    // });
    // this.route.queryParams.subscribe(params => {
    //   console.log(params);
    // });

    this.firstname = ApplicationSettings.getString("firstname", "");
    this.lastname = ApplicationSettings.getString("lastname", "");
    this.currentDate = format(new Date(), "MM/dd/yyyy");
    this.currentTime = format(new Date(), "hh:mm:ss aaaa");
  }

  onNavBtnBack(): void{
    this.router.back();
  }

}
