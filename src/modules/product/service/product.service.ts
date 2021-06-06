import HttpException from '@/exceptions/HttpException';
import { mongoose } from '@typegoose/typegoose';
import { BeAnObject } from '@typegoose/typegoose/lib/types';
import { isEmpty } from 'class-validator';
import { Http } from 'winston/lib/winston/transports';
import { InsertProductDto } from '../dtos/insert_product.dto';

import { PriceModel } from '../model/price.model';

import { Product, ProductModel } from '../model/product.model';

export class ProductService {
  public async createProduct(product: InsertProductDto) {
    console.log(product);
    if (isEmpty(product)) throw new HttpException(400, 'Empty product');
    try {
      const findProduct: Product | null = await ProductModel.findOne({
        sku: product.sku,
      });

      if (findProduct) {
        throw new HttpException(422, 'Product with sku  already exists');
      }

      const res = await new ProductModel(product).save();
      console.log(res.toJSON);
      return res.toJSON();
    } catch (e) {
      console.log(e);
      throw new HttpException(422, e);
    }
  }
  public async findProduct(sku: string): Promise<String> {
    const res = await ProductModel.findOne({ sku: sku });
    if (!res) {
      throw new HttpException(404, 'Product with sku not found');
    }
    const product: string = res.toJSON();
    return product;
  }
  public async findAllProducts(limit?: number): Promise<Product[]> {
    console.log(`getting product`);

    try {
      const products = await ProductModel.find();
      console.log(products);
      if (products) return products;
      else return [];
    } catch (e) {
      console.log(e);
    }
  }
}
