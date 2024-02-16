import { Injectable } from '@nestjs/common';
import {  CreateStationDto } from './dto/create-station.dto';
import {  UpdateStationDto } from './dto/update-station.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class StationService {

  constructor(private readonly db: PrismaService) {}

  create(CreateStationDto: CreateStationDto) {
    return this.db.station.create({
      data: CreateStationDto
    });
  }

  findAll() {
    return this.db.station.findMany();
  }

  findOne(id: number) {
    return this.db.station.findUniqueOrThrow({
      where: { id }
    })
  }

  update(id: number, updateStationDto: UpdateStationDto) {
    return this.db.station.update({
      data: updateStationDto,
      where: { id }
    })
  }

  remove(id: number) {
    return this.db.station.delete({
      where: { id }
    })
  }
}
