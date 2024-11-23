import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isPasswordVisible1 = false;

 

  togglePasswordVisibility(): void {
    this.isPasswordVisible1 = !this.isPasswordVisible1;
   
  }
}
