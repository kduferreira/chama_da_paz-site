import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'https://pastelariaapi.onrender.com/api/item'; // Substitua pelo seu endpoint

  constructor(private http: HttpClient) {}

 

  salvarItem(item: any, file: File): Observable<any> {
    const formData: FormData = new FormData();

    // Adiciona os dados do item como JSON
    formData.append('data', JSON.stringify(item));

    // Adiciona a imagem ao formData
    formData.append('file', file);

    return this.http.post<any>(this.apiUrl, formData);
  }




    // Método para enviar um POST com o ID 
    alterarStatus(id: number): Observable<any> {
      const url = `${this.apiUrl}/${id}`;
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
    
      return this.http.post(url, null, { headers, responseType: 'text' }); // Esperando resposta como texto
    }
  

}
