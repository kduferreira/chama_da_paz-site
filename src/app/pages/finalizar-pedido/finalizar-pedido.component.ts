import { Component } from '@angular/core';

@Component({
  selector: 'app-finalizar-pedido',
  templateUrl: './finalizar-pedido.component.html',
  styleUrls: ['./finalizar-pedido.component.css']
})
export class FinalizarPedidoComponent {
  tipoEntrega: string = 'local'; // Valor inicial: 'ENTREGA EM DOMICÍLIO'


  formaPagemento:string = "dinheiro"

  


  selecionarEntrega(tipo: string): void {
    this.tipoEntrega = tipo;
    console.log(`Entrega selecionada: ${this.tipoEntrega}`);
  }

  selecionarFormaPagamento(pagamento: string): void {
    this.formaPagemento = pagamento;
    console.log(`Entrega selecionada: ${this.formaPagemento}`);
  }





}
