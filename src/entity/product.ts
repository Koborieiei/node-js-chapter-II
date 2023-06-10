import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {

  @PrimaryGeneratedColumn()
  id: number;

  @Column(
      { name: "brand", type: "tinytext" })
  brand: string;

  @Column({ name: "name", type: "tinytext" })
  name: string;

  @Column({ name: "sku", type: "int" })
  sku: number

  @Column({ name: "price", type: "float" })
  price: number;

  @Column({ name: "sold", type: "int" })
  sold: number;

  @Column({ name: "description", type: "longtext" })
  description: string;

  @Column({ name: "discount", type: "float" })
  discount: number;

  @Column({ name: "amount", type: "int" })
  amount: number;

  @Column({ name: "image", type: "longtext" })
  image: string;

  @Column({ name: "rating", type: "float" })
  rating: number;

  @Column({ name: "review", type: "int" })
  review: number;
}

export default Product
