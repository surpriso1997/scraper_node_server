import { prop } from '@typegoose/typegoose';
import { LoginMethod } from '../enum/login_method';

export class Auth {
  @prop()
  passwordHash: string;
  @prop()
  passowrdSalt: string;
  @prop()
  loginMethod: LoginMethod;
}
