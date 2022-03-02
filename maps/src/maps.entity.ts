import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  PrimaryColumn,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";

@Entity()
export class MapEntry {
  @PrimaryColumn()
  mapCode: number;

  @CreateDateColumn()
  dateAdded: Date;

  @OneToMany((type) => MapCategories, (c) => c.categoryId)
  categories: MapCategories[];
}

@Entity()
export class MapCategories {
  @PrimaryColumn()
  mapCode: number;

  @PrimaryColumn()
  categoryId: string;
}

@Entity()
export class MapAttributes {
  @PrimaryColumn()
  mapCode: number;

  @PrimaryColumn()
  attrId: string;

  //@Column()
  //attrValueId: number;

  @OneToOne((type) => MapAttributeValue)
  @JoinColumn({ name: "attrValueId" })
  attrValue: MapAttributeValue;
}

@Entity()
export class MapAttributeValue {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  integerValue?: number;

  @Column({ nullable: true })
  doubleValue?: number;

  @Column({ nullable: true })
  stringValue?: string;

  @Column({ nullable: true })
  booleanValue?: boolean;

  @Column({ nullable: true })
  longStringValue?: string;
}

//export const entities = [MapEntry, MapCategories, MapAttributes, MapAttributeValue];
