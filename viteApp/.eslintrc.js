module.exports = {
  root: true,
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin', 'react', 'react-hooks'],
  env: {
    browser: true,
    node: false,
    es6: true
  },
  globals: {
    process: true,
    $message: true,
    $useStore: true,
    $routerEvent: true,
    __dirname: true,
    module: true,
    require: true
  },
  settings: {
    // 自动发现React的版本，从而进行规范react代码
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  parserOptions: {
    // 指定ESLint可以解析JSX语法
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error']
      }
    }
  ],
  rules: {
    // 2 程序错误，1 程序警告，0 关闭规则
    'prettier/prettier': 2, // 呈现错误提示
    'for-direction': 2, // for 循环不允许设置无法到达的停止条件
    'no-compare-neg-zero': 2, // 禁止与 -0 进行比较
    'no-cond-assign': 2, // 禁止在条件语句中进行赋值
    'no-console': 0, // 不能再程序中使用 console
    'no-constant-condition': 2, // 禁止在条件判断时直接使用常量
    'no-debugger': 2, // 禁止在代码中使用 debugger
    'no-dupe-args': 2, // function 定义中禁止出现重复的参数
    'no-dupe-keys': 2, // 对象中禁止出现重复的键名
    'no-duplicate-case': 2, // 禁止重复的 case 标签
    'no-empty': 2, // 禁止出现空块语句
    'no-ex-assign': 2, // 禁止对 catch 中的异常进行重新赋值
    'no-extra-boolean-cast': 2, // 禁止不必要的 boolean 转换
    'no-extra-parens': 0, // 禁止出现冗余的括号
    'no-extra-semi': 2, // 禁止出现不必要的 ;
    'no-func-assign': 2, // 禁止对 function 进行重复赋值
    'no-inner-declarations': 2, // 禁止在嵌套语句中声明 function
    'no-irregular-whitespace': 2, // 禁止不规则的空白符
    'no-obj-calls': 2, // 禁止将全局对象当做函数进行调用
    'no-prototype-builtins': 0, // 可以使用原型链中的方法
    'no-regex-spaces': 0, // 允许原型链中出现多个空格
    'no-sparse-arrays': 0, // 禁止使用没有值的数组项
    'no-template-curly-in-string': 2, // 禁止在常规字符串中使用占位符语法
    'no-unreachable': 2, // 禁止在不可到达语句后出现代码
    'no-unsafe-finally': 2, // 禁止在 finally 语句块中返回数据
    'require-atomic-updates': 0, // 禁止在 await 和 yield 中使用竞态条件的赋值
    'use-isnan': 2, // 要求使用 isNaN() 检查 NaN
    'valid-typeof': 2, // 要求 typeof 与有效的字符串进行比较
    'accessor-pairs': 0, // getter/setter 不用成对出现
    'array-callback-return': 2, // 要求有返回值的数组方法必须要有 return 语句
    'class-methods-use-this': 0, // 不强制使用 this
    curly: 2, // 要求必须使用 {}
    'default-case': 2, // switch 必须有 default 分支
    'dot-location': 0, // 强制 . 在换行符之后
    eqeqeq: 2, // 强制使用 === 和 !==
    'guard-for-in': 1, // 使用 for-in 要注意原型上的属性
    'no-caller': 2, // 禁止使用 caller 或 callee
    'no-case-declarations': 0, // 允许在 case 和 default 中出现词法声明
    'no-useless-escape': 0, // 允许不必要的转义
    'no-else-return': 0, // 可以再 else 前出现 return
    'no-empty-function': 0, // 禁止出现空函数
    'no-empty-pattern': 0, // 可以使用空解构模式
    'no-eq-null': 0, // 允许与 null 进行比对
    'no-eval': 2, // 禁止使用 eval
    'no-extend-native': 0, // 可以扩展原生对象
    'no-extra-bind': 2, // 禁止不必要的函数绑定
    'no-extra-label': 2, // 禁止不必要的标签
    'no-fallthrough': 2, // 禁止语句落空
    'no-floating-decimal': 2, // 浮点小数前或后必须有值
    'no-global-assign': 2, // 禁止对原生对象和只读的全局对象进行赋值
    'no-implicit-coercion': 0, // 可以使用较短的符号进行类型转换
    'no-implicit-globals': 0, // 可以使用全局变量和函数声明
    'no-lone-blocks': 2, // 禁止不必要的嵌套块
    'no-magic-numbers': 0, // 允许使用没有明确含义的数字
    'no-multi-spaces': 2, // 禁止出现多余的空格
    'no-multi-str': 2, // 禁止出现多行字符串
    'no-new': 2, // 禁止乱用 new 以避免产生副作用
    'no-new-func': 2, // 禁用 Function 构造函数
    'no-octal': 2, // 禁止使用八进制字面量
    'no-param-reassign': 2, // 禁止对函数参数进行再赋值
    'no-proto': 2, // 禁止使用 __proto__
    'no-redeclare': 2, // 禁止重新声明变量
    'no-return-assign': 2, // 禁止在返回语句中赋值
    'no-return-await': 2, // 禁止使用 return await
    'no-script-url': 2, // 禁止直接使用 javascript:void(0)
    'no-self-assign': 2, // 禁止自身赋值
    'no-self-compare': 2, // 禁止自身比较
    'no-sequences': 2, // 不允许使用逗号操作符
    'no-throw-literal': 2, // throw 必须抛出异常
    'no-unmodified-loop-condition': 2, // 禁止使用完全不变的循环条件
    'no-useless-concat': 2, // 禁止没有必要的字符串拼接
    'no-with': 2, // 禁用 with 语句
    'prefer-promise-reject-errors': 0, // 不要求 error 强制为 Promise 拒绝的原因
    'require-await': 2, // 禁止对没有 await 的函数前加 async
    'init-declarations': 0, // 强制声明时必须有初始值
    'no-delete-var': 0, // 允许使用 delete 删除变量
    'no-label-var': 2, // 禁止使用与变量同名的标签
    'no-shadow': 2, // 禁止变量声明覆盖外层作用域的变量
    'no-undef': 2, // 禁用未声明的变量
    'no-undef-init': 1, // 允许初始化为 undefined
    'no-undefined': 2, // 允许使用 undefined 变量
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'none'
      }
    ],
    'no-use-before-define': 2, // 禁止未定义前使用
    'global-require': 0, // 强制模块调用在最顶部
    'no-mixed-requires': 2, // 禁止模块引用和变量声明混用
    'no-new-require': 2, // 不允许 new require
    'no-process-env': 0, // 允许使用 process.env
    'brace-style': [2, '1tbs'], // 大阔号有一个默认空格，默认就为 1tbs
    'array-bracket-newline': [2, 'consistent'], // 要求使用统一的换行符，如果有一个换行就全部换行
    'array-bracket-spacing': [2, 'never'], // 禁止在括号内出现多余空格
    'array-element-newline': [2, 'consistent'], // 要求使用统一的换行符，如果有一个换行就全部换行
    'block-spacing': [2, 'always'], // 代码块前后有空格
    'comma-dangle': 2, // 禁止使用拖尾逗号
    'comma-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ], // 逗号前没有空格，逗号后有空格
    'comma-style': [2, 'last'], // 逗号放在换行前
    'computed-property-spacing': [2, 'never'], // 禁止在计算属性内使用空格
    'eol-last': [2, 'always'], // 强制在文件最后多一行空白行
    'func-call-spacing': [2, 'never'], // 禁止在函数或其他调用前有多余空格
    'lines-around-comment': [
      2,
      {
        beforeBlockComment: false
      }
    ], // 要求多行注释前必须有空行
    'spaced-comment': [2, 'always'], // 注释后必须有空格
    'func-names': [2, 'as-needed'], // 如果无法在ES6环境中自动分配名称，则需要命名的生成器函数,禁止给赋值函数命名,
    'function-paren-newline': [2, 'consistent'], // 如果函数的任一参数有换行，则要求在函数括号内换行。否则禁止换行
    'implicit-arrow-linebreak': [2, 'beside'], // 禁止在箭头函数体之前出现换行
    'keyword-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ], // 强制关键字周围空格的一致性
    'lines-between-class-members': [2, 'always'], // 强制要求 class 类的成员之间有空行
    'max-statements-per-line': [
      2,
      {
        max: 1
      }
    ], // 每行中允许的最大语句数量
    'new-cap': [
      2,
      {
        newIsCap: true,
        capIsNew: false,
        properties: true
      }
    ], // 构造函数首字母大写
    'newline-per-chained-call': [
      2,
      {
        ignoreChainWithDepth: 2
      }
    ], // 链式调用每行的调用个数
    'no-continue': 0, // 可以使用 continue
    'no-inline-comments': 0, // 可以使用内联注释
    'no-lonely-if': 0, // 可以在 else 中继续使用 if
    'no-mixed-operators': 0, // 可以混用操作符
    'o-multi-assign': 0, // 可以连续赋值
    'no-multiple-empty-lines': [
      2,
      {
        max: 1
      }
    ], // 最多允许有一个空行
    'no-nested-ternary': 0, // 允许三元表达式嵌套
    'no-new-object': 2, // 禁止使用 Object 构造函数
    'no-plusplus': 0, // 允许使用一元操作符
    'no-ternary': 0, // 允许使用三元操作符
    'nonblock-statement-body-position': [2, 'beside'], // 禁止单行语句换行
    'one-var-declaration-per-line': [2, 'always'], // 强制变量声明周围换行
    'arrow-parens': [2, 'always'], // 要求箭头函数参数必须有 ()
    'arrow-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ], // 箭头函数的箭头之前和之后必须有空格
    'constructor-super': 2, // 验证构造函数中 super() 的调用
    'no-const-assign': 2, // 不允许修改 const 声明的变量
    'no-dupe-class-members': 2, // 不允许类声明中有重复的名称
    'no-duplicate-imports': 2, // 禁止重复的导入
    'no-this-before-super': 2, // 禁止构造函数调用 super 之前调用 this
    'no-useless-rename': 2, // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
    'no-var': 2, // 禁止使用 var
    'prefer-const': 2, // 如果不改变值，就使用 const
    'prefer-spread': 0, // 允许使用 apply 等方法
    // 以下为 react 专属配置
    'react/boolean-prop-naming': 0, // boolean 类型不需要以 is 或 has 为前缀
    'react/button-has-type': 0, // 按钮不需要明确 type
    'react/default-props-match-prop-types': 0, // 允许组件上无关的默认属性
    'react/destructuring-assignment': 0, // 不强制结构赋值
    'react/display-name': 0, // 组件定义时不需要定义组件名称
    'react/forbid-component-props': 0, // 允许组件使用十分明确的 props 属性
    'react/forbid-dom-props': 0, // 允许在 dom 上使用 props 属性
    'react/no-access-state-in-setstate': 0, // 允许在 setState 中使用 this.state
    'react/no-array-index-key': 0, // 数组允许使用 index 作为序号
    'react/prop-types': 0, // 允许 react 缺少对 props 的验证
    'react/no-find-dom-node': 1, // 允许 findDOMNode（只给个警告），之后版本会删除这个，因为 findDOMNode 已被弃用，但是我们用的 react 版本过低所以忽略该错误
    '@typescript-eslint/explicit-module-boundary-types': 0, // 允许导出函数
    '@typescript-eslint/no-var-requires': 0, // 允许声明式引入
    '@typescript-eslint/no-explicit-any': 0 // 允许使用 Ref
  }
}
