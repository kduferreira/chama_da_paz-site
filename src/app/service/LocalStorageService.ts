import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {}


  adicionarAoCarrinho(item: { id: number; nome: string; quantidade: number;urlImagem:string; preco: number; valorTotal:number }): void {
    let carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');

    const itemExistente = carrinho.find((produto: any) => produto.id === item.id);
    if (itemExistente) {
      itemExistente.quantidade += item.quantidade;
    } else {
      carrinho.push(item);
    }
    console.log("Pedido add no carrinho ", carrinho);
    
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  }

  mostrarCarrinho(): any[] {
    const carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
    
    return carrinho

  }

  limparCarrinho(): void {
    localStorage.removeItem('carrinho');
    console.log('Carrinho limpo.');
  }

  removerDoCarrinho(id: number): void {
    // Obtém o carrinho do Local Storage
    let carrinho =  this.mostrarCarrinho();
  
    // Filtra os itens, removendo aquele com o ID correspondente
    carrinho = carrinho.filter((produto: any) => produto.id !== id);
  
    // Atualiza o Local Storage com o carrinho atualizado
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    console.log("Item com ID ${id} removido do carrinho.",id);
  }

  atualizarItem(id: number, quantidade: number, preco: number): void {
    // Obtém o carrinho do Local Storage
    let carrinho = this.mostrarCarrinho();

   
    // Encontra o produto com o ID correspondente
    const indiceProduto = carrinho.findIndex((produto) => (produto.id) === id);

     
    if(quantidade == 0){
      console.log("removendo");
      
      this.removerDoCarrinho(id);
      return;
    }

    
  
    // Verifica se o produto existe
    if (indiceProduto !== -1) {
      // Atualiza a quantidade e preço do produto
      carrinho[indiceProduto].quantidade = quantidade;
      carrinho[indiceProduto].valorTotal = preco;
      console.log(carrinho);
      
  
      // Atualiza o Local Storage com o carrinho atualizado
      localStorage.setItem('carrinho', JSON.stringify(carrinho));
      console.log(carrinho);
      console.log(`Produto com ID ${id} atualizado com sucesso!`);
    } else {
      console.log(`Produto com ID ${id} não encontrado.`);
    }
  }

//atualiza a quantidade e o preço
  atualizarQuantidade(id: number, quantidade:number): void {
    // Obtém o carrinho do Local Storage
    let carrinho  = this.mostrarCarrinho();

    carrinho = carrinho.filter((produto: any) => produto.id == id);
    
    if(quantidade == 0){
      console.log("removendo");
      
      this.removerDoCarrinho(carrinho[0].id);
      return;
    }

    
    carrinho[0].quantidade = quantidade;

   
    carrinho[0].preco = carrinho[0].quantidade * carrinho[0].preco

    this.atualizarItem(id, quantidade, carrinho[0].preco)
    console.log(carrinho);
    
  }






  calcularTotalCarrinho(): number {
    const carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
    
    const total = carrinho.reduce((acc: number, item: any) => {
      return acc + (item.quantidade * item.preco);
    }, 0);
    
    console.log("Total do carrinho: R$", total);
    return total;
  }

}