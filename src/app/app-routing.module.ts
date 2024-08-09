import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    title: "Home Page",
    loadChildren: () => import('./modules/pages/pages-routing.module').then(m => m.PagesRoutingModule),
  },
  {
    path: 'auth',
    title: "Auth Page",
    loadChildren: () => import('./modules/auth/auth-routing.module').then(m => m.AuthRoutingModule),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
