import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [LoginModule, RegisterModule, CoursesModule],
})
export class AppModule {}
