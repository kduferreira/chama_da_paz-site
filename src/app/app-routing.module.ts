import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AcessoUsuarioComponent } from './pages/acesso-usuario/acesso-usuario.component';


const routes: Routes = [
  {
    path:'', component:HomeComponent
  },

  {
    path:"cadastro", component: AcessoUsuarioComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
