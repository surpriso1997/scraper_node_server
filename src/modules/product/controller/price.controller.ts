import { Request, Response } from 'express';
import '../service/price.service';
export class PriceController {
  public async addPrice(req: Request, res: Response) {
    // const priceService: PriceService = new PriceService();
    // try {
    //   const body: InsertPriceDto = req.body;
    //   const result = await priceService.createPrice(body);
    //   return res.json({ data: result });
    // } catch (error) {
    //   return res.json({ error: error.toString() });
    // }
  }
}
