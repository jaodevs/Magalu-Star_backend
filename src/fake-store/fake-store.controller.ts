import { Controller, Get, Param } from '@nestjs/common';
import { FakeStoreService } from './fake-store.service';

@Controller('fake-store')
export class FakeStoreController {
  constructor(private readonly fakeStoreService: FakeStoreService) {}

  @Get('products')
  async getAllProducts() {
    return this.fakeStoreService.getAllProducts();
  }

  @Get('products/:id')
  async getProductById(@Param('id') id: number) {
    return this.fakeStoreService.getProductById(id);
  }

  @Get('categories')
  async getAllCategories() {
    return this.fakeStoreService.getAllCategories();
  }

  @Get('categories/:category')
  async getProductsByCategory(@Param('category') category: string) {
    return this.fakeStoreService.getProductsByCategory(category);
  }
}