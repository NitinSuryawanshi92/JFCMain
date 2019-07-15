import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { DashbordComponent } from './component/dashbord/dashbord.component';

const APP_ROUTES: Routes = [
  {
    path: "userlogin",
    component: UserLoginComponent
  },
  {
    path: "dashbord",
    component: DashbordComponent
  }
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(APP_ROUTES, { useHash: true, initialNavigation: false })],
})


export class AppRoutingModule { }
