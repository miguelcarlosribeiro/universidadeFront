import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { logging } from 'protractor';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { GestaoComponent } from './pages/gestao/gestao.component';


const routes: Routes = [
  {
    path: "login", component: LoginComponent
    
  },
  {
    path: "admin", component: AdminComponent,
  children: [
    {
      path: "gestao", component: GestaoComponent
      
    },
    {
      path: "", redirectTo:"gestao", pathMatch: "full"
      
    },
  ]

  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
