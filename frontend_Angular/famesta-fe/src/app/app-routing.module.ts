import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path: '',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path: 'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'logout',component:LogoutComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [
  LoginComponent,
  RegisterComponent,
  DashboardComponent,
  PageNotFoundComponent,
  LogoutComponent,
]
