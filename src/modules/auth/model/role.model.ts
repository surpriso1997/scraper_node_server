import { prop, buildSchema, addModelToTypegoose } from '@typegoose/typegoose';
import { RolePermission } from '../enum/role_permisstion';
import * as mongoose from 'mongoose';
export class Role {
  @prop()
  name: string;

  @prop()
  permissions: RolePermission[];
}

const roleSchems = buildSchema(Role);
export const RoleModel = addModelToTypegoose(
  mongoose.model('Role', roleSchems),
  Role,
);
