import { UnprocessableEntityException } from '@nestjs/common';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { GeoJSON } from 'geojson';
import { IsOptional } from 'class-validator';

@Entity({ name: 'geodata' })
export class Map {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  name: string;

  @Column()
  desc: string;

  @Column()
  color: string;

  @Column({
    type: 'geometry',
    spatialFeatureType: 'geometry',
    srid: 4326,
    nullable: true,
  })
  geom: GeoJSON;
}
