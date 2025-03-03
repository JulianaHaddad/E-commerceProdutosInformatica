import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private apiUrl = 'http://localhost:8090/api/pedido';

  constructor(private http: HttpClient) {}

  gravarPedido(pedido: any): Observable<any> {
    return this.http.post(this.apiUrl, pedido);
  }
}
