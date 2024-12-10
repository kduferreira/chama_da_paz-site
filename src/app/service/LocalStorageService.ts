import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {}


  adicionarAoCarrinho(item: { id: number; nome: string; quantidade: number; preco: number }): void {
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

  mostrarCarrinho(): string[] {
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


  calcularTotalCarrinho(): number {
    const carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
    
    const total = carrinho.reduce((acc: number, item: any) => {
      return acc + (item.quantidade * item.preco);
    }, 0);
    
    console.log("Total do carrinho: R$", total);
    return total;
  }

}