// attendees.service.ts

import { Injectable } from '@nestjs/common';
import { CreateAttendeeDto } from './dto/create-attendee.dto';
import { UpdateAttendeeDto } from './dto/update-attendee.dto';
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class AttendeesService {
  constructor(private prisma: PrismaService) {}

  create(createAttendeeDto: CreateAttendeeDto) {
    return 'This action adds a new attendee';
  }

  findAll() {
    return this.prisma.attendee.findMany({
      include: {
        costume: true, // Incluye la relación con el disfraz
      },
    });
  }

  findOne(id: number) {
    return this.prisma.attendee.findUnique({
      where: { id },
      include: {
        costume: true, // Incluye la relación con el disfraz
      },
    });
  }

  update(id: number, updateAttendeeDto: UpdateAttendeeDto) {
    return `This action updates a #${id} attendee`;
  }

  remove(id: number) {
    return `This action removes a #${id} attendee`;
  }

  async makePurchase(attendeeId: number, costumeId: number) {
    // Lógica para realizar la compra
    // Puedes usar prisma para actualizar la base de datos o realizar otras acciones necesarias
    // Ejemplo: await this.prisma.attendee.update({ where: { id: attendeeId }, data: { costumeId } });

    const attendee = await this.prisma.attendee.findUnique({
      where: { id: attendeeId },
      include: {
        costume: true, // Incluye la relación con el disfraz
      },
    });

    return {
      message: `Compra realizada para el asistente #${attendeeId}`,
      attendee,
    };
  }
}
