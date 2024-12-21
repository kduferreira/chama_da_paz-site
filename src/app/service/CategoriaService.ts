import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private apiUrl = 'https://pastelariaapi.onrender.com'; // Substitua pelo seu endpoint
   private token = localStorage.getItem('token'); // Obtém o token do Local Storage
  constructor(private http: HttpClient) {}

  

  buscarCategorias(): Observable<any> {
    const url = `${this.apiUrl}/admin/categoria`;
 

    const headers = this.token 
      ? { Authorization: `${this.token}` } 
      : undefined;

    return this.http.get(url, { headers });
  }
  


  buscarCategoriasAtivas(): Observable<any> {
    const url = `${this.apiUrl}/categoria/ativos`;
    return this.http.get(url);
  }

  salvarCategoria(categoria: any): Observable<any> {
    const headers = this.token 
    ? { Authorization: `${this.token}` } 
    : undefined;


    const url = `${this.apiUrl}/admin/categoria`;
    
    return this.http.post(url, categoria,{ headers });
  }

  // Método para enviar um POST com o ID 
 alterarStatusCategoria(id: number): Observable<any> {
  const url = `${this.apiUrl}/admin/categoria/${id}`;
  const headers = this.token 
  ? { Authorization: `${this.token}` } 
  : undefined;

  return this.http.post(url, null, { headers, responseType: 'text' }); // Esperando resposta como texto
}


  

}
