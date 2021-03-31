import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-route-three',
  templateUrl: './route-three.component.html',
  styleUrls: ['./route-three.component.css']
})
export class RouteThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onMapReady(args: any): void {
    args.map.addMarkers([
        {
            lat: 37.7397,
            lng: -121.4252,
            title: "Tracy, CA",
            subtitle: "The Polyglot Developer",
            selected: true,
            onCalloutTap: () => {
                console.log("The marker was tapped");
            }
        }
    ])
  }
}
