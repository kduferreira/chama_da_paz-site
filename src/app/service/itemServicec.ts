import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'https://pastelariaapi.onrender.com/api/item'; // Substitua pelo seu endpoint

  constructor(private http: HttpClient) {}

 

  salvarItem(item: any): Observable<any> {
   
    
    return this.http.post(this.apiUrl, item);
  }
  

}
