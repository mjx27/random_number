export const getBabelLoader = (isProduction) => ({
  test: /\.(ts|js)x?$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      presets: [
        ['@babel/preset-env', { modules: false }],
        '@babel/preset-react',
        '@babel/preset-typescript',
      ],
      plugins: [
        isProduction && [
          'babel-plugin-transform-react-remove-prop-types',
          { removeImport: true },
        ],
        !isProduction && 'react-refresh/babel',
      ].filter(Boolean),
    },
  },
});
