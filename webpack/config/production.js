import { merge } from 'webpack-merge';

import { commonConfig, isProduction } from './common.js';
import { getBabelLoader } from './parts/babel.js';
import { getCssLoaders, getAssetLoaders } from './parts/css.js';
import { optimizationConfig } from './parts/optimization.js';
import { getPlugins } from './parts/plugins.js';
import { resolveConfig } from './parts/resolve.js';

export const productionConfig = merge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      getBabelLoader(isProduction),
      getCssLoaders(isProduction),
      ...getAssetLoaders(isProduction),
    ],
  },
  plugins: getPlugins(isProduction, false),
  resolve: resolveConfig,
  optimization: optimizationConfig(isProduction),
});
