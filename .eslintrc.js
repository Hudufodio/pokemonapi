module.exports = {
	env: {
		browser: true,
		es2021: true,
		es6: true,
	},
	extends: [
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
	},
	plugins: ['react', 'prettier'],
	rules: {
		'prettier/prettier': ['warn', { endOfLine: 'auto' }],
		'react/react-in-jsx-scope': 'off',
		'brace-style': 'off',
		'comma-dangle': 'off',
		'comma-spacing': 'off',
		'default-param-last': 'off',
		'dot-notation': 'off',
		'func-call-spacing': 'off',
		'no-tabs': 'off',
		indent: 'off',
		'init-declarations': 'off',
		'keyword-spacing': 'off',
		'lines-between-class-members': 'off',
		'no-array-constructor': 'off',
		'no-dupe-class-members': 'off',
		'no-duplicate-imports': 'off',
		'no-empty-function': 'off',
		'no-extra-parens': 'off',
		'no-extra-semi': 'off',
		'no-invalid-this': 'off',
		'no-loop-func': 'off',
		'no-loss-of-precision': 'off',
		'no-magic-numbers': 'off',
		'no-redeclare': 'off',
		'no-shadow': 'off',
		'no-unused-expressions': 'off',
		'no-unused-vars': 'off',
		'no-use-before-define': 'off',
		'no-useless-constructor': 'off',
		quotes: 'off',
		'require-await': 'off',
		'return-await': 'off',
		semi: 'off',
		'space-before-function-paren': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-member-accessibility': 'off',
		'@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
		'@typescript-eslint/no-use-before-define': ['error', { functions: false, typedefs: false }],
		'@typescript-eslint/no-var-requires': 'off',
		// REST API objects include underscores
		'@typescript-eslint/camelcase': 'off',
		'@typescript-eslint/indent': ['error', 'tab'],

		// TypeScript compiler already takes care of these errors
		'import/no-extraneous-dependencies': 'off',
		'import/named': 'off',
		'import/namespace': 'off',
		'import/default': 'off',
	},
};
