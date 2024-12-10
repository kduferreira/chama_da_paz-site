import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/service/LocalStorageService';
@Component({
  selector: 'app-carrinho-pedidos',
  templateUrl: './carrinho-pedidos.component.html',
  styleUrls: ['./carrinho-pedidos.component.css']
})
export class CarrinhoPedidosComponent {

  constructor(private localStorageService:LocalStorageService){}
  carrinho: any[] = [];


  total:number=0

  ngOnInit(): void {
    this.carrinho = this.localStorageService.mostrarCarrinho(); // Usando o método do serviço

    this.total = this.localStorageService.calcularTotalCarrinho()

    
    
    
  }

}
