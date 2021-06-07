import { Request, Response } from 'express';
import { InsertProductDto } from '../dtos/insert_product.dto';
import { ProductService } from '../service/product.service';
// import { ProductService } from '../service/product.service';

export default class ProductController {
  public async postProduct(req: Request, res: Response) {
    const productService = new ProductService();
    try {
      const productDto: InsertProductDto = req.body;
      const result = await productService.createProduct(productDto);
      return res.json({ data: result });
    } catch (e) {
      console.log(e);
      return res.json({ error: e.toString() });
    }
  }
  public async getAllProducts(req: Request, res: Response) {
    const productService = new ProductService();
    try {
      if (req.query['sku']) {
        const product = await productService.findProduct(
          req.query['sku'] as string,
        );
        return res.json({ data: product });
      } else {
        const products = await productService.findAllProducts();
        return res.status(200).json({ data: products });
      }
    } catch (e) {
      console.log(e);
      return res.status(400).json({ error: 'cannot get products' });
    }
  }

  public async getProductBySku(req: Request, res: Response) {
    const productService = new ProductService();

    try {
      const product = await productService.findProduct(
        req.query['sku'] as string,
      );
      return res.json({ data: product });
    } catch (error) {
      return res.json({ data: [] });
    }
  }
  public async getProduct(req: Request, res: Response) {}

  public async search(req: Request, res: Response) {}
}
