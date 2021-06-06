import { Price } from './price.interface';

export interface Product {
  id?: number;
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
