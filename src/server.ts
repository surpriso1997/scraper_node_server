process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'dotenv/config';
import App from '@/app';
import validateEnv from '@utils/validateEnv';
import ProductRoute from './modules/product/routes/product.route';
import PriceRoute from './modules/product/routes/price.route';
import IndexRoute from './common/routes/index.route';

validateEnv();

const app = new App([new IndexRoute(), new ProductRoute(), new PriceRoute()]);

app.listen();
