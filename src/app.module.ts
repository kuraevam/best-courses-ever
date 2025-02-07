import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { CoursesModule } from './courses/courses.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { LessonsModule } from './lessons/lessons.module';
import { ResourcesModule } from './resources/resources.module';
import { AccessesModule } from './accesses/accesses.module';
import { CommentsModule } from './comments/comments.module';
import * as process from 'node:process';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI || ''),
    LoginModule,
    RegisterModule,
    CoursesModule,
    UsersModule,
    LessonsModule,
    ResourcesModule,
    AccessesModule,
    CommentsModule,
  ],
})
export class AppModule {}
