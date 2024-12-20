import { Component } from '@angular/core';
import { LoginService } from 'src/app/service/LoginService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isPasswordVisible1 = false;

  usuarioLogin={
     email:"",
    senha:""
  }

 

  
  constructor(private loginService:LoginService){}
 

  togglePasswordVisibility(): void {
    this.isPasswordVisible1 = !this.isPasswordVisible1;
   
  }


  loginUsuario(){

    this.loginService.logarUsuario(this.usuarioLogin).subscribe(
      (response) => {
       
        console.log(response);
        
         alert('logado!');
   
        
      
      },
      (error) => {
        console.error('Erro ao logar:', error);
        alert('Erro ao loga.');
      }
    );
    
      
      
      
  }

}
