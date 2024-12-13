import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AcessoUsuarioComponent } from './pages/acesso-usuario/acesso-usuario.component';
import { CardapioPageComponent } from './pages/cardapio-page/cardapio-page.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { GerenciamentoCardapioComponent } from './pages/gerenciamento-cardapio/gerenciamento-cardapio.component';


const routes: Routes = [
  {
    path:'', component:HomeComponent
  },

  {
    path:"cadastro", component: AcessoUsuarioComponent
  },
  {
    path:"cardapio", component: CardapioPageComponent
  },
  {
    path:"pedidos", component: PedidosComponent
  },

  {
    path:"painel", component: GerenciamentoCardapioComponent
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
