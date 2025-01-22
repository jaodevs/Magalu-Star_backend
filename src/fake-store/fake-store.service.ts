import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, lastValueFrom, map, throwError } from 'rxjs';
import { inspect } from 'util';

@Injectable()
export class FakeStoreService {
  constructor(private readonly httpService: HttpService) {}

  async getAllProducts() {
    return this.httpService.get('https://fakestoreapi.com/products')
      .pipe(
        map((response) => {
            Logger.log('Produtos recebidos com sucesso.');
          return response.data;
        }),
        catchError((error) => {
          Logger.error(`Erro ao buscar produtos: ${error.message}`);
          return throwError(() => error); 
        }),
      ).toPromise();
  }

  async getProductById(id: number) {
    const response = await lastValueFrom(this.httpService.get(`https://fakestoreapi.com/products/${id}`));
    return response.data
  }

  async getAllCategories() {
    const response = await lastValueFrom(this.httpService.get('https://fakestoreapi.com/products/categories'));
    return response.data; 
  }

  async getProductsByCategory(category: string) {
    const response = await lastValueFrom(this.httpService.get(`https://fakestoreapi.com/products/category/${category}`));
    return response.data; 
  }
}
