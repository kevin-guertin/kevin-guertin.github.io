/* eslint-disable prettier/prettier */
module.exports = {
    'env': {
        'browser': true,
        'node': true
    },
    'extends': [
        'react-app',
        'eslint:recommended',
        'plugin:react/recommended',
        'prettier',
        //'plugin:prettier/recommended'
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        'prettier',
        '@typescript-eslint',
        'react-hooks'
    ],
    'rules': {
        // 'prettier/prettier': [
        //     'warn', {
        //         'semi': false,
        //         'trailingComma': 'es5',
        //         'singleQuote': true,
        //         'printWidth': 80,
        //         'tabWidth': 4,
        //         'endOfLine': 'auto',
        //     }
        // ],
        '@typescript-eslint/explicit-member-accessibility': [
            'off',
            {
                'accessibility': 'explicit'
            }
        ],
        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                'multiline': {
                    'delimiter': 'none',
                    'requireLast': true
                },
                'singleline': {
                    'delimiter': 'semi',
                    'requireLast': false
                }
            }
        ],
        '@typescript-eslint/quotes': [
            'warn',
            'single',
            {
                'allowTemplateLiterals': true,
                'avoidEscape': true
            }
        ],
        '@typescript-eslint/semi': [
            'error',
            'never'
        ],
        'array-callback-return': 'warn',
        'default-case': [
            'warn',
            {
                'commentPattern': '^no default$'
            }
        ],
        'dot-location': [
            'warn',
            'property'
        ],
        'eqeqeq': [
            'error',
            'smart'
        ],
        'flowtype/define-flow-type': 'warn',
        'flowtype/require-valid-file-annotation': 'warn',
        'flowtype/use-flow-type': 'warn',
        'getter-return': 'warn',
        'import/first': 'error',
        'import/no-amd': 'error',
        'import/no-webpack-loader-syntax': 'error',
        'import/order': 'off',
        'jsx-a11y/accessible-emoji': 'warn',
        'jsx-a11y/alt-text': 'warn',
        'jsx-a11y/anchor-has-content': 'warn',
        'jsx-a11y/anchor-is-valid': [
            'warn',
            {
                'aspects': [
                    'noHref',
                    'invalidHref'
                ]
            }
        ],
        'jsx-a11y/aria-activedescendant-has-tabindex': 'warn',
        'jsx-a11y/aria-props': 'warn',
        'jsx-a11y/aria-proptypes': 'warn',
        'jsx-a11y/aria-role': [
            'warn',
            {
                'ignoreNonDOM': true
            }
        ],
        'jsx-a11y/aria-unsupported-elements': 'warn',
        'jsx-a11y/heading-has-content': 'warn',
        'jsx-a11y/iframe-has-title': 'warn',
        'jsx-a11y/img-redundant-alt': 'warn',
        'jsx-a11y/no-access-key': 'warn',
        'jsx-a11y/no-distracting-elements': 'warn',
        'jsx-a11y/no-redundant-roles': 'warn',
        'jsx-a11y/role-has-required-aria-props': 'warn',
        'jsx-a11y/role-supports-aria-props': 'warn',
        'jsx-a11y/scope': 'warn',
        'new-parens': 'warn',
        'no-array-constructor': 'warn',
        'no-caller': 'warn',
        'no-cond-assign': [
            'warn',
            'except-parens'
        ],
        'no-console': 'off',
        'no-const-assign': 'warn',
        'no-control-regex': 'warn',
        'no-delete-var': 'warn',
        'no-dupe-args': 'warn',
        'no-dupe-class-members': 'warn',
        'no-dupe-keys': 'warn',
        'no-duplicate-case': 'warn',
        'no-empty-character-class': 'warn',
        'no-empty-pattern': 'warn',
        'no-eval': 'warn',
        'no-ex-assign': 'warn',
        'no-extend-native': 'warn',
        'no-extra-bind': 'warn',
        'no-extra-label': 'warn',
        'no-fallthrough': 'warn',
        'no-func-assign': 'warn',
        'no-implied-eval': 'warn',
        'no-invalid-regexp': 'warn',
        'no-iterator': 'warn',
        'no-label-var': 'warn',
        'no-labels': [
            'warn',
            {
                'allowLoop': true,
                'allowSwitch': false
            }
        ],
        'no-lone-blocks': 'warn',
        'no-loop-func': 'warn',
        'no-mixed-operators': [
            'warn',
            {
                'groups': [
                    [
                        '&',
                        '|',
                        '^',
                        '~',
                        '<<',
                        '>>',
                        '>>>'
                    ],
                    [
                        '==',
                        '!=',
                        '===',
                        '!==',
                        '>',
                        '>=',
                        '<',
                        '<='
                    ],
                    [
                        '&&',
                        '||'
                    ],
                    [
                        'in',
                        'instanceof'
                    ]
                ],
                'allowSamePrecedence': false
            }
        ],
        'no-multi-str': 'warn',
        'no-native-reassign': 'warn',
        'no-negated-in-lhs': 'warn',
        'no-new-func': 'warn',
        'no-new-object': 'warn',
        'no-new-symbol': 'warn',
        'no-new-wrappers': 'warn',
        'no-obj-calls': 'warn',
        'no-octal': 'warn',
        'no-octal-escape': 'warn',
        'no-redeclare': [
            'warn',
            {
                'builtinGlobals': false
            }
        ],
        'no-regex-spaces': 'warn',
        'no-restricted-globals': [
            'error',
            'addEventListener',
            'blur',
            'close',
            'closed',
            'confirm',
            'defaultStatus',
            'defaultstatus',
            'event',
            'external',
            'find',
            'focus',
            'frameElement',
            'frames',
            'history',
            'innerHeight',
            'innerWidth',
            'length',
            'location',
            'locationbar',
            'menubar',
            'moveBy',
            'moveTo',
            'name',
            'onblur',
            'onerror',
            'onfocus',
            'onload',
            'onresize',
            'onunload',
            'open',
            'opener',
            'opera',
            'outerHeight',
            'outerWidth',
            'pageXOffset',
            'pageYOffset',
            'parent',
            'print',
            'removeEventListener',
            'resizeBy',
            'resizeTo',
            'screen',
            'screenLeft',
            'screenTop',
            'screenX',
            'screenY',
            'scroll',
            'scrollbars',
            'scrollBy',
            'scrollTo',
            'scrollX',
            'scrollY',
            'self',
            'status',
            'statusbar',
            'stop',
            'toolbar',
            'top'
        ],
        'no-restricted-properties': [
            'error',
            {
                'object': 'require',
                'property': 'ensure',
                'message': 'Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting'
            },
            {
                'object': 'System',
                'property': 'import',
                'message': 'Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting'
            }
        ],
        'no-restricted-syntax': [
            'warn',
            'WithStatement'
        ],
        'no-script-url': 'warn',
        'no-self-assign': 'warn',
        'no-self-compare': 'warn',
        'no-sequences': 'warn',
        'no-shadow-restricted-names': 'warn',
        'no-sparse-arrays': 'warn',
        'no-template-curly-in-string': 'warn',
        'no-this-before-super': 'warn',
        'no-throw-literal': 'warn',
        'no-undef': 'error',
        'no-unreachable': 'warn',
        'no-unused-expressions': [
            'error',
            {
                'allowShortCircuit': true,
                'allowTernary': true,
                'allowTaggedTemplates': true
            }
        ],
        'no-unused-labels': 'warn',
        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

        '@typescript-eslint/no-use-before-define': [
            'warn',
            {
                'functions': false,
                'classes': false,
                'variables': false
            }
        ],
        'no-useless-computed-key': 'warn',
        'no-useless-concat': 'warn',
        'no-useless-constructor': 'warn',
        'no-useless-escape': 'warn',
        'no-useless-rename': [
            'warn',
            {
                'ignoreDestructuring': false,
                'ignoreImport': false,
                'ignoreExport': false
            }
        ],
        'no-whitespace-before-property': 'warn',
        'no-with': 'warn',
        'prefer-const': [
            'error',
            {
                'destructuring': 'all'
            }
        ],
        'react-hooks/exhaustive-deps': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'react/forbid-foreign-prop-types': [
            'warn',
            {
                'allowInPropTypes': true
            }
        ],
        'react/jsx-closing-tag-location': 'warn',
        'react/jsx-curly-spacing': [
            'warn',
            {
                'when': 'never',
                'children': true
            }
        ],
        'react/no-did-update-set-state': 'warn',
        'react/no-access-state-in-setstate': 'warn',
        'react/jsx-equals-spacing': ['error', 'never'],
        'react/jsx-no-comment-textnodes': 'warn',
        'react/jsx-no-duplicate-props': 'warn',
        'react/jsx-no-target-blank': 'warn',
        'react/jsx-no-undef': 'error',
        'react/jsx-pascal-case': [
            'warn',
            {
                'allowAllCaps': true,
                'ignore': []
            }
        ],
        'react/jsx-tag-spacing': [
            'warn',
            {
                'closingSlash': 'never',
                'beforeSelfClosing': 'always',
                'afterOpening': 'never',
                'beforeClosing': 'never'
            }
        ],
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-vars': 'warn',
        'react/jsx-wrap-multilines': [
            'error', {
                'declaration': 'parens',
                'assignment': 'parens',
                'return': 'parens',
                'arrow': 'parens',
                'condition': 'parens',
                'logical': 'parens',
                'prop': 'parens'
            }],
        'react/no-danger-with-children': 'warn',
        'react/no-direct-mutation-state': 'warn',
        'react/no-is-mounted': 'warn',
        'react/no-typos': 'error',
        'react/require-render-return': 'error',
        'react/self-closing-comp': [
            'error',
            {
                'component': true
            }
        ],
        'react/style-prop-object': 'warn',
        'require-yield': 'warn',
        'rest-spread-spacing': [
            'warn',
            'never'
        ],
        'strict': [
            'warn',
            'never'
        ],
        'unicode-bom': [
            'warn',
            'never'
        ],
        'use-isnan': 'warn',
        'valid-typeof': 'warn',
    },
    'settings': {
        'react': {
            'version': 'detect'
        }
    }
}
