import { Injectable } from '@nestjs/common';
import { CreateMapDto } from './dto/create-map.dto';
import { UpdateMapDto } from './dto/update-map.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Map } from './entities/map.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MapService {
  constructor(@InjectRepository(Map) private readonly map: Repository<Map>) {}

  async createGeom(geomdatamap: Map): Promise<any> {
    let data = {
      name: geomdatamap.name,
      desc: geomdatamap.desc,
      color: geomdatamap.color,
      geom: geomdatamap.geom.geometry,
    };
    const map = this.map.create(data);
    await this.map.save(map);
  }

  create(createMapDto: CreateMapDto) {
    return 'This action adds a new map';
  }

  findAll() {
    return this.map.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} map`;
  }

  update(id: number, updateMapDto: UpdateMapDto) {
    return `This action updates a #${id} map`;
  }

  remove(id: number) {
    return `This action removes a #${id} map`;
  }
}
