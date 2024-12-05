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
    nome: "",
    sobrenome: "",
    email: "",
    telefone: "",
    senha: "",
    confirmarSenha: "",
    dataNascimento: "",
    sexo: "",
    cpf: "",
    endereco: "",
    cidade: "",
    numero: "",
    complemento: "",
    bairro:""
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
    // Validação: verifica se a senha e a confirmação são iguais
    if (this.usuario.senha !== this.usuario.confirmarSenha) {
      alert('As senhas não coincidem!');
      return; // Interrompe o processo de envio
    }




    this.cadastroService.cadastrarUsuario(this.usuario).subscribe(
      (response) => {
        console.log('Cadastro realizado com sucesso:', response);
      
         alert('Usuário cadastrado com sucesso!');
      this.usuario = {
          nome: "",
          sobrenome: "",
          email: "",
          telefone: "",
          senha: "",
          confirmarSenha: "",
          dataNascimento: "",
          sexo: "",
          cpf: "",
          endereco: "",
          cidade: "",
          numero: "",
          complemento: "",
          bairro:""
        }
      
      },
      (error) => {
        console.error('Erro ao cadastrar usuário:', error);
        alert('Erro ao realizar o cadastro.');
      }
    );
  }


}
