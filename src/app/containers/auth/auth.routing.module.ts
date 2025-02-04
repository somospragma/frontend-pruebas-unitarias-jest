import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const AUTH_ROUTES: Routes = [
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'register',
  },
];


@NgModule({
  imports: [RouterModule.forChild(AUTH_ROUTES)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}