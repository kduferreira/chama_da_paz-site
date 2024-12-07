import { Component } from '@angular/core';

@Component({
  selector: 'app-itens-carrrinho',
  templateUrl: './itens-carrrinho.component.html',
  styleUrls: ['./itens-carrrinho.component.css']
})
export class ItensCarrrinhoComponent {

  quantidade: number = 1;
  precoItem: number = 11.50;
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
