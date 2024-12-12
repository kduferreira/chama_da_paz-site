import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LocalStorageService } from 'src/app/service/LocalStorageService';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-itens-carrrinho',
  templateUrl: './itens-carrrinho.component.html',
  styleUrls: ['./itens-carrrinho.component.css']
})
export class ItensCarrrinhoComponent {


  constructor(private localStorageService:LocalStorageService){}

  @Input()
  id:number=0
  @Input()
  quantidade: number = 0;
  @Input()
  nomeItem:string=""
  @Input()
  precoItem: number = 0;

  @Input()
  precoTotal: number = this.precoItem

  @Output() 
  totalCompra = new EventEmitter<number>();

  

  ngOnInit(): void {
    this.precoTotal = this.quantidade * this.precoItem;

    
  }


  adicionar():void{
    this.quantidade++;
    this.precoTotal = this.precoItem * this.quantidade

    this.localStorageService.atualizarItem(this.id, this.quantidade, this.precoTotal)
    this.enviarDadosPedido()
    
  }

  remover():void{
    if(this.quantidade>0){
      this.quantidade--;
      this.precoTotal = this.precoItem * this.quantidade

      this.localStorageService.atualizarItem(this.id, this.quantidade,this.precoTotal)
      this.enviarDadosPedido()
    }
  }
 
  removerItemCarrinho():void{
    this.localStorageService.removerDoCarrinho(this.id)
    this.enviarDadosPedido()

  
  }

  //esse metodo atualiza os dados de numero de item no carrinho e o valor total da compra
  enviarDadosPedido() {
    this.totalCompra.emit(this.localStorageService.calcularTotalCarrinho());
  }





}
