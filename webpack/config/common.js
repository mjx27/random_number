import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const isProduction = process.env.NODE_ENV === 'production';
export const isAnalyze = process.env.ANALYZE === 'true';

export const commonConfig = {
  entry: path.resolve(__dirname, '../../src/app/index.tsx'),
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: isProduction ? '[name].[contenthash:8].js' : '[name].js',
    publicPath: '/',
    chunkFilename: isProduction
      ? '[name].[contenthash:8].chunk.js'
      : '[name].chunk.js',
    publicPath: '/',
    clean: true,
  },
  performance: {
    hints: isProduction ? 'warning' : false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename],
    },
  },
};
