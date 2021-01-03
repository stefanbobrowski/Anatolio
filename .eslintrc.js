module.exports = {
	extends: ['react-app', 'plugin:jsx-a11y/recommended', 'standard', 'standard-react', 'prettier', 'prettier/react'],
	plugins: ['jsx-a11y', 'prettier', 'standard'],
	rules: {
		'react/prop-types': 'off',
		'prefer-promise-reject-errors': 'off',
		'no-unused-vars': 'off',
		'react-hooks/exhaustive-deps': 'off',
	},
};
