import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVeterinarioDto } from './dto/create-veterinario.dto';
import { UpdateVeterinarioDto } from './dto/update-veterinario.dto';
import { Veterinario } from './entities/veterinario.entity';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class VeterinarioService {
  constructor(private prisma: PrismaService) {}
  private mapToEntity(veterinario: any): Veterinario {
    return {
      id: veterinario.id,
      nomedoproduto: veterinario.nomedoproduto,
      quantidade: veterinario.quantidade,
      preco: veterinario.preco,
      cliente: veterinario.cliente,
    };
  }

  async create(
    createVeterinarioDto: CreateVeterinarioDto,
  ): Promise<Veterinario> {
    const veterinario = await this.prisma.cliente.create({
      data: createVeterinarioDto,
    });
    return this.mapToEntity(veterinario);
  }

  async findAll(): Promise<Veterinario[]> {
    const veterinario = await this.prisma.cliente.findMany();
    return veterinario.map((Veterinario) => this.mapToEntity(Veterinario));
  }

  async findOne(id: string): Promise<Veterinario> {
    const veterinario = await this.prisma.cliente.findUnique({
      where: { id },
    });
    if (!veterinario) {
      throw new NotFoundException(`This action returns a #${id} veterinarioa`);
    }
    return this.mapToEntity(veterinario);
  }

  async update(
    id: string,
    updateVeterinarioDto: UpdateVeterinarioDto,
  ): Promise<Veterinario> {
    const veterinarioExistente = await this.prisma.cliente.findUnique({
      where: { id },
    });
    if (!veterinarioExistente) {
      throw new NotFoundException(`clente com id ${id}nao encontrado`);
    }
    const veterinarioAtulizado = await this.prisma.cliente.update({
      where: { id },
      data: updateVeterinarioDto,
    });
    return this.mapToEntity(veterinarioAtulizado);
  }

  async remove(id: string): Promise<Veterinario> {
    const veterinarioExistente = await this.prisma.cliente.findUnique({
      where: { id },
    });
    if (!veterinarioExistente) {
      throw new NotFoundException(`clente com id ${id}nao encontrado`);
    }
    const veterinarioRemovido = await this.prisma.cliente.delete({
      where: { id },
    });

    return this.mapToEntity(veterinarioRemovido);
  }
}
