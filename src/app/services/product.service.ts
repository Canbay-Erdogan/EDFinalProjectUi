import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../modals/ListResponseModel';
import { Product } from '../modals/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  apiUrl = "https://localhost:44352/api/";

  constructor(private httpClient: HttpClient) { }

  products: Product[] = [];
  
  getProducts():Observable<ListResponseModel<Product>> {
    let newPath=this.apiUrl+ "products/getall";
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  getproductswithcategoryid(categoryId):Observable<ListResponseModel<Product>>{
    let newPath=this.apiUrl+ "products/getproductswithcategoryid?id="+categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
}
