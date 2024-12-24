import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private apiUrl = 'https://pastelariaapi.onrender.com/api/pedido';

  constructor(private http: HttpClient) {}

 
  buscarPedidos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }


}
