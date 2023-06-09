import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class ProductImages {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "longtext" })
  url: string;

  @Column({ name: "product_id" })
  productId: number;

  @Column()
  order: number;
}
