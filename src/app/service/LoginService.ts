import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'https://pastelariaapi.onrender.com/teste/login'; 

  constructor(private http: HttpClient) {}

 
  logarUsuario(dados: any): Observable<any> {
    const url = `${this.apiUrl}`;
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    // });

    return this.http.post(this.apiUrl, dados);
  }

  

}
