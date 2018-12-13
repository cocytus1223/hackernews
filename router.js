// 路由模块  绑定路由的 
const express = require('express');
const handler = require('./handler');
const router = express.Router(); //得到一个路由的实例  

router.get('/', (req, res) => { //首页 
  handler.showIndex(req, res);
});

router.get('/index', (req, res) => { //首页
  handler.showIndex(req, res);
})

router.get('/details', (req, res) => { //详情页
  handler.showDetails(req, res);
});

router.get('/submit', (req, res) => { //提交页面 
  handler.showSubmit(req, res);
})

router.post('/add', (req, res) => { //添加 
  handler.postAdd(req, res);
})

//设置导出项 
module.exports = router;