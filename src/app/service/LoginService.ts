import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8080'; 

  constructor(private http: HttpClient) {}

 
  logarUsuario(dados: any): Observable<any> {
    const url = `${this.apiUrl}/login`;
  
    return this.http.post(url, dados).pipe(
      tap((response: any) => {
        // Supondo que o token venha na resposta no formato { token: "jwtToken" }
        const jwtToken = response.token;
        if (jwtToken) {
          localStorage.setItem('token',`Bearer ${jwtToken}`); // Salva o token no Local Storage
        }
      }),
      catchError((error) => {
        console.error('Erro ao logar:', error);
        return throwError(error);
      })
    );
  }
  
  

}
