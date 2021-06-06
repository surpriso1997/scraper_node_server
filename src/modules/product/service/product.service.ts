// import DB from '@/databases';
// import HttpException from '@/exceptions/HttpException';
// import { isEmpty } from 'class-validator';
// import { Http } from 'winston/lib/winston/transports';

// import { InsertProductDto } from '../dtos/insert_product.dto';
// import { Price } from '../interface/price.interface';
// import { Product } from '../interface/product.interface';
// import { PriceModel } from '../model/price.model';
// import { ProductModel } from '../model/product.model';

// export class ProductService {
//   private productDB: typeof ProductModel;
//   private priceDB: typeof PriceModel;
//   constructor() {
//     this.productDB = DB.Product;
//     this.priceDB = DB.Price;
//   }
//   public async createProduct(product: InsertProductDto) {
//     console.log(product);
//     if (isEmpty(product)) throw new HttpException(400, 'Empty product');
//     try {
//       const findProduct: Product | null = await this.productDB.findOne({
//         where: {
//           sku: product.sku,
//         },
//         raw: true,
//       });

//       if (findProduct) {
//         throw new HttpException(422, 'Product with sku  already exists');
//       }

//       const res = await this.productDB.create(product);
//     } catch (e) {
//       console.log(e);
//       throw new HttpException(422, e);
//     }

//     const createProduct: Product = product;
//     const createdProduct: Product | null = await this.productDB.create(createProduct);
//     return createdProduct;
//   }
//   public async findProduct(sku: string): Promise<Product> {
//     const product: Product | null = await this.productDB.findOne({ include: { all: true }, where: { sku: sku } });
//     if (!product) {
//       throw new HttpException(404, 'Product with sku not found');
//     }
//     return product;
//   }
//   public async findAllProducts(limit?: number): Promise<Product[]> {
//     console.log(`getting product`);

//     try {
//       const products: Product[] = await this.productDB.findAll({
//         limit: limit ?? 10,
//         raw: true,
//         include: 'prices',
//       });

//       // const [results, metaData] = await DB.sequelize.query(`
//       // SELECT *, "prices" FROM "Product"
//       // RIGHT JOIN "Price" as "prices" ON 
//       // "Product"."sku" = "prices"."sku";
//       // `);

//       // console.log(results);
//       // for (let i: number = 0; i < products.length; i++) {
//       //   const prices: Price[] = await this.priceDB.findAll({
//       //     where: {
//       //       sku: products[i].sku,
//       //     },
//       //   });
//       //   products[i].prices = prices;
//       // }

//       if (products) return products;
//       else return [];
//     } catch (e) {
//       console.log(e);
//     }
//   }
// }
