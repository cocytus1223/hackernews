const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient; //得到数据库客户端实例  
const ObjectID = mongodb.ObjectID; // 存储 mongodb 中 创建OBjectID构造函数 
let str = 'mongodb://127.0.0.1:27017';

module.exports = { //封装对数据进行增删改查的方法 
    getAllNews(callback) {
        condb(news => {
            news.find().toArray((err, data) => {
                if (err) {
                    return console.log(err);
                }
                callback && callback(data);
            })
        })
    },
    getNewsById(id, callback) {
        id = new ObjectID(id); //将id转成ObjectID     

        condb(news => {
            news.find({
                _id: id
            }).toArray((err, data) => {
                if (err) {
                    return console.log(err);
                }
                //将查到的数据交给回调函数输出 
                callback && callback(data);
            })
        })
    },
    insert(info, callback) { //插入数据 
        condb(news => {
            news.insert(info);
            callback && callback();
        });
    }
}

//封装连接数据库方法 
function condb(callback) {
    mongoClient.connect(str, {
        useNewUrlParser: true
    }, (err, client) => {
        if (err) {
            return console.log('数据库连接失败', err);
        }
        //选择要操作集合 
        let news = client.db('hackerNews').collection('news');
        //操作数据  
        callback && callback(news);
        // 关闭数据库
        client.close();
    })
}