import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { type } from 'os';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  name: string;
  @Prop({ required: true })
  email: string;
  @Prop({ required: true })
  password: string;
  @Prop()
  phone_no: string;
  @Prop()
  country: string;
  @Prop()
  type: string;
  @Prop()
  designation: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
