import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private apiUrl = 'https://pastelariaapi.onrender.com';

  constructor(private http: HttpClient) {}
  private token = localStorage.getItem('token');


  salvarNovoPedido(pedido: any): Observable<any> {
    const headers = this.token 
    ? { Authorization: `${this.token}` } 
    : undefined;


    const url = `${this.apiUrl}/user/pedido`;
    
    return this.http.post(url, pedido,{ headers });
  }

 
  buscarPedidos(): Observable<any> {
    const url = `${this.apiUrl}/admin/pedido`;

    const headers = this.token 
    ? { Authorization: `${this.token}` } 
    : undefined;


    return this.http.get(url, {headers});
  }





}
