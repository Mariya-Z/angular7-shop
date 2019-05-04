import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ProductsServiceModule } from '../products-service.module';
import { ProductModel } from '../model/product.model';

@Injectable({
  providedIn: ProductsServiceModule,
})
export class ProductHttpService {
  isDisplayed = false;
  private productUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProducts(): Promise<ProductModel[]> {
    return this.http
      .get(this.productUrl)
      .toPromise()
      .then(response => response as ProductModel[])
      .catch(this.handleError);
  }

  getProduct(id: number): Promise<ProductModel> {
    const url = `${this.productUrl}/${id}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as ProductModel)
      .catch(this.handleError);
  }

  updateProduct(product: ProductModel): Promise<ProductModel> {
    const url = `${this.productUrl}/${product.id}`;
    const body = JSON.stringify(product);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http
      .put(url, body, options)
      .toPromise()
      .then(response => response as ProductModel)
      .catch(this.handleError);
  }

  createProduct(product: ProductModel): Promise<ProductModel> {
    const url = `${this.productUrl}`;
    const body = JSON.stringify(product);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http
      .post(url, body, options)
      .toPromise()
      .then(response => response as ProductModel)
      .catch(this.handleError);
  }

  deleteProduct(product: ProductModel): Promise<ProductModel>  {
    const url = `${this.productUrl}/${product.id}`;

    return this.http
      .delete(url)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
