import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class RegisterService {
  register(registerDto: RegisterDto) {
    console.log(registerDto);
    return 'This action adds a new register';
  }
}
