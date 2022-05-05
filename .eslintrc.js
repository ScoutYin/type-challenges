module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 0
  },
  overrides: [
    {
      files: ['questions/**/*.ts'],
      rules: {
        // for '@ts-expect-error'
        '@typescript-eslint/ban-ts-comment': 0
      }
    }
  ]
};
