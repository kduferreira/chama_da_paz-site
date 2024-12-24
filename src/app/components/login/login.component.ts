import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

 

  
  constructor(private loginService:LoginService, private router: Router){}
 

  togglePasswordVisibility(): void {
    this.isPasswordVisible1 = !this.isPasswordVisible1;
   
  }


  loginUsuario(){

    this.loginService.logarUsuario(this.usuarioLogin).subscribe(
      (response) => {
       
        console.log(response);
        
         
         this.router.navigate(['/finalizar']);
        
      
      },
      (error) => {
        console.error('Erro ao logar:', error);
        this.usuarioLogin.senha =''
        alert('Erro ao loga.');
      }
    );
    
      
      
      
  }

}
