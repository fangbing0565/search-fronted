// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 8,
        sourceType: 'module',
        //想使用的额外的语言特性:
        ecmaFeatures: {
            parser: 'babel-eslint',
            // 允许在全局作用域下使用 return 语句
            globalReturn: true,
            // impliedStric 严格模式
            impliedStrict: true,
            // 启用 JSX
            jsx: true,
            // experimentalObjectRestSpread: true,
            modules: true
        }
    },
    globals: {
        $: true,
        jQuery: true,
        fabric: true,
        editor: true,
        pubsub: true,
        SOP: true
    },
    env: {
        browser: true,
        node: true,
        commonjs: true,
        amd: true,
        es6: true
    },
    // required to lint *.js files
    plugins: ['html', 'prettier'],
    //  ,
    extends: [
        'standard',
        'standard-jsx',
        'prettier',
        'prettier/flowtype',
        'prettier/react',
        'prettier/standard'
        // "plugin:prettier/recommended"
    ],
    rules: {
        // 要求或禁止使用分号而不是 ASI（这个才是控制行尾部分号的，）
        semi: [2, 'never'],
        // 强制使用一致的反勾号、双引号或单引号
        quotes: [2, 'single', 'avoid-escape'],
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
        'prefer-promise-reject-errors': [0],
        camelcase: [0],
        'react/prop-types': [0],
        'react/react-in-jsx-scope': [0],
        'react/no-string-refs': [0],
        'react/display-name': [0],
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                printWidth: 120,
                tabWidth: 4,
                semi: false,
                trailingComma: 'none',
                arrowParens: 'avoid',
                bracketSpacing: true,
                bracesSpacing: true,
                jsxBracketSameLine: true
                // insertPragma: true,
                // requirePragma: false
            }
        ]
    }
}
