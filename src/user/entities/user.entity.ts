import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<UserModel>;

@Schema({ collection: 'users', timestamps: true })
export class UserModel {
  @Prop({ required: false })
  name: string;

  @Prop()
  username: string;

  @Prop()
  email: string;

  @Prop()
  hash: string;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
