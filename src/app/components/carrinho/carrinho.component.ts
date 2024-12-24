import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/service/LocalStorageService';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {
  constructor(private localStorageService:LocalStorageService){}

  carrinho: any;
  totalCompra:number=0;

  totalItem:number = 0


  ngOnInit(): void {
    this.carrinho = this.localStorageService.mostrarCarrinho(); // Usando o método do serviço
    console.log(this.carrinho);

    this.totalItem = this.carrinho.quantidade * this.carrinho.precoItem;
  
    console.log(this.totalItem );
    
    
    this.totalCompra = this.localStorageService.calcularTotalCarrinho()

    
    
    
  }

}
