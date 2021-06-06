import HttpException from '@/exceptions/HttpException';
import { Price, PriceModel } from '../model/price.model';
import { Product, ProductModel } from '../model/product.model';

export class PriceService {
  public async findAllPrice(limit: number = 10, page: number = 1) {
    try {
    } catch (e) {}
  }

  public async createPrice(insertPrice: InsertPriceDto) {
    try {
      console.log(insertPrice);
      const price: Price = insertPrice;
      const product: Product = await ProductModel.findOne({ sku: price.sku });
      console.log(product);
      if (!product) {
        throw new HttpException(422, 'Pruduct does not exist');
      }
      price.productId = product._id;
      const res = await new PriceModel(price).save();
      console.log(res);

      return res;
    } catch (e) {
      throw new HttpException(422, `some error : ${e}`);
    }
  }

  public async getAllPricesForProduct(sku: string) {
    try {
      const prices = await PriceModel.find({ sku: sku });
      return prices;
    } catch (e) {
      console.log(e);
    }
  }

  public async getAllPrices() {
    try {
      const prices = await PriceModel.find();
      return prices;
    } catch (e) {
      console.log(e);
    }
  }
}
