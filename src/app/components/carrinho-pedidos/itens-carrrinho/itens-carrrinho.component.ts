import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-itens-carrrinho',
  templateUrl: './itens-carrrinho.component.html',
  styleUrls: ['./itens-carrrinho.component.css']
})
export class ItensCarrrinhoComponent {

  @Input()
  quantidade: number = 1;
  @Input()
  precoItem: number = 11.50;
  @Input()
  precoTotal: number = this.precoItem


  adicionar():void{
    this.quantidade++;

    this.precoTotal = this.precoItem * this.quantidade
    
  }

  remover():void{
    if(this.quantidade>0){
      this.quantidade--;
      this.precoTotal = this.precoItem * this.quantidade
    }
  }

}
