import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-itens-cardapio',
  templateUrl: './itens-cardapio.component.html',
  styleUrls: ['./itens-cardapio.component.css']
})
export class ItensCardapioComponent {

  @Input()
  nomeItem:string ="";

  @Input()
  descricao:string="";

  @Input()
  preco:number=0;

}
