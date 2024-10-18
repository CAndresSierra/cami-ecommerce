import {
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";
import { Product } from "./Product";

@Entity({
  name: "orders",
})
export class Order {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(
    () => User,
    (user) => {
      user.orders;
    }
  )
  user: User;

  @ManyToMany(
    () => Product,
    (product) => {
      product.orders;
    }
  )
  @JoinTable()
  products: Product[];
}
