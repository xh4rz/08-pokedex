module.exports = {
	root: true,
	extends: '@react-native',
	rules: {
		'react-native/no-inline-styles': 0,
		'prettier/prettier': 0,
		'comma-dangle': 0,
		'no-trailing-spaces': 0,
		'@typescript-eslint/no-unused-vars': ['warn'],
		'react/react-in-jsx-scope': 'off',
		'react-hooks/exhaustive-deps': 'off',
		curly: 'off',
		'react/no-unstable-nested-components': 'off'
	}
};
