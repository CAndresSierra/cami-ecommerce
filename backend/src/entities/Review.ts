import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";
import { Product } from "./Product";

@Entity({
  name: "reviews",
})
export class Review {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 500 })
  comment: string;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Timestamp;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Timestamp;

  @ManyToOne(
    () => Product,
    (product) => {
      product.reviews;
    }
  )
  product: Product;

  @ManyToOne(
    () => User,
    (user) => {
      user.reviews;
    }
  )
  user: User;
}
