import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { RouteOneComponent } from "./route-one/route-one.component";
import { RouteTwoComponent } from "./route-two/route-two.component";
import { RouteThreeComponent } from "./route-three/route-three.component";

import { AuthenticateGuard } from "./authenticate.guard";

const routes: Routes = [
    { path: "", redirectTo: "/route-one", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "route-one", component: RouteOneComponent },
    { path: "route-two/:firstname/:lastname", component: RouteTwoComponent, canActivate: [AuthenticateGuard] },
    { path: "route-three", component: RouteThreeComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
