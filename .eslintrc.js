module.exports = {
    'extends': ['standard', 'plugin:jest/recommended'],
    'plugins': [
      'no-parameter-e',
      'pep8-blank-lines',
      'jest',
    ],
    'rules': {
      'max-len': ['error', { 'code': 120 }],
      'max-params': ['error', 5],
      'max-depth': 'error',
      'max-lines-per-function': ['error', { 'max': 100 }],
      'guard-for-in': 'error',
      'comma-dangle': [
        'error',
        'always-multiline',
      ],
      'no-extra-semi': 'error',
      'no-multiple-empty-lines': 'off',
      'no-parameter-e/no-parameter-e': 'error',
      'pep8-blank-lines/pep8-blank-lines': 'error',
      'prefer-arrow-callback': 'error',
      'semi': [
        'error',
        'always',
      ],
      'prefer-const': [
        'error',
        {
          'destructuring': 'any',
          'ignoreReadBeforeAssign': false,
        },
      ],
      'no-var': 'error',
    },
    'env': {
      'jest/globals': true
    }
  };