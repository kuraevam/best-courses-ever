import { Module } from '@nestjs/common';
import { AccessesService } from './accesses.service';
import { AccessesController } from './accesses.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Access, AccessSchema } from './schemas/access.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Access.name, schema: AccessSchema }]),
  ],
  controllers: [AccessesController],
  providers: [AccessesService],
})
export class AccessesModule {}
