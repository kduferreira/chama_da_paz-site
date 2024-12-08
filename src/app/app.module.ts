import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuInfoComponent } from './components/header/menu-info/menu-info.component';
import { ReservarComponent } from './components/reservar/reservar.component';
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { DaCasaComponent } from './pages/da-casa/da-casa.component';
import { EspecialidadesComponent } from './pages/especialidades/especialidades.component';
import { HomeComponent } from './pages/home/home.component';
import { MaioresPedidosComponent } from './pages/maiores-pedidos/maiores-pedidos.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { SaboresComponent } from './pages/sabores/sabores.component';
import { MenuLocalComponent } from './components/menus/menu-local/menu-local.component';
import { MenuSocialComponent } from './components/menus/menu-social/menu-social.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AcessoUsuarioComponent } from './pages/acesso-usuario/acesso-usuario.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { CarrinhoPedidosComponent } from './components/carrinho-pedidos/carrinho-pedidos.component';
import { MonteComponent } from './monte/monte.component';
import { HeaderComponent } from './components/header/header.component';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { MenuBigCardComponent } from './components/menu-big-card/menu-big-card.component';
import { MaisPedidosComponent } from './components/mais-pedidos/mais-pedidos.component';
import { ItensCarrrinhoComponent } from './components/carrinho-pedidos/itens-carrrinho/itens-carrrinho.component';
import { CardapioPageComponent } from './pages/cardapio-page/cardapio-page.component';
import { ItensCardapioComponent } from './components/itens-cardapio/itens-cardapio.component';

@NgModule({
  declarations: [
    AppComponent,
    
    CadastroComponent,
    
    
    MenuInfoComponent,
    
    ReservarComponent,
    CardapioComponent,
    DaCasaComponent,
    EspecialidadesComponent,
    HomeComponent,
    MaioresPedidosComponent,
    RodapeComponent,
    SaboresComponent,
    
   
    MenuLocalComponent,
  
    MenuSocialComponent,
    LoginComponent,
    AcessoUsuarioComponent,
    CarrinhoPedidosComponent,
    MonteComponent,
    HeaderComponent,
    
    MenuBigCardComponent,
          MaisPedidosComponent,
          ItensCarrrinhoComponent,
          CardapioPageComponent,
          ItensCardapioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxMaskDirective,
    ReactiveFormsModule
  ],
  providers: [provideNgxMask({})],
  bootstrap: [AppComponent]
})
export class AppModule { }
