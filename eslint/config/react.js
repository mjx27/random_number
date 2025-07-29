import pluginReact from 'eslint-plugin-react';
import tseslint from 'typescript-eslint'; // Добавляем импорт

export default {
  plugins: {
    react: pluginReact,
    '@typescript-eslint': tseslint.plugin, // Добавляем плагин
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
    // React правила
    'react/jsx-uses-react': 'error',
    'react/react-in-jsx-scope': 'off',

    // Общие правила (лучше перенести в base.js)
    'no-unused-vars': 'off', // Отключаем в пользу TS-версии

    // TypeScript правила (лучше перенести в typescript.js)
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
