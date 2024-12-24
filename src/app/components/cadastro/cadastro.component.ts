import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CadastroService } from 'src/app/service/CadastroService';
import { LoginService } from 'src/app/service/LoginService';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  isPasswordVisible1 = false;
  isPasswordVisible2 = false;

  constructor(private cadastroService: CadastroService,private loginService:LoginService, private router: Router) { }

  usuario = {
    nome: "",
    email: "",
    telefone: "",
    senha: "",
    confirmarSenha: "",
    dataNascimento: "",
    sexo: "",
    cpf: "",
    // Removemos os campos de endereço do objeto usuario
  };

  // Atributos de endereço em um array
  enderecos = [
    {
      endereco: "",
      cidade: "",
      numero: "",
      complemento: "",
      bairro: ""
    }
  ];

  showErrors = false; // Variável de controle para exibir os erros

  // Método para verificar se um campo está vazio
  isFieldEmpty(fieldName: string): boolean {
    // Verifica no objeto usuario
    if (this.usuario.hasOwnProperty(fieldName)) {
      const value = this.usuario[fieldName as keyof typeof this.usuario];
      return !value || value.trim() === '';
    }
  
    // Verifica no objeto enderecos[0] caso o campo seja de endereço
    if (this.enderecos[0].hasOwnProperty(fieldName)) {
      const value = this.enderecos[0][fieldName as keyof typeof this.enderecos[0]];
      return !value || value.trim() === '';
    }
  
    return false; // Retorna falso se o campo não existir em nenhum dos objetos
  }
  // Método para verificar se o array de endereços está vazio
  isEnderecoEmpty(): boolean {
    return !this.enderecos || this.enderecos.length === 0 || this.enderecos[0].endereco.trim() === '';
  }

  // Método que será chamado ao clicar no botão
  validateFields(): boolean {
    this.showErrors = true; // Ativa a exibição dos erros
    return !(
      this.isFieldEmpty('nome') || 
      this.isFieldEmpty('email') || 
      this.isFieldEmpty('telefone') ||
      this.isFieldEmpty('senha') ||
      this.isFieldEmpty('dataNascimento') ||
      this.isFieldEmpty('sexo') ||
      this.isEnderecoEmpty() ||
      this.usuario.senha !== this.usuario.confirmarSenha // Verifica se as senhas coincidem
    );
  }

  logUsuario(): void {
    console.log('Dados do usuário:', this.usuario);
  }

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

    if (!this.validateFields()) {
      alert('Preencha todos os campos obrigatórios corretamente!');
      return;
    }

    // Agora inclui o array de endereços no corpo da requisição
    const usuarioComEndereco = { ...this.usuario, enderecos: this.enderecos };

    this.cadastroService.cadastrarUsuario(usuarioComEndereco).subscribe(
      (response) => {
        alert('Usuário cadastrado com sucesso!');

        const dataLogin ={
          email:this.usuario.email,
          senha:this.usuario.senha
        }
        // Resetando o formulário
        this.resetForm();

        this.loginUsuario(dataLogin)
      },
      (error) => {
        console.error('Erro ao cadastrar usuário:', error);
        alert('Erro ao realizar o cadastro.');
      }
    );
  }

  resetForm(): void {
    this.usuario = {
      nome: "",
      email: "",
      telefone: "",
      senha: "",
      confirmarSenha: "",
      dataNascimento: "",
      sexo: "",
      cpf: "",
    };

    this.enderecos = [
      {
        endereco: "",
        cidade: "",
        numero: "",
        complemento: "",
        bairro: ""
      }
    ];

    this.showErrors = false;
  }




  loginUsuario(data:any){

    this.loginService.logarUsuario(data).subscribe(
      (response) => {
       
        console.log(response);
        
        this.router.navigate(['/finalizar']);
   
        
      
      },
      (error) => {
        console.error('Erro ao logar:', error);
        alert('Erro ao loga.');
      }
    );
    
      
      
      
  }

}
