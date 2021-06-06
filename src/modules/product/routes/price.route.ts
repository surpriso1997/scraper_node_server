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
  }
}
export default PriceRoute;
