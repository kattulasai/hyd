import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { City } from "./City";

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  country_code_two!: string;

  @Column()
  country_code_three!: string;

  @Column()
  mobile_code!: number;

  @OneToMany(() => City, city => city.country)
  cities!: City[];

  constructor() {
    // No need to initialize 'cities' as an empty array, TypeORM handles this
  }
}
