import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from "keen-slider"
import {Produto} from "src/app/models/Produto.interface"


@Component({
  selector: 'app-menu-carrossel',
  templateUrl: './menu-carrossel.component.html',
  styleUrls: ['./menu-carrossel.component.css']
})
export class MenuCarrosselComponent {

  @Input()
  produtos:Produto[]=[]

  @Input()
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
          slides: { perView: 5, spacing: 3 },
        },
      },
      slides: { perView: 1 },
    })
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }

}
