import Route from '@/interfaces/routes.interface';
import { Router } from 'express';
import ProductController from '../controller/product.controller';

class ProductRoute implements Route {
  public path = '/product';
  public router = Router();

  public productController = new ProductController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}`, this.productController.postProduct);
    this.router.get(`${this.path}`, this.productController.getAllProducts);
    this.router.get(`${this.path}:id`, this.productController.getProduct);
  }
}
export default ProductRoute;
