import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import prettier from 'eslint-config-prettier'

export default defineConfig([
  globalIgnores(['dist']),

  // Main rules for all TS/TSX files
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      prettier,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      'no-console': ['error', { allow: ['warn', 'error'] }],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'never' }],
    },
  },

  // Relax generated shadcn files — do not edit these manually
  {
    files: ['src/ui/**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/consistent-type-assertions': 'off',
      'react-refresh/only-export-components': 'off',
      'react-hooks/purity': 'off',
    },
  },

  // TanStack Router page files always export both Route + component — fast refresh warning is expected
  {
    files: ['src/pages/**/*.{ts,tsx}'],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
])
