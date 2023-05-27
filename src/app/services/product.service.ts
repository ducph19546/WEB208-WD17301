import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../interfaces/Product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }
  apiLink = "http://localhost:3000/products/";
  getAllProduct(): Observable<any> {
    return this.http.get(this.apiLink)
  }
  getProduct(id: number | undefined): Observable<any> {
    return this.http.get(this.apiLink + id)
  }
  removeProduct(id: number | undefined): Observable<any> {
    return this.http.delete(this.apiLink + id)
  }
  createProduct(data: IProduct): Observable<any> {
    return this.http.post(this.apiLink, data)
  }
  updateProduct(data: IProduct): Observable<any> {
    return this.http.put(this.apiLink + data.id, data)
  }
}
