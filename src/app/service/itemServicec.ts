import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'https://pastelariaapi.onrender.com'; // Substitua pelo seu endpoint
  private token = localStorage.getItem('token'); // Obtém o token do Local Storage
  constructor(private http: HttpClient) {}

 

  salvarItem(item: any, file: File): Observable<any> {
    const formData: FormData = new FormData();

    const url = `${this.apiUrl}/admin/item`;

    // Adiciona os dados do item como JSON
    formData.append('data', JSON.stringify(item));



    // Adiciona a imagem ao formData
    formData.append('file', file);
    const headers = this.token 
    ? { Authorization: `${this.token}` } 
    : undefined;

    return this.http.post<any>(url, formData,{headers});
  }




    // Método para enviar um POST com o ID 
    alterarStatus(id: number): Observable<any> {
      const url = `${this.apiUrl}/admin/item/${id}`;
      const headers = this.token 
    ? { Authorization: `${this.token}` } 
    : undefined;
     
    
      return this.http.post(url, null, {headers}); // Esperando resposta como texto
    }
  

}
