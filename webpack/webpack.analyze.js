import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { merge } from 'webpack-merge';

import { productionConfig } from './config/production.js';

const analyzeConfig = {
  plugins: [new BundleAnalyzerPlugin()],
};

export default merge(productionConfig, analyzeConfig);
