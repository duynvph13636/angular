import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from 'src/types/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
constructor(private http:HttpClient){}
getProducts():Observable<Product[]>{
return this.http.get<Product[]>(environment.products);
}
getProduct(id:string):Observable<Product>{
return this.http.get<Product>(`${environment.products}/${id}`);

}
deleteProduct(id:string|number):Observable<any>{
  return this.http.delete(`${environment.products}/${id}`)
}
}
