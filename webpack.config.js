const path = require('path');

module.exports = {
    mode:'development',
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, 'dist'), // 현재 폴더의 dist폴더에 생성
        filename: 'build.js'
    }, // 출력
    module: {
        rules: [{ test: /\.txt$/, use: 'raw-loader' }],
    },
    devServer: {
        port: 3000,
        liveReload: true,
        // host 지정
        host: "0.0.0.0",
        allowedHosts: "all",
        open: true,
        client: {
            overlay: true,
            // 웹소켓용 url 지정
            webSocketURL: "ws://0.0.0.0:80/ws",
        },
        compress: true,
    },
  };