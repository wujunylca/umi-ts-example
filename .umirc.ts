import { IConfig } from 'umi-types';
import path from 'path';
const router = require('./src/config/index');

const config: IConfig =  {
  alias: {
    '@': path.resolve(__dirname, 'src'),
    '@utils': path.resolve(__dirname, 'src/utils'),
  },
  treeShaking: true,
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: true,
      title: 'umi-app',
      dll: false,
      routes: {
        exclude: [
          /models\//,
          // /services\//,
          // /model\.(t|j)sx?$/,
          // /service\.(t|j)sx?$/,
          // /components\//,
        ],
      },
    }],
  ],
  routes:router.routes,
}

export default config;
