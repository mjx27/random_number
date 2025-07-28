import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const resolveConfig = {
  extensions: ['.js', '.tsx', '.ts'],
  alias: {
    '@app': path.resolve(__dirname, '../../src/app'),
    '@entities': path.resolve(__dirname, '../../src/entities'),
    '@shared': path.resolve(__dirname, '../../src/shared'),
    '@features': path.resolve(__dirname, '../../src/features'),
    '@widgets': path.resolve(__dirname, '../../src/widgets'),
  },
};
