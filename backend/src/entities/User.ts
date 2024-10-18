import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from "typeorm";
import { Review } from "./Review";
import { Order } from "./Order";

@Entity({
  name: "users",
})
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 200 })
  fullName: string;

  @Column({ type: "varchar", length: 200 })
  username: string;

  @Column({ type: "varchar", unique: true, length: 200 })
  email: string;

  @Column({ unique: true })
  password: string;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Timestamp;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Timestamp;

  @OneToMany(
    () => Review,
    (review) => {
      review.user;
    }
  )
  reviews: Review[];

  @OneToMany(
    () => Order,
    (order) => {
      order.user;
    }
  )
  orders: Order[];
}
