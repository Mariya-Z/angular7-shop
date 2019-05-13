import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, tap, catchError, concatMap } from 'rxjs/operators';

import { ProductsServiceModule } from '../products-service.module';
import { ProductModel } from '../model/product.model';

@Injectable({
  providedIn: ProductsServiceModule,
})
export class ProductHttpService {
  isDisplayed = false;
  private productUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  // getProducts(): Observable<ProductModel[]> {
  //   return this.http
  //     .get<ProductModel[]>(this.productUrl)
  //     .pipe(catchError(this.handleErrorObs));
  // }

  // getProduct(id: number): Observable<ProductModel> {
  //   const url = `${this.productUrl}/${id}`;
  //   return this.http
  //     .get<ProductModel>(url)
  //     .pipe(catchError(this.handleErrorObs));
  // }

  // deleteProduct(product: ProductModel): Observable<ProductModel[]> {
  //   const url = `${this.productUrl}/${product.id}`;

  //   return this.http.delete(url)
  //     .pipe(concatMap(() => this.getProducts()));
  // }

  // updateProduct(product: ProductModel): Observable<ProductModel> {
  //   const url = `${this.productUrl}/${product.id}`;
  //   const body = JSON.stringify(product);
  //   const options = {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  //   };
  //   return this.http
  //     .put<ProductModel>(url, body, options)
  //     .pipe(catchError(this.handleErrorObs));
  // }

  // createProduct(product: ProductModel): Observable<ProductModel> {
  //   const url = this.productUrl;
  //   const body = JSON.stringify(product);
  //   const options = {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  //   };
  //   return this.http
  //     .post<ProductModel>(url, body, options)
  //     .pipe(catchError(this.handleErrorObs));
  // }

  // private extractData(products: HttpResponse<ProductModel[]>) {
  //   const body = products;
  //   return body || {};
  // }

  private handleErrorObs(error: any): Observable<any> {
    let errorMsg: string;
    // a client-side or network error
    if (error.error instanceof Error) {
      errorMsg = `A error occurred: ${error.error.message}`;
    } else {
      // backend returned an unsuccessful code
      errorMsg = `Backend returned code ${
        error.status
      }, body was $ {error.error}`;
    }
    console.log(errorMsg);
    return throwError(errorMsg);
  }

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
    const url = this.productUrl;
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

  deleteProduct(product: ProductModel): Promise<ProductModel> {
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
