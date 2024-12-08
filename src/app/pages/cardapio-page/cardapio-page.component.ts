import { Component } from '@angular/core';

import {dataFakeCategoria} from 'src/app/dataFake/itens-cardapio';

@Component({
  selector: 'app-cardapio-page',
  templateUrl: './cardapio-page.component.html',
  styleUrls: ['./cardapio-page.component.css']
})
export class CardapioPageComponent {

  categorias = dataFakeCategoria

  categoriaNome:string=""

}
