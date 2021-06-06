import { addModelToTypegoose, buildSchema, getModelForClass, prop } from '@typegoose/typegoose';
import { Product } from './product.model';
import * as mongoose from 'mongoose';
export class Price {
  @prop()
  originalPrice: string;
  @prop()
  currentPrice: string;
  @prop()
  discount?: string;
  @prop()
  productId?: string;
  @prop()
  id?: number;
  @prop()
  sku?: string;
}
const priceSchema = buildSchema(Price);
export const PriceModel = addModelToTypegoose(mongoose.model('Price', priceSchema), Price);
