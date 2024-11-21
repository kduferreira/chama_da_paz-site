import { Component } from '@angular/core';
import { MenuBarComponent } from "../menu/menu-bar/menu-bar.component";
import { MenuLoginComponent } from "../menu/menu-login/menu-login.component";
import { MenuLogoComponent } from "../menus/menu-logo/menu-logo.component";
import { PedidoComponent } from "../../pages/pedido/pedido.component";
import { ReservarComponent } from "../reservar/reservar.component";

@Component({
  selector: 'app-menu-home',
  standalone: true,
  imports: [MenuBarComponent, MenuLoginComponent, MenuLogoComponent, PedidoComponent, ReservarComponent],
  templateUrl: './menu-home.component.html',
  styleUrl: './menu-home.component.css'
})
export class MenuHomeComponent {

}
