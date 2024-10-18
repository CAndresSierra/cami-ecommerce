import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Review } from "./Review";
import { Category } from "./Category";
import { Order } from "./Order";

@Entity({
  name: "products",
})
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar" })
  brand: string;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar" })
  description: string;

  @Column({ type: "simple-array" })
  images: string[];

  @Column({ type: "decimal" })
  price: number;

  @Column({ type: "integer" })
  stock: number;

  @Column({ type: "integer", nullable: true })
  discount: number | null;

  @Column()
  isAvailable: boolean;

  @OneToMany(
    () => Review,
    (review) => {
      review.product;
    }
  )
  @JoinColumn()
  reviews: Review[];

  @ManyToMany(
    () => Category,
    (category) => {
      category.products;
    }
  )
  @JoinTable()
  categories: Category[];

  @ManyToMany(
    () => Order,
    (order) => {
      order.products;
    }
  )
  orders: Order[];
}
