import { Component } from '@angular/core';
import { CadastroService } from 'src/app/service/CadastroService';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  isPasswordVisible1 = false;
  isPasswordVisible2 = false;

  nome:string=""
  
  usuario = {
    nome: '',
    sobrenome:'',
    email: '',
    telefone:'',
    senha: ''
  };

  logUsuario(): void {
    console.log('Dados do usuário:', this.usuario);
    console.log(this.nome);
  }
  
  constructor(private cadastroService: CadastroService) {}

  togglePasswordVisibility(): void {
    this.isPasswordVisible1 = !this.isPasswordVisible1;
   
  }

  togglePasswordVisibility2(): void {
    
    this.isPasswordVisible2 = !this.isPasswordVisible2;
  }



  onSubmit(): void {
    this.cadastroService.cadastrarUsuario(this.usuario).subscribe(
      (response) => {
        console.log('Cadastro realizado com sucesso:', response);
        alert('Usuário cadastrado com sucesso!');
      },
      (error) => {
        console.error('Erro ao cadastrar usuário:', error);
        alert('Erro ao realizar o cadastro.');
      }
    );
  }


}
