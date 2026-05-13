import { Routes } from '@angular/router';
import {AuthLayoutComponent} from './front-end/layouts/auth-layout/auth-layout.component';
import {LoginComponent} from './front-end/auth/login/login.component';
import {DashboardComponent} from './front-end/pages/dashbord/dashboard.component';
import {RegisterComponent} from './front-end/auth/register/register.component';
import {MainLayoutsComponent} from './front-end/layouts/main-layouts/main-layouts.component';


export const routes: Routes = [



  {
    path:'',
    component:AuthLayoutComponent,
    children:[
      {
        path:'', redirectTo:'auth/login', pathMatch:'full'
      },
      {
        path:'auth/login', component:LoginComponent
      },
      { path: "auth/register", component: RegisterComponent }
    ]
  },


  {
   path:'',
    component:MainLayoutsComponent,

    children:[
      {
        path:'', redirectTo:'home/Tableau-de-bord', pathMatch:'full'
      },
      {
        path:'home/Tableau-de-bord', component:DashboardComponent
      },

    ]
  },





];
