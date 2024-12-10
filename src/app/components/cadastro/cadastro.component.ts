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



  
  usuario = {
    nome: "",
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

  showErrors = false; // Variável de controle para exibir os erros

  // Método para verificar se um campo está vazio
  isFieldEmpty(fieldName: string): boolean {
    const value = this.usuario[fieldName as keyof typeof this.usuario];
    return !value || value.trim() === '';
  }



  
  // Método que será chamado ao clicar no botão
  validateFields(): boolean {
   return this.showErrors = true; // Ativa a exibição dos erros
  }


  
  logUsuario(): void {
    console.log('Dados do usuário:', this.usuario);
    
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
    


    this.validateFields()




if(this.validateFields()  && !this.isFieldEmpty("nome")
  && !this.isFieldEmpty("email") && !this.isFieldEmpty("telefone") 
&& !this.isFieldEmpty("senha")&& !this.isFieldEmpty("dataNascimento")
&& !this.isFieldEmpty("sexo")&& !this.isFieldEmpty("telefone")
&& !this.isFieldEmpty("endereco") && !this.isFieldEmpty("cidade")
&& !this.isFieldEmpty("numero")&& !this.isFieldEmpty("bairro") ){


  console.log("salvando no db");
  
    this.cadastroService.cadastrarUsuario(this.usuario).subscribe(
      (response) => {
       
      
         alert('Usuário cadastrado com sucesso!');
      this.usuario = {
          nome: "",
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
        this.showErrors = false;
      
      },
      (error) => {
        console.error('Erro ao cadastrar usuário:', error);
        alert('Erro ao realizar o cadastro.');
      }
    );
}
  
  



  
  }


}
