const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');
const app = express();

// 配置模版
app.engine('html', require('express-art-template'));
// 配置模版目录
app.set('views', 'pages');
// 配置静态资源托管
app.use('/assets', express.static('assets'));

//给req.body赋值 
app.use(bodyParser.urlencoded({
  extended: false
}));

//设置路由 处理请求 
app.use(router);

app.listen(9999, () => console.log('http://localhost:9999 服务器已启动'));