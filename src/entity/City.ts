import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Country } from "./Country";
import { Airport } from "./Airport";

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  state!: string;

  @Column()
  population!: number;

  @ManyToOne(() => Country, country => country.cities)
  country!: Country;

  @OneToMany(() => Airport, airport => airport.city)
  airports!: Airport[];

  constructor() {
    // No need to initialize 'airports' as an empty array, TypeORM handles this
  }
}
