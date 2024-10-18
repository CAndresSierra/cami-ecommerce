import { In } from "typeorm";
import { AppDataSource } from "../config/AppDataSource";
import { ICategoryDto } from "../dtos/ICategories";
import { IProductDto } from "../dtos/IProduct";
import { CategoryRepository } from "../repositories/category.repository";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  brand: string;
  name: string;
  description: string;
  images: string[];
  price: number;
  stock: number;
  discount: number | null;
  isAvailable: boolean;
  categories: ICategoryId[];
}

interface ICategoryId {
  id: string;
}

interface ICategory {
  name: string;
}

const productsToPreload: IProduct[] = [
  {
    brand: "Logitech",
    name: "Mouse Logitech G502 Hero",
    description:
      "Ratón gamer de alto rendimiento con DPI ajustable y botones programables.",
    images: [
      "https://m.media-amazon.com/images/I/61mpMH5TzkL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/71BYvNUoumL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/61vThyaOrHL._AC_SX466_.jpg",
    ],
    price: 49.99,
    stock: 120,
    discount: 10,
    isAvailable: true,
    categories: [{ id: "4bb94a0c-5942-4ff3-b69b-a7c2b18cf468" }],
  },
  {
    brand: "Corsair",
    name: "Teclado Corsair K95 RGB Platinum",
    description:
      "Teclado mecánico gaming con iluminación RGB personalizable y teclas macro dedicadas.",
    images: [
      "https://m.media-amazon.com/images/I/71QCqjg5j8L._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/71ceAj74nQL._AC_SX466_.jpg",
    ],
    price: 199.99,
    stock: 75,
    discount: null,
    isAvailable: true,
    categories: [{ id: "9e026a5c-f72a-4be7-a414-98c354eb3dcc" }],
  },
  {
    brand: "Razer",
    name: "Auriculares Razer Kraken X",
    description:
      "Auriculares gaming ligeros con sonido envolvente 7.1 para una experiencia inmersiva.",
    images: [
      "https://m.media-amazon.com/images/I/71NxwEjlU1L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/610T6qHXK7L._AC_SY355_.jpg",
    ],
    price: 39.99,
    stock: 180,
    discount: 5,
    isAvailable: true,
    categories: [{ id: "d84e26e3-7ab7-4a13-8622-888d1868012d" }],
  },
  {
    brand: "SteelSeries",
    name: "Alfombrilla SteelSeries QcK",
    description:
      "Superficie duradera y suave, optimizada para precisión y control del ratón gamer.",
    images: [
      "https://m.media-amazon.com/images/I/51Nd5Uy2EGL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/711xnOhcjTL._AC_SX466_.jpg",
    ],
    price: 14.99,
    stock: 400,
    discount: null,
    isAvailable: true,
    categories: [{ id: "00c9b995-b092-42ab-82a8-13c0b98260cd" }],
  },
  {
    brand: "ASUS",
    name: "Monitor ASUS VG248QE 24 pulgadas",
    description:
      "Monitor gaming Full HD de 24 pulgadas con 144Hz de tasa de refresco y 1ms de tiempo de respuesta.",
    images: [
      "https://m.media-amazon.com/images/I/811fyhOgYML.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/81JlCbi7etL._AC_SX466_.jpg",
    ],
    price: 249.99,
    stock: 60,
    discount: 15,
    isAvailable: true,
    categories: [{ id: "1721f66b-fc59-4343-80f9-04ee445f6491" }],
  },
  {
    brand: "HyperX",
    name: "Teclado Mecánico HyperX Alloy FPS Pro",
    description:
      "Teclado compacto para gaming con interruptores mecánicos y estructura de acero.",
    images: [
      "https://m.media-amazon.com/images/I/71cQYybJC7L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/61sZRgufm+L._AC_SX679_.jpg",
    ],
    price: 89.99,
    stock: 100,
    discount: 10,
    isAvailable: true,
    categories: [{ id: "9e026a5c-f72a-4be7-a414-98c354eb3dcc" }],
  },
  {
    brand: "MSI",
    name: "Mouse MSI Clutch GM41",
    description:
      "Ratón gaming ultraligero con sensor óptico de alta precisión y RGB Mystic Light.",
    images: [
      "https://m.media-amazon.com/images/I/71lODJl3U0L._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/71HK5Rue71L._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/61w10PhGGWL._AC_SX466_.jpg",
    ],
    price: 59.99,
    stock: 200,
    discount: 20,
    isAvailable: true,
    categories: [{ id: "4bb94a0c-5942-4ff3-b69b-a7c2b18cf468" }],
  },
  {
    brand: "Logitech",
    name: "Auriculares Logitech G733",
    description:
      "Auriculares inalámbricos con micrófono desmontable y iluminación RGB personalizable.",
    images: [
      "https://m.media-amazon.com/images/I/71xNjrzG69L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/81Be4ElG-JL._AC_SX679_.jpg",
    ],
    price: 129.99,
    stock: 90,
    discount: null,
    isAvailable: true,
    categories: [{ id: "d84e26e3-7ab7-4a13-8622-888d1868012d" }],
  },
  {
    brand: "Corsair",
    name: "Ratón Corsair Dark Core RGB Pro",
    description:
      "Ratón inalámbrico gaming con iluminación RGB y hasta 18,000 DPI.",
    images: [
      "https://m.media-amazon.com/images/I/61Q8UQrNpxL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/71+gAf5f91L._AC_SX466_.jpg",
    ],
    price: 99.99,
    stock: 150,
    discount: 10,
    isAvailable: true,
    categories: [{ id: "4bb94a0c-5942-4ff3-b69b-a7c2b18cf468" }],
  },
  {
    brand: "Acer",
    name: "Monitor Acer Nitro XV272U",
    description:
      "Monitor gaming QHD de 27 pulgadas con 165Hz y tecnología FreeSync.",
    images: [
      "https://m.media-amazon.com/images/I/81WcXnYjaFL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/71C+9MAE++L._AC_SX466_.jpg",
    ],
    price: 299.99,
    stock: 70,
    discount: 20,
    isAvailable: true,
    categories: [{ id: "1721f66b-fc59-4343-80f9-04ee445f6491" }],
  },
];

