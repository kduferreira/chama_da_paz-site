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
  idItem:number=0
  @Input()
  quantidade: number = 0;
  @Input()
  nomeItem:string=""
  @Input()
  precoItem: number = 0;

  @Input()
  precoTotal: number = this.precoItem
  @Input()
  urlImagem:string =''

  @Output() 
  totalCompra = new EventEmitter<number>();

  

  ngOnInit(): void {
    this.precoTotal = this.quantidade * this.precoItem;

    
  }


  adicionar():void{
    this.quantidade++;
    this.precoTotal = this.precoItem * this.quantidade
  
    
    this.localStorageService.atualizarItem(this.idItem, this.quantidade, this.precoTotal)
    this.enviarDadosPedido()
    
  }

  remover():void{
    if(this.quantidade>0){
      this.quantidade--;
      this.precoTotal = this.precoItem * this.quantidade

      this.localStorageService.atualizarItem(this.idItem, this.quantidade,this.precoTotal)
      this.enviarDadosPedido()
      
    }if (this.quantidade === 0) {
      this.recarregarPagina()
    } 
  }
 
  removerItemCarrinho():void{
    this.localStorageService.removerDoCarrinho(this.idItem)
    this.enviarDadosPedido()
    
    this.recarregarPagina()
  
  }

  //esse metodo atualiza os dados de numero de item no carrinho e o valor total da compra
  enviarDadosPedido() {
    this.totalCompra.emit(this.localStorageService.calcularTotalCarrinho());
  }




  recarregarPagina() {
    window.location.reload();
  }


}
