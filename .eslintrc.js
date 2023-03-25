module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	// extends: ['eslint:recommended', 'prettier'],
	extends: ['eslint:recommended', 'plugin:prettier/recommended'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	// plugins: ['prettier'],
	rules: {
		// "no-console": 'error',
		quotes: ['error', 'single'],
		// semi: [2, 'always'],
		// 'prettier/prettier': 'error',
	},
}
