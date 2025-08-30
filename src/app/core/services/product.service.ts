import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Product } from '../../shared/models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private http = inject(HttpClient);
  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>('/assets/mock-products.json');
  }
  getById(id: string): Observable<Product | undefined> {
    return this.getAll().pipe(map((list) => list.find((p) => p.id === id)));
  }
}
