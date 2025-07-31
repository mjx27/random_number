import pluginReact from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';

export default {
  plugins: {
    react: pluginReact,
    '@typescript-eslint': tseslint.plugin,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  rules: {
    'react/jsx-uses-react': 'error',
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        ignoreRestSiblings: false,
        destructuredArrayIgnorePattern: '^_',
      },
    ],
  },
};
