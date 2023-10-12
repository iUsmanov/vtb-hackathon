module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/jsx-runtime',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		// По рекомендациям. Всё же отключил, так как возникли проблемы
		// project: './tsconfig.json',
		// tsconfigRootDir: __dirname,
	},
	plugins: ['react', '@typescript-eslint', 'react-hooks', 'fsd-paths-guard', 'unused-imports'],
	rules: {
		'react/display-name': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		// Warnings
		semi: 'warn',
		'@typescript-eslint/no-empty-interface': 'warn',
		'react/jsx-props-no-spreading': 'warn',
		// ERRORS
		'react/button-has-type': 'error',
		// 'no-undef': 'error',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				argsIgnorePattern: '^_',
			},
		],
		// 'react/jsx-max-props-per-line': [2, { maximum: 3, when: 'always' }],
		// 'react/jsx-first-prop-new-line': [2, 'multiline'],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
		'fsd-paths-guard/relative-path-checker': ['error', { alias: '@' }],
		'fsd-paths-guard/public-api-imports': [
			'error',
			{
				alias: '@',
				testFilesPatterns: [
					'**/*.test.*',
					'**/storybook/*Decorator.tsx',
					'**/*.stories.{ts,tsx}',
					'**/lib/tests/**/*.*',
				],
			},
		],
		'fsd-paths-guard/hierarchy-imports-between-layers': [
			'error',
			{
				alias: '@',
				ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
			},
		],
		'unused-imports/no-unused-imports': 'error',
		'@typescript-eslint/no-explicit-any': 'warn',
	},
	globals: {
		__IS_DEV__: true,
		__API__: true,
		__ENVIRON__: true,
	},
	// По рекомендациям
	settings: {
		react: {
			createClass: 'createReactClass',
			pragma: 'React',
			fragment: 'Fragment',
			version: 'detect',
		},
	},
};
// @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest eslint@latest eslint-plugin-react@latest eslint-plugin-storybook@latest eslint-config-prettier@latest eslint-plugin-i18next@latest
