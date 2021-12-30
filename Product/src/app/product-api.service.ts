import { Product } from './Product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  readonly productApiUrl = 'https://localhost:44307/api/Product';

  constructor(private http: HttpClient) {}

  // formData:Product = new Product();

  getList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productApiUrl);
  }

  getById(id:any): Observable<Product> {
    return this.http.get<Product>(`${this.productApiUrl}/${id}`);
  }

  create(data:any): Observable<any> {
    return this.http.post(this.productApiUrl, data);
  }

  update(id:any, data:any): Observable<any> {
    return this.http.put(`${this.productApiUrl}/${id}`, data);
  }

  delete(id:any): Observable<any> {
    return this.http.delete(`${this.productApiUrl}/${id}`);
  }
}
