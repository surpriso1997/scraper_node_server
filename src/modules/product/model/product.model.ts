import {
  prop,
  Ref,
  buildSchema,
  addModelToTypegoose,
  plugin,
} from '@typegoose/typegoose';

import * as mongoose from 'mongoose';
import { Price } from './price.model';

import { default as autopopulate } from 'mongoose-autopopulate';
@plugin(autopopulate as any)
export class Product {
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

  @prop({ ref: 'Price', autopopulate: true, type: () => Price, })
  prices?: Ref<Price>[];
}
const productSchema = buildSchema(Product);
export const ProductModel = addModelToTypegoose(
  mongoose.model('Product', productSchema),
  Product,
);
