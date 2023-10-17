import { antfu } from '@antfu/eslint-config'

export default antfu(
  {
    ignores: ['./src/node-baidusdk.ts'],
  },
  {
    rules: {
      'curly': 'off',
      'no-console': 'off',
      'no-restricted-globals': 'off',
      'ts/ban-ts-comment': 'off',
      'unused-imports/no-unused-imports': 'off',
      'unused-imports/no-unused-vars': 'warn',
      'prefer-promise-reject-errors': 'warn',
    },
  },
)
