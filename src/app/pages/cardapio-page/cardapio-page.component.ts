import { Component, ElementRef, ViewChild } from '@angular/core';

import {dataFakeCategoria} from 'src/app/dataFake/itens-cardapio';
import KeenSlider, { KeenSliderInstance } from "keen-slider"

@Component({
  selector: 'app-cardapio-page',
  templateUrl: './cardapio-page.component.html',
  styleUrls: ['./cardapio-page.component.css']
})
export class CardapioPageComponent {

  categorias = dataFakeCategoria;

  




}
