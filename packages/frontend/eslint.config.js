import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import react from 'eslint-plugin-react';
import importLint from 'eslint-plugin-import';
import tsEslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default tsEslint.config(
    { ignores: ['dist'] },
    {
        extends: [
            js.configs.recommended,
            ...tsEslint.configs.recommended,
            prettier,
            eslintPluginPrettierRecommended,
        ],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                project: ['./tsconfig.node.json', './tsconfig.app.json'],
                tsconfigRootDir: import.meta.dirname,
            },
        },
        plugins: {
            react,
            import: importLint,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            eslintPluginPrettier,
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            'prettier/prettier': 'error',
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                },
            ],
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'import/order': [
                'error',
                {
                    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                    'newlines-between': 'always',
                    alphabetize: {
                        order: 'asc',
                    },
                },
            ],
        },
    }
);
