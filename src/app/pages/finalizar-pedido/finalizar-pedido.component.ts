import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/service/LocalStorageService';
import { UsuarioService } from 'src/app/service/UsuarioService';

@Component({
  selector: 'app-finalizar-pedido',
  templateUrl: './finalizar-pedido.component.html',
  styleUrls: ['./finalizar-pedido.component.css']
})
export class FinalizarPedidoComponent {

constructor(private usuarioService:UsuarioService, private localStorageService:LocalStorageService){}


infoUser:any


  tipoEntrega: string = 'local'; // Valor inicial: 'ENTREGA EM DOMICÍLIO'


  formaPagemento:string = "dinheiro"

  enderecoSelecionado:string = "principal"
 
pedido = {
  observacoes:"",
  endereco:"",
  bairro:"",
  numero:"",
  complemento:"",

  formaPagamento:"dinheiro",
  troco:"",
  retirarLocal:true,

  itensPedido: [] as any[]
}


ngOnInit(): void {
   
   this.buscarInfoUser()
  
  
  const itens = this.localStorageService.mostrarCarrinho()



  
  itens.forEach((objetos)=>{
    this.pedido.itensPedido.push(objetos)
  })
  
 
   
   
 }

  


  selecionarEntrega(tipo: string): void {


    if(tipo != "local"){
      this.pedido.retirarLocal = false
    }else{
      this.pedido.retirarLocal = true
    }
   
    this.tipoEntrega = tipo;
    console.log(`Entrega selecionada: ${this.tipoEntrega}`);
  }


 


  selecionarEndereco(endereco: any): void {

   
    this.enderecoSelecionado = endereco;


    this.pedido.endereco = endereco.endereco
    this.pedido.bairro = endereco.bairro
    this.pedido.complemento = endereco.complemento
    this.pedido.numero = endereco.numero

    console.log('Endereço selecionado:', endereco);
  }

  abrirCadastroNovoEndereco(): void {
    console.log('Abrir modal para cadastrar novo endereço');
    // Lógica para abrir um modal ou redirecionar para a página de cadastro de novo endereço
  }

  selecionarFormaPagamento(pagamento: string): void {
    this.formaPagemento = pagamento;

    this.pedido.formaPagamento = pagamento
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



  finalizarPedido(){
    console.log(this.pedido);
    
  }





}
