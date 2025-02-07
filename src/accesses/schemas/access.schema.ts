import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from '../../users/schemas/user.schema';

export type AccessDocument = HydratedDocument<Access>;

@Schema()
export class Access {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  owner: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop()
  source: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId })
  sourceId: mongoose.Schema.Types.ObjectId;

  @Prop()
  createdAt: Date;
}

export const AccessSchema = SchemaFactory.createForClass(Access);
