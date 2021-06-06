import { Request, Response } from 'express';
import '../service/price.service';
import { PriceService } from '../service/price.service';
export class PriceController {
  public async addPrice(req: Request, res: Response) {
    const priceService: PriceService = new PriceService();
    try {
      const body: InsertPriceDto = req.body;
      const result = await priceService.createPrice(body);
      return res.json({ data: result });
    } catch (error) {
      return res.json({ error: error.toString() });
    }
  }

  public async getPriceBySku(req: Request, res: Response) {
    const priceService: PriceService = new PriceService();
    try {
      const data = await priceService.getAllPricesForProduct(
        req.query['sku'] as string,
      );
      return res.json({ data: data });
    } catch (e) {
      return res.json({ data: [] });
    }
  }
  public async getAllPrices(req: Request, res: Response) {
    const priceService: PriceService = new PriceService();
    try {
      const data = await priceService.getAllPrices();
      return res.json({ data: data });
    } catch (e) {
      return res.json({ data: [] });
    }
  }
}
