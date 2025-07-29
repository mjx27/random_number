import { merge } from 'webpack-merge';

import { commonConfig } from './common';
import { getBabelLoader } from './parts/babel';
import { getCssLoaders, getAssetLoaders } from './parts/css';
import { optimizationConfig } from './parts/optimization';
import { getPlugins } from './parts/plugins';
import { resolveConfig } from './parts/resolve';

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
