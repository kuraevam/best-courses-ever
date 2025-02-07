import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from '../../users/schemas/user.schema';
import { Lesson } from '../../lessons/schemas/lesson.schema';

export type CommentDocument = HydratedDocument<Comment>;

@Schema()
export class Comment {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' })
  lesson: Lesson;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  owner: User;

  @Prop()
  text: string;

  @Prop()
  rating: number;

  @Prop()
  createdAt: Date;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
