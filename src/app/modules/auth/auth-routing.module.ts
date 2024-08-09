import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { NgModule } from "@angular/core";

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        title: 'App Login',
        component: LoginComponent
    },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
}) 
export class AuthRoutingModule { };
