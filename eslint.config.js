import js from '@eslint/js'
import globals from 'globals'
import storybook from 'eslint-plugin-storybook'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import parser from '@typescript-eslint/parser'
import plugin from '@typescript-eslint/eslint-plugin'

export default [
  { ignores: ['dist', 'storybook-static'] },

  // JS 
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node 
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module'
      }
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'semi': ['error', 'never'],
      'max-len': ['error', { code: 120 }],
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
    }
  },

{
  files: ['.storybook/**/*.{ts,tsx}', 'vite.config.ts'],
  languageOptions: {
    parser: parser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    }
  },
  rules: {} 
},

  // TS 
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      parser: parser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: process.cwd(),
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': plugin
    },
    rules: {
      ...plugin.configs.recommended.rules,
      'semi': ['error', 'never'],
      'max-len': ['error', { code: 120 }]
    }
  },

  // Storybook 
  {
    files: ['**/*.stories.{js,jsx,ts,tsx}'],
    plugins: { storybook },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    }  
  },
    rules: {
      ...storybook.configs['flat/recommended'].rules,
      'storybook/no-renderer-packages': 'off'
    }
  }
]
