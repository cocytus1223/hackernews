const path = require('path');
const db = require('./db');


module.exports = {
    showIndex(req, res) { //显示首页     
        db.getAllNews(data => { //获取所有的新闻数据
            res.jsonp(data); 
        });
    },
    showDetails(req, res) { //显示详情页
        // 1-获取当前数据id 
        // 2-根据id 去数据库中查询出对应数据
        // 3-将数据渲染到页面中  
        let id = req.query.id;

        db.getNewsById(id, data => { //给id 查找对应的数据
            data = JSON.stringify(data);
            res.send(data);
        });
    },
    showSubmit(req, res) { //显示提交页
        // 直接读取文件，返回即可
        res.sendFile(path.join(__dirname, 'pages', 'submit.html'));
    },
    postAdd(req, res) { //添加 
        // 1-获取前端表单数据
        let info = req.body;

        db.insert(info, () => { //将数据插入到数据库中 
            res.redirect('/'); //跳转到首页  
        })
    }
}