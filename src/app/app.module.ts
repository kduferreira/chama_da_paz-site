import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { MenuHomeComponent } from './components/menu-home/menu-home.component';
import { MenuInfoComponent } from './components/menu-info/menu-info.component';
import { ReservarComponent } from './components/reservar/reservar.component';
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { DaCasaComponent } from './pages/da-casa/da-casa.component';
import { EspecialidadesComponent } from './pages/especialidades/especialidades.component';
import { HomeComponent } from './pages/home/home.component';
import { MaioresPedidosComponent } from './pages/maiores-pedidos/maiores-pedidos.component';
import { RodapeComponent } from './pages/rodape/rodape.component';
import { SaboresComponent } from './pages/sabores/sabores.component';
import { MenuBarComponent } from './components/menu/menu-bar/menu-bar.component';
import { MenuLoginComponent } from './components/menu/menu-login/menu-login.component';
import { MenuLocalComponent } from './components/menus/menu-local/menu-local.component';
import { MenuLogoComponent } from './components/menus/menu-logo/menu-logo.component';
import { MenuSocialComponent } from './components/menus/menu-social/menu-social.component';

@NgModule({
  declarations: [
    AppComponent,
    BigCardComponent,
    CadastroComponent,
    
    MenuHomeComponent,
    MenuInfoComponent,
    
    ReservarComponent,
    CardapioComponent,
    DaCasaComponent,
    EspecialidadesComponent,
    HomeComponent,
    MaioresPedidosComponent,
    RodapeComponent,
    SaboresComponent,
    MenuBarComponent,
    MenuLoginComponent,
    MenuLocalComponent,
    MenuLogoComponent,
    MenuSocialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
