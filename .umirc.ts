import { IConfig } from 'umi-types';
import path from 'path';
import {routes} from './src/config/index';


console.log('11111111111',routes)
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
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  routes:routes
  // routes:[
  //   {
  //     path:'/login',
  //     component:'./login/index.tsx'
  //   }
  // ]
}

export default config;
