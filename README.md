## jQuery_shop

### webapck

#### plugin
- html-webpack-plugin => 抽离 html
- mini-css-extract-plugin => 抽离 css
  - &-loader 可以代替 style-loader
- webpack.ProvidePlugin => 注入全局变量
- webpack.BannerPlugin => 版权

#### loader
- css-loader => 解析 css里面的 import()
- file-loader => 解析 js图片
- html-withimg-loader => 解析 html 图片
- url-loader => 解析图片成 base64 格式
- postcss-loader + autoprefixer => 添加浏览器前缀
  - postcss.config.js 配置文件中需要引入 autoprefixer

### resolve 
- 可以配置 alias: {@: '123/123/123'}

### splitChunks
- 分割代码块({}, 多页)
  - cacheGroups: {} => 缓存组
    - common: {} => 公共模块
      - chunks
        - initial => 一开始
      - minSize
      - minChunks
    - vendor: {} => 第三方
      - priority: 1 => 权重
      - test: /node_modules/ => 正则
      - ...