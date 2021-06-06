import { Price } from '../interface/price.interface';

export class InsertProductDto {
  name: string;
  sku: string;
  image: string;
  sellerName: string;
  brandname: string;

  originalPrice: string;
  currentPrice: string;
  discount: string;

  prices?: Price[];
}
