import eslint from '@eslint/js';
import globals from 'globals';

export default {
  ignores: [
    '**/node_modules/',
    '**/dist/',
    '**/*.d.ts',
    '**/coverage/',
    '**/*.config.ts',
  ],
  ...eslint.configs.recommended,
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
    },
  },
};
