module.exports = {
    root : true,
    parser : 'babel-eslint',
    parserOptions : {
        sourceType : 'module'
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends : 'standard',
    // required to lint *.vue files
    plugins : [
        'html'
    ],
    // add your custom rules here
    'rules' : {
        // allow paren-less arrow functions
        'arrow-parens' : 0,
        // allow async-await
        'generator-star-spacing' : 0,
        // allow debugger during development
        'no-debugger' : process.env.NODE_ENV === 'production' ? 2 : 0,
        //不要留超过规定数目的空白行
        "no-multiple-empty-lines": [2, { "max": 2 }],
        // 禁止混用tab和空格
        "no-mixed-spaces-and-tabs" : 2,
        //规定了函数中代码不能够超过多少行
        "max-statements": [2, 60]
    }
}





















































































