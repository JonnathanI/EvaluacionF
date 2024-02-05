// costumes.service.ts
import { Injectable } from '@nestjs/common';
import { CreateCostumeDto } from './dto/create-costume.dto';
import { UpdateCostumeDto } from './dto/update-costume.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CostumesService {
  constructor(private prisma: PrismaService) {}

  create(createCostumeDto: CreateCostumeDto) {
    return 'This action adds a new costume';
  }
//Crea un endpoint que devuelva los disfrazes, los que que se encuentren en stock.
  findAll() {
    return this.prisma.costume.findMany({ where: { stock: true } });
  }

  findOne(id: number) {
    return `This action returns a #${id} costume`;
  }

  update(id: number, updateCostumeDto: UpdateCostumeDto) {
    return `This action updates a #${id} costume`;
  }

  remove(id: number) {
    return `This action removes a #${id} costume`;
  }
//Si la cantidad de disfrazes en stock es menor que el número de asistentes, implementa un endpoint adicional `/costumes/supplying`.
// Este endpoint debe permitir agregar más disfrazes al inventario hasta satisfacer la demanda (attendess).
  async supplyCostumes(attendees: number) {
    const costumesInStock = await this.prisma.costume.count({
      where: { stock: true },
    });

    if (costumesInStock < attendees) {
      const costumesNeeded = attendees - costumesInStock;
      const newCostumes = await this.prisma.costume.createMany({
        data: Array(costumesNeeded).fill({ stock: true }),
      });

      return {
        message: `Added ${newCostumes} new costumes to the inventory.`,
        costumes: newCostumes,
      };
    } else {
      return 'No additional costumes needed.'
    }
  }
}
