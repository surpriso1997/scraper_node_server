// import DB from '@/databases';
import HttpException from '@/exceptions/HttpException';
import { Price } from '../interface/price.interface';
import { Product } from '../interface/product.interface';

export class PriceService {
  // private priceDB: typeof PriceModel;
  // private productDB: typeof ProductModel;
  constructor() {
    // this.priceDB = DB.Price;
    // this.productDB = DB.Product;
  }

  public async findAllPrice(limit: number = 10, page: number = 1) {
    try {
    } catch (e) {}
  }

  public async createPrice(insertPrice: InsertPriceDto) {
    // try {
    //   const price: Price = insertPrice;
    //   const product: Product = await this.productDB.findOne({
    //     include: { all: true },
    //     where: {
    //       sku: price.sku,
    //     },
    //     raw: true,
    //   });

    //   console.log(product);
    //   if (!product) {
    //     throw new HttpException(422, 'Pruduct does not exist');
    //   }
    //   price.productId = product.id;
    //   const res = await this.priceDB.create(price);
    //   console.log(res);

    //   return res;
    // } catch (e) {
    //   throw new HttpException(422, `some error : ${e}`);
    // }
  }
}
