import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from '../../users/schemas/user.schema';
import { Course } from '../../courses/schemas/course.schema';

export type LessonDocument = HydratedDocument<Lesson>;

@Schema()
export class Lesson {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Course' })
  course: Course;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  owner: User;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop([String])
  tags: string[];

  @Prop()
  createdAt: Date;
}

export const LessonSchema = SchemaFactory.createForClass(Lesson);
