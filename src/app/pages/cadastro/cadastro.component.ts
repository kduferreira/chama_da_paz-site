import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  isPasswordVisible1 = false;

  isPasswordVisible2 = false;

  togglePasswordVisibility(): void {
    this.isPasswordVisible1 = !this.isPasswordVisible1;
   
  }

  togglePasswordVisibility2(): void {
    
    this.isPasswordVisible2 = !this.isPasswordVisible2;
  }
}
