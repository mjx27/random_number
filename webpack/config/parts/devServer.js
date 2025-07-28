import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const devServerConfig = {
  static: {
    directory: path.join(__dirname, '../../public'),
  },
  compress: true,
  port: 3000,
  historyApiFallback: true,
  hot: true,
  client: {
    overlay: {
      errors: true,
      warnings: false,
    },
  },
};
