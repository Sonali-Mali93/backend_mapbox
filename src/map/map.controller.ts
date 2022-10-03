import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MapService } from './map.service';
import { CreateMapDto } from './dto/create-map.dto';
import { UpdateMapDto } from './dto/update-map.dto';
import { Map } from './entities/map.entity';

@Controller('map')
export class MapController {
  constructor(private readonly mapService: MapService) { }

  @Get()
  msg() {

    return "this is come from map controller"
  }
  @Post('geom')
  async createGeom(
    @Body()
    geomData: Map): Promise<Map> {
    console.log("this is come from map controller", geomData)
    return this.mapService.createGeom(geomData)
  }
  @Post()
  create(@Body() createMapDto: CreateMapDto) {
    return this.mapService.create(createMapDto);
  }

  @Get("geom")
  findAll() {
    return this.mapService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mapService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMapDto: UpdateMapDto) {
    return this.mapService.update(+id, updateMapDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mapService.remove(+id);
  }
}
