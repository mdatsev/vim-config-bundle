module.exports = {
    'extends': ['standard', 'plugin:jest/recommended'],
    'plugins': [
      'jest'
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
