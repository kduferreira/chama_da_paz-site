import { Component } from '@angular/core';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css', './cardapio.component-responsive.css']
})
export class CardapioComponent {
  saboresEsquerda = [
    { nome: 'Pastel de Pizza com Queijo', preco: 'R$ 6,99',  },
    { nome: 'Pastel de Queijo', preco: 'R$ 6,99',  },
    { nome: 'Pastel de Frango', preco: 'R$ 6,99',  },
    { nome: 'Pastel de Calabresa com Queijo', preco: 'R$ 6,99',  },
    { nome: 'Pastel de Carne', preco: 'R$ 6,99',  }
  ];

  saboresDireita = [ // Verifique que este nome é exatamente o mesmo usado no HTML
    { nome: 'Pastel  de Bacon com Queijo', preco: 'R$ 6,99',  },
    { nome: 'Pastel de Hotdog', preco: 'R$ 6,99',  },
    { nome: 'Pastel de Misto', preco: 'R$ 6,99',  },
    { nome: 'COMBO AULA EXTRA', preco: 'R$ 19,99',  },
    { nome: 'COMBO ESTUDO EM GRUPO', preco: 'R$ 24,99',  }
  ];
}
