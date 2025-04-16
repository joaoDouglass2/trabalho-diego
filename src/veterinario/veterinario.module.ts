import { Module } from '@nestjs/common';
import { VeterinarioService } from './veterinario.service';
import { VeterinarioController } from './veterinario.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [VeterinarioController],
  providers: [VeterinarioService,PrismaService],
})
export class VeterinarioModule {}
