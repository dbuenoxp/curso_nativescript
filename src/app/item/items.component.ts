import { Component, OnInit } from "@angular/core";

import { trigger, style, animate, transition, keyframes } from "@angular/animations";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html",
    styleUrls: ["./items.component.css"],
    animations: [
        trigger("state", [
            transition("inactive => active", [
                animate(2000, keyframes([
                    style({ transform: 'scale(1, 1)' }),
                    style({ transform: 'scale(0.5, 0.5)' }),
                    style({ transform: 'scale(1, 1)' }),
                ]))
            ])
        ])
    ]
})
export class ItemsComponent implements OnInit {

    firstname: string;
    lastname: string;

    // people: Array<any>;

    currentState: boolean;

    constructor() {
        this.firstname = "";
        this.lastname = "";
        // this.people = [];
        this.currentState = false;
    }

    ngOnInit(): void {
        // this.people.push({
        //     firstname: "Nic",
        //     lastname: "Raboy"
        // });
        // this.people.push({
        //     firstname: "Maria",
        //     lastname: "Raboy"
        // });
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.currentState = !this.currentState;
        }, 3000)
    }

    onSubmitTap(): void {
        alert(this.firstname + " " + this.lastname);
    }

    // onItemTap(args: any): void {
    //     console.log(args.index);
    //     alert(this.people[args.index].firstname + " " + this.people[args.index].lastname);
    // }

    // onLoadMoreItems(): void {
    //     console.log("Fetching more data...");
    //     this.people.push({
    //         firstname: "Alex",
    //         lastname: "Ziskind"
    //     });
    // }
}
