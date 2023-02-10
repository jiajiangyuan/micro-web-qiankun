// Generated using webpack-cli https://github.com/webpack/webpack-cli
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const AntdDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin");
const WebpackBar = require("webpackbar");

const { ROOT_PATH } = require("./constant");
const { isDevelopment, isProduction } = require("../env");
const {name} = require("../package.json");

// 本地样式
const getCssLoaders = () => {
  const cssLoaders = [
    // 开发模式使用style-loader，生产模式MiniCssExtractPlugin.loader
    isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
    {
      loader: "css-loader",
      options: {
        modules: {
          auto: true,
          // 模块化类名，防止重复
          localIdentName: "[local]--[hash:base64:5]",
        },
        sourceMap: isDevelopment,
      },
    },
  ];

  // 加css前缀的loader配置
  const postcssLoader = {
    loader: "postcss-loader",
    options: {
      postcssOptions: {
        plugins: [
          isProduction && [
            "postcss-preset-env",
            {
              autoprefixer: {
                grid: true,
              },
            },
          ],
        ],
      },
    },
  };

  // 生产模式时，才需要加css前缀
  isProduction && cssLoaders.push(postcssLoader);

  return cssLoaders;
};

// antd 样式
const getAntdLessLoaders = () => [
  isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
  {
    loader: "css-loader",
    options: {
      sourceMap: isDevelopment,
    },
  },
  {
    loader: "less-loader",
    options: {
      sourceMap: isDevelopment,
      lessOptions: {
        // antd 自定义主题
        javascriptEnabled: true,
      },
    },
  },
];

module.exports = {
  entry: {
    index: path.resolve(ROOT_PATH, "./src/index.tsx"),
  },
  output: {
    publicPath: process.env.NODE_ENV === 'development' ? '/' : '/meta/2/',
    path: path.resolve(ROOT_PATH, "./build"),
    library: `${name}`,
    libraryTarget: 'umd'
  },
  plugins: [
    // html模板
    new HtmlWebpackPlugin({
      template: path.resolve(ROOT_PATH, "./public/index.html"),
      filename: "index.html",
      minify: {
        removeAttributeQuotes: true,
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    // 打包显示进度条
    new WebpackBar({
      // color: "#5fff46", // 默认green，进度条颜色支持HEX
      basic: false, // 默认true，启用一个简单的日志报告器
      profile: false, // 默认false，启用探查器。
    }),
    // webpack打包不会有类型检查，强制ts类型检查
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: path.resolve(ROOT_PATH, "./tsconfig.json"),
      },
    }),
    // 复制不用动态导入的资源
    new CopyWebpackPlugin({
      patterns: [
        {
          context: "public",
          from: "assets/*",
          to: path.resolve(__dirname, "../build"),
          toType: "dir",
          globOptions: {
            dot: true,
            gitignore: true,
            ignore: ["**/index.html"], // **表示任意目录下
          },
        },
      ],
    }),
    // 自动删除上一次打包的产物
    new CleanWebpackPlugin(),
    // 将antd中的moment.js替换为day.js
    new AntdDayjsWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/, // ts\tsx\js
        loader: "babel-loader",
        options: { cacheDirectory: true }, // 缓存公共文件
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          ...getCssLoaders(),
          {
            loader: "less-loader",
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
      {
        test: /\.less$/,
        exclude: /src/,
        use: getAntdLessLoaders(),
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: getCssLoaders(),
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        // 自动选择导出为单独文件还是url形式
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024,
          },
        },
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2?)$/,
        // 分割为单独文件，并导出url
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [
      ".tsx",
      ".ts",
      ".jsx",
      ".js",
      ".less",
      ".css",
      ".jpg",
      ".png",
      ".svg",
      ".json",
    ],
    alias: {
      "@": path.resolve(ROOT_PATH, "./src"),
      "*": path.resolve(""),
    },
  },
  // 缓存
  cache: {
    // 基于文件系统的持久化缓存
    type: "filesystem",
    buildDependencies: {
      // 当配置文件发生变化时，缓存失效
      config: [__filename],
    },
  }
};
