import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { City } from "./City";
import { Country } from "./Country";

@Entity()
export class Airport {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  icao_code!: string;

  @Column()
  iata_code!: string;

  @Column()
  name!: string;

  @Column()
  type!: string;

  @Column("decimal")
  latitude_deg!: number;

  @Column("decimal")
  longitude_deg!: number;

  @Column()
  elevation_ft!: number;

  @ManyToOne(() => City, city => city.airports)
  city!: City;

  @ManyToOne(() => Country)
  country!: Country;

  constructor() {
    // Initialization is not needed in the constructor; TypeORM will handle it.
  }
}
