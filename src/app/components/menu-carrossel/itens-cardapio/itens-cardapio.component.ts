import { Component, Input } from '@angular/core';
import { LocalStorageService } from 'src/app/service/LocalStorageService';
@Component({
  selector: 'app-itens-cardapio',
  templateUrl: './itens-cardapio.component.html',
  styleUrls: ['./itens-cardapio.component.css']
})
export class ItensCardapioComponent {

  constructor(private localStorageService:LocalStorageService){}

  @Input()
  idItem:number=0

  @Input()
  nomeItem:string ="";

  @Input()
  descricao:string="";

  @Input()
  preco:number=0;
  
  @Input()
  urlImagem:string =''

  valorTotal: number=0

  adicionarItem(): void {
    const item = { idItem: this.idItem, nome: this.nomeItem, quantidade: 1,urlImagem:this.urlImagem, preco: this.preco, valorTotal:this.valorTotal};
    
    this.localStorageService.adicionarAoCarrinho(item);
  }

}
