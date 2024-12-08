import { Component, ElementRef, ViewChild } from '@angular/core';

import {dataFakeCategoria} from 'src/app/dataFake/itens-cardapio';
import KeenSlider, { KeenSliderInstance } from "keen-slider"

@Component({
  selector: 'app-cardapio-page',
  templateUrl: './cardapio-page.component.html',
  styleUrls: ['./cardapio-page.component.css']
})
export class CardapioPageComponent {

  categorias = dataFakeCategoria

  categoriaNome:string=""

  @ViewChild("sliderRef") 
  sliderRef!: ElementRef<HTMLElement>;

  slider: any = null

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      breakpoints: {
        "(min-width: 400px)": {
          slides: { perView: 2, spacing: 1 },
        },
        "(min-width: 1000px)": {
          slides: { perView: 4, spacing: 1 },
        },
      },
      slides: { perView: 1 },
    })
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }


}
