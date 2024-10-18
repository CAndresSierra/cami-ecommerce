export interface IProductDto {
  brand: string;
  name: string;
  description: string;
  images: string[];
  price: number;
  stock: number;
  discount: number | null;
  isAvailable: boolean;
}
