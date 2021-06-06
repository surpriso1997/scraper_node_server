import { prop, getModelForClass, Ref, buildSchema, addModelToTypegoose } from '@typegoose/typegoose';
import { validate } from 'class-validator';

import * as mongoose from 'mongoose';
import ProductRoute from '../routes/product.route';
import { Price } from './price.model';

export class Product {
  @prop({})
  public _id: string;

  @prop()
  public name: string;

  @prop({ unique: true })
  public sku: string;

  @prop()
  image: string;
  @prop()
  sellerName: string;
  @prop()
  originalPrice: string;
  @prop()
  currentPrice: string;
  @prop()
  discount: string;

  @prop({ type: () => Price, ref: () => Price })
  prices?: Ref<Price>[];
}
const productSchema = buildSchema(Product);
export const ProductModel = addModelToTypegoose(mongoose.model('Product', productSchema), Product);
