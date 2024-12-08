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
    console.log( carrinho);
    return carrinho

  }

  limparCarrinho(): void {
    localStorage.removeItem('carrinho');
    console.log('Carrinho limpo.');
  }
}