import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { StationService } from './station.service';
import { CreateStationDto } from './dto/create-station.dto';
import { UpdateStationDto } from './dto/update-station.dto';

@Controller('station')
export class StationController {
  constructor(private readonly stationService: StationService) {}

  @Post()
  create(@Body() CreateStationDto: CreateStationDto) {
    return this.stationService.create(CreateStationDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.stationService.findOne(+id);
    } catch(e) {
      if (e.code == "P2025") {
        throw new NotFoundException(`Nincs állomás ezzel az id-val:  ${id}`);
      } else {
        throw e;
      }
    }
  }



  @Patch(':id')
  async update(@Param('id') id: string, @Body() UpdateStationDto: UpdateStationDto) {
    try {
      return await this.stationService.update(+id, UpdateStationDto);
    } catch(e) {
      if (e.code == "P2025") {
        throw new NotFoundException(`Nincs állomás ezzel az id-val:  ${id}`);
      } else {
        throw e;
      }
    }
  }
  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.stationService.remove(+id);
    } catch(e) {
      if (e.code == "P2025") {
        throw new NotFoundException(`Nincs állomás ezzel az id-val: ${id}`);
      } else {
        throw e;
      }
    }
  }

}
