import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  

}
