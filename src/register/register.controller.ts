import { Controller, Post, Body } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterDto } from './dto/register.dto';

@Controller({
  path: 'register',
  version: '1',
})
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  create(@Body() registerDto: RegisterDto) {
    return this.registerService.register(registerDto);
  }
}
