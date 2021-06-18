import { dbConfig } from '@/common/interfaces/db.interface';
import config from 'config';
import { env } from 'process';

const devConfig: dbConfig = {
  database: process.env.DB_NAME_DEV,
  password: process.env.DB_PASSOWRD_DEV,
  url: env.DB_PATH_DEV,
  host: process.env.DB_USERNAME_DEV,
  port: 27017,
};
const prodConfig: dbConfig = {
  database: process.env.DB_NAME_DEV,
  password: process.env.DB_PASSWORD_PROD,
  url: env.DB_PATH_DEV,
  host: process.env.DB_USERNAME_DEV,
  port: 27017,
};

const { host, database, password, url } =
  process.env.NODE_ENV == 'development' ? devConfig : prodConfig;

export const dbConnection = {
  url: `mongodb+srv://${host}:${password}@${url}/${database}?retryWrites=true&w=majority`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
};
