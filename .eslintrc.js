module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
	},
	plugins: [
		'@typescript-eslint',
    'prettier'
	],	
	extends: [
		'eslint:recommended',		
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:prettier/recommended', // Prettier 규칙 및 ESLint와의 통합을 위한 설정을 추가합니다.
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
	},
	rules: {
		// prettier 서식 규칙을 ESLint로 추가
		"prettier/prettier": "error",
	},
};
