import { Component } from '@angular/core';
import { MenuHomeComponent } from "../../components/menu-home/menu-home.component";
import { BigCardComponent } from "../../components/big-card/big-card.component";
import { MenuInfoComponent } from "../../components/menu-info/menu-info.component";
import { EspecialidadesComponent } from "../especialidades/especialidades.component";
import { SaboresComponent } from "../sabores/sabores.component";
import { PedidoComponent } from "../pedido/pedido.component";
import { CardapioComponent } from "../cardapio/cardapio.component";
import { DaCasaComponent } from "../da-casa/da-casa.component";
import { RodapeComponent } from "../rodape/rodape.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BigCardComponent, MenuInfoComponent, EspecialidadesComponent, SaboresComponent, PedidoComponent, CardapioComponent, DaCasaComponent, RodapeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
