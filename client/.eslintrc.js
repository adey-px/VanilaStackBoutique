/*
To avoid 'Parsing error: The keyword 'import' is reserved' by ESlint
- line 14 informs ESlint that the project files are module
- option: use commonjs 'require() & module.exports to export files
*/
export default {
	root: true,
	env: {
		browser: true,
		node: true,
		es2020: true,
	},
	extends: ['eslint:recommended', 'prettier'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 11,
	},
	rules: {
		'no-console': 0,
		'no-underscore-dangle': 0,
		'no-nested-ternary': 0,
		'import/prefer-default-export': 0,
	},
};
