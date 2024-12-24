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

  enderecoSelecionado:string = "principal"
//  enderecoSelecionado: any = null; // Variável para armazenar o endereço selecionado
  ngOnInit(): void {
   
   this.buscarInfoUser()
  
 
   
   
 }

  


  selecionarEntrega(tipo: string): void {
    this.tipoEntrega = tipo;
    console.log(`Entrega selecionada: ${this.tipoEntrega}`);
  }


 
  infoEndereco = {
    enderecos: [
      { endereco: 'Rua A', numero: 123, bairro: 'Centro', complemento: 'Apt 101' },
      { endereco: 'Rua B', numero: 456, bairro: 'Bairro Novo', complemento: 'Casa' },
      // Adicione outros endereços aqui
    ]
  };

  selecionarEndereco(endereco: any): void {
   
    
   
    this.enderecoSelecionado = endereco;
    console.log('Endereço selecionado:', endereco);
  }

  abrirCadastroNovoEndereco(): void {
    console.log('Abrir modal para cadastrar novo endereço');
    // Lógica para abrir um modal ou redirecionar para a página de cadastro de novo endereço
  }

  selecionarFormaPagamento(pagamento: string): void {
    this.formaPagemento = pagamento;
    console.log(`Forma de pagamento: ${this.formaPagemento}`);
  }

 



  async buscarInfoUser(): Promise<void> {
    this.usuarioService.buscarInfoUsuario().subscribe(
      (dados) => {
        this.infoUser = dados

      this.enderecoSelecionado = dados.enderecos[0]
      },
      (erro) => {
        console.error('Erro ao buscar info usuario:', erro); // Tratamento de erros
      }
    );
  }





}
