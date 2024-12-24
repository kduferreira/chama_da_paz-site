import { Component } from '@angular/core';
import { PedidoService } from 'src/app/service/PedidoService';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent {

  pedidos: any[] = [];

  pedidoSelecionado:any=""

  mostrarDetalhesPedido:boolean=false;

  

  constructor(private pedidoService:PedidoService){}

  ngOnInit(): void {
    this.carregarPedidos();

   
 }


  async carregarPedidos(): Promise<void> {
    this.pedidoService.buscarPedidos().subscribe(
      (dados) => {
        console.log(dados);
        
        this.pedidos = dados; // Preenche o array com os dados retornados da API
      },
      (erro) => {
        console.error('Erro ao buscar pedidos:', erro); // Tratamento de erros
      }
    );
  }

  dataPedidoSelecionado(pedidoData:any):void{
    console.log(pedidoData);

    
    this.pedidoSelecionado = pedidoData

  
    this.exebirDetalhesPedidos()

  }


  exebirDetalhesPedidos():void{
    console.log( this.mostrarDetalhesPedido);
    if(this.mostrarDetalhesPedido == false){

      this.mostrarDetalhesPedido = !this.mostrarDetalhesPedido
    }
    
  }

  // Variável para armazenar o índice da div selecionada
  selectedIndex: number | null = null;

  // Método chamado ao clicar na div
  selecionarDiv(index: number): void {
    this.selectedIndex = index;
  }



}
