// @ts-check
import {
  createGetConfigNameFactory,
  defineFlatConfig,
  imports,
  javascript,
  jsx,
  node,
  react,
  typescript,
} from '@bassist/eslint-config'

const getConfigName = createGetConfigNameFactory('react-forage')

export default defineFlatConfig([
  ...javascript,
  ...node,
  ...react,
  ...jsx,
  ...imports,
  ...typescript,
  {
    name: getConfigName('override'),
    rules: {
      'no-console': 'off',
      'require-await': 'off',
    },
  },
  {
    name: getConfigName('ignore'),
    ignores: ['dist', 'lib', 'types', 'test'],
  },
])
