import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Fabric {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar'
  })
  designName: string;

  @Column({
    type: 'jsonb'
  })
  canvaJson: string;

  @Column({
    type: 'text'
  })
  previewImage: string;
}