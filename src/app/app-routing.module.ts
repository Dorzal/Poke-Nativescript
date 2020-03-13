import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { ActivityComponent } from "./activity/activity.component";
import { ActivityDetailComponent } from "./activity-detail/activity-detail.component";
import { AddActivityComponent } from "./add-activity/add-activity.component";

const routes: Routes = [
    { path: "", redirectTo: "/activities", pathMatch: "full" },
    { path: "activity/:id", component: ActivityDetailComponent},
    { path: "activities", component: ActivityComponent },
    { path: "add", component: AddActivityComponent},
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
