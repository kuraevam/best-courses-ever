import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from '../../users/schemas/user.schema';

export type CourseDocument = HydratedDocument<Course>;

@Schema()
export class Course {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  owner: User;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  image: string;

  @Prop([String])
  tags: string[];

  @Prop()
  createdAt: Date;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