const categoriesToPreload: ICategory[] = [
  { name: "Ratones" },
  { name: "Teclados" },
  { name: "Auriculares" },
  { name: "Monitores" },
  { name: "Alfombrillas para Ratón" },
  { name: "Cámaras Web" },
  { name: "Micrófonos" },
  { name: "Sillas Gamer" },
];

export const seedProducts = async () => {
  const productsF = await ProductRepository.find();
  if (productsF.length > 0) {
    console.log("Product seed was not done cause there is already data");
    return;
  }

  const queryRunner = AppDataSource.createQueryRunner();
  await queryRunner.connect();

  await queryRunner.startTransaction();
  try {
    for await (const product of productsToPreload) {
      const newProduct = await ProductRepository.create({
        brand: product.brand,
        name: product.name,
        description: product.description,
        images: product.images,
        price: product.price,
        stock: product.stock,
        discount: product.discount,
        isAvailable: product.isAvailable,
      });

      const categoriesF = await CategoryRepository.findOneBy({
        id: In(product.categories.map((cat) => cat.id)),
      });
      if (categoriesF) {
        newProduct.categories = [categoriesF];
        await queryRunner.manager.save(newProduct);
      }

      await queryRunner.manager.save(newProduct);
    }

    await queryRunner.commitTransaction();
    console.log("Product seed done succesfully");
  } catch (error: any) {
    console.log(error.message);
    await queryRunner.rollbackTransaction();
  } finally {
    await queryRunner.release();
  }
};

export const seedCategories = async () => {
  const categories = await CategoryRepository.find();
  if (categories.length > 0) {
    console.log("Category seed was not done cause there is already data");
    return;
  }

  const queryRunner = AppDataSource.createQueryRunner();
  await queryRunner.connect();

  await queryRunner.startTransaction();
  try {
    for await (const category of categoriesToPreload) {
      const newCategory = await CategoryRepository.create(category);
      await queryRunner.manager.save(newCategory);
    }

    await queryRunner.commitTransaction();
    console.log("Category seed done succesfully");
  } catch (error: any) {
    console.log(error.message);
    await queryRunner.rollbackTransaction();
  } finally {
    await queryRunner.release();
  }
};
