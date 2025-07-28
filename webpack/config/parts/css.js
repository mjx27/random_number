import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const getCssLoaders = (isProduction) => ({
  test: /\.css$/,
  use: [
    isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
    {
      loader: 'css-loader',
      options: {
        modules: {
          auto: true,
          localIdentName: isProduction
            ? '[hash:base64:8]'
            : '[path][name]__[local]',
        },
        importLoaders: 1,
      },
    },
    'postcss-loader',
  ],
});

export const getAssetLoaders = (isProduction) => [
  {
    test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
    type: isProduction ? 'asset' : 'asset/resource',
  },
  {
    test: /\.(woff2?|eot|ttf|otf)$/i,
    type: 'asset/resource',
  },
];
