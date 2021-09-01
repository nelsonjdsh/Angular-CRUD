import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {
  private myAppUrl = 'http://localhost:3000/';
  private myApiUrl = 'clientes/'

  constructor(private http: HttpClient) { }

  getClientes(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

  deleteCliente(id_cliente: number): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + id_cliente)
  }

  saveCliente(newCliente: any): Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrl, newCliente);
  }

  updateCliente(id_cliente: number, updateCliente: any): Observable<any> {
    return this.http.put(this.myAppUrl + this.myApiUrl + id_cliente, updateCliente);
  }
}
