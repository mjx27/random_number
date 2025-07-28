import { merge } from 'webpack-merge';

import { commonConfig, isProduction } from './common.js';
import { getBabelLoader } from './parts/babel.js';
import { getCssLoaders, getAssetLoaders } from './parts/css.js';
import { devServerConfig } from './parts/devServer.js';
import { getPlugins } from './parts/plugins.js';
import { resolveConfig } from './parts/resolve.js';

export const developmentConfig = merge(commonConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: devServerConfig,
  module: {
    rules: [
      getBabelLoader(isProduction),
      getCssLoaders(isProduction),
      ...getAssetLoaders(),
    ],
  },
  plugins: getPlugins(isProduction, false),
  resolve: resolveConfig,
});
