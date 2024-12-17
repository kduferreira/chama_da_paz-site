import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private apiUrl = 'https://pastelariaapi.onrender.com/api/categoria'; // Substitua pelo seu endpoint

  constructor(private http: HttpClient) {}

  buscarCategorias(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  salvarCategoria(categoria: any): Observable<any> {
    console.log("salvando");
    
    return this.http.post(this.apiUrl, categoria);
  }

  // Método para enviar um POST com o ID 
 alterarStatusCategoria(id: number): Observable<any> {
  const url = `${this.apiUrl}/${id}`;
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  return this.http.post(url, null, { headers, responseType: 'text' }); // Esperando resposta como texto
}


  

}
