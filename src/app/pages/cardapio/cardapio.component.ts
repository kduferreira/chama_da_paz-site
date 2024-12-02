import { Component } from '@angular/core';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent {
  saboresEsquerda = [
    { nome: 'Buffalo', preco: '49$', descricao: 'Tomato sauce, mozzarella, virgin olive oil, fresh basil, garlic, pesto...' },
    { nome: 'Palermo', preco: '38$', descricao: 'Tomato sauce, mozzarella, virgin olive oil, fresh basil, garlic, pesto...' },
    { nome: 'Napolitano', preco: '52$', descricao: 'Tomato sauce, mozzarella, virgin olive oil, fresh basil, garlic, pesto...' },
    { nome: 'Bolognese', preco: '35$', descricao: 'Tomato sauce, mozzarella, virgin olive oil, fresh basil, garlic, pesto...' },
    { nome: 'Vegetarian', preco: '40$', descricao: 'Tomato sauce, mozzarella, virgin olive oil, fresh basil, garlic, pesto...' }
  ];

  saboresDireita = [ // Verifique que este nome é exatamente o mesmo usado no HTML
    { nome: 'Capricciosa', preco: '47$', descricao: 'Tomato sauce, mozzarella, virgin olive oil, fresh basil, garlic, pesto...' },
    { nome: 'Margherita', preco: '39$', descricao: 'Tomato sauce, mozzarella, virgin olive oil, fresh basil, garlic, pesto...' },
    { nome: 'Hawaiian', preco: '55$', descricao: 'Tomato sauce, mozzarella, virgin olive oil, fresh basil, garlic, pesto...' },
    { nome: 'Vegetarian', preco: '40$', descricao: 'Tomato sauce, mozzarella, virgin olive oil, fresh basil, garlic, pesto...' },
    { nome: 'Bolognese', preco: '35$', descricao: 'Tomato sauce, mozzarella, virgin olive oil, fresh basil, garlic, pesto...' }
  ];
}
