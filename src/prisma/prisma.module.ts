// prisma/prisma.module.ts
import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // глобально, если хочешь
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
