import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-itens-carrrinho',
  templateUrl: './itens-carrrinho.component.html',
  styleUrls: ['./itens-carrrinho.component.css']
})
export class ItensCarrrinhoComponent {

  @Input()
  quantidade: number = 0;
  @Input()
  precoItem: number = 0;
  @Input()
  precoTotal: number = this.precoItem

  ngOnInit(): void {
    this.precoTotal = this.quantidade * this.precoItem;
  }


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
