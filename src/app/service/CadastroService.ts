import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private apiUrl = 'https://pastelariaapi.onrender.com/'; 

  constructor(private http: HttpClient) {}

  cadastrarUsuario(dados: any): Observable<any> {
    const url = `${this.apiUrl}salvarNovoUser`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(url, dados,{ headers, responseType: 'text' });
  }


 
}
