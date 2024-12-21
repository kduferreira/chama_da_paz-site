import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/service/UsuarioService';

@Component({
  selector: 'app-finalizar-pedido',
  templateUrl: './finalizar-pedido.component.html',
  styleUrls: ['./finalizar-pedido.component.css']
})
export class FinalizarPedidoComponent {

constructor(private usuarioService:UsuarioService){}


infoUser:any


  tipoEntrega: string = 'local'; // Valor inicial: 'ENTREGA EM DOMICÍLIO'


  formaPagemento:string = "dinheiro"

  ngOnInit(): void {
   
   this.buscarInfoUser()

   console.log(this.infoUser);
   
 }

  


  selecionarEntrega(tipo: string): void {
    this.tipoEntrega = tipo;
    console.log(`Entrega selecionada: ${this.tipoEntrega}`);
  }

  selecionarFormaPagamento(pagamento: string): void {
    this.formaPagemento = pagamento;
    console.log(`Entrega selecionada: ${this.formaPagemento}`);
  }



  async buscarInfoUser(): Promise<void> {
    this.usuarioService.buscarInfoUsuario().subscribe(
      (dados) => {
        console.log(dados);
        
        this.infoUser = dados
      },
      (erro) => {
        console.error('Erro ao buscar info usuario:', erro); // Tratamento de erros
      }
    );
  }





}
