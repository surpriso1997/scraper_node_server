import userModel from '@/common/models/users.model';
import { Product } from '@/modules/product/model/product.model';
import {
  addModelToTypegoose,
  buildSchema,
  plugin,
  prop,
  Ref,
} from '@typegoose/typegoose';
import * as mongoose from 'mongoose';
import { LoginMethod } from '../enum/login_method';
import { Auth } from './auth.model';

export class User {
  @prop()
  fullname: string;
  @prop()
  email: string;
  @prop()
  password: string;
  @prop()
  passwordSalt: string;
  @prop({ ref: 'Auth', autoPopulate: true, type: () => Auth })
  auth: Auth;
  @prop({ ref: 'Product', autopopulate: true, type: () => Product })
  products: Ref<Product>[];
  @prop()
  country: string;
  @prop()
  loginMethod: LoginMethod;

}

const userSchems = buildSchema(User);
export const UserModel = addModelToTypegoose(
  mongoose.model('User', userSchems),
  User,
);
