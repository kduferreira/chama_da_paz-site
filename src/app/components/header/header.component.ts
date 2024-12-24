import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor() {}

  // Mostra/Esconde o menu mobile
  menuShow(): void {
    const menuMobile = document.querySelector('.mobile-menu') as HTMLElement | null;
    const icon = document.querySelector('.icon') as HTMLImageElement | null;

    if (menuMobile?.classList.contains('open')) {
      menuMobile.classList.remove('open');
      icon?.setAttribute('src', '../../../assets/images/menu_white_36dp.svg');
    } else {
      menuMobile?.classList.add('open');
      icon?.setAttribute('src', '../../../assets/images/close_white_36dp.svg');
    }
  }

  // Rolagem suave para os elementos
  toBeneficios(): void {
    document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' });
  }

  toFuncionalidades(): void {
    document.getElementById('funcionalidades')?.scrollIntoView({ behavior: 'smooth' });
  }

  toPlanos(): void {
    document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' });
  }

  toFeedbacks(): void {
    document.getElementById('feedbacks')?.scrollIntoView({ behavior: 'smooth' });
  }

  toRegister(): void {
    document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
  }
}
