import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from '../../users/schemas/user.schema';
import { Lesson } from '../../lessons/schemas/lesson.schema';

export type ResourceDocument = HydratedDocument<Resource>;

@Schema()
export class Resource {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' })
  lesson: Lesson;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  owner: User;

  @Prop()
  type: string;

  @Prop({ type: mongoose.Schema.Types.Mixed })
  data: any;

  @Prop()
  createdAt: Date;
}

export const ResourceSchema = SchemaFactory.createForClass(Resource);
