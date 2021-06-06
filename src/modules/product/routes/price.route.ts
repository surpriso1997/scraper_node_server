import Route from '@/interfaces/routes.interface';
import { Router } from 'express';
import { PriceController } from '../controller/price.controller';

class PriceRoute implements Route {
  public path = '/price';
  public router = Router();

  public priceController = new PriceController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}`, this.priceController.addPrice);
    this.router.get(`${this.path}`, this.priceController.getPriceBySku);
    this.router.get(`/prices`, this.priceController.getAllPrices);
  }
}
export default PriceRoute;
