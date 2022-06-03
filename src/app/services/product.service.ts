import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product, ProductCreate } from 'src/types/Product';
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
CreateProduct(data:ProductCreate):Observable<Product>{
  return this.http.post<Product>(`${environment.products}`,data)
}
UpdateProduct(id:number|string,data:ProductCreate):Observable<Product>{
  return this.http.put<Product>(`${environment.products}/${id}`,data)
}
}
