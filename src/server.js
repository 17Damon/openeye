/**
 * Created by zhubg on 2017/4/14.
 */

'use strict';

import express from 'express';
import cors from 'cors';
import bodyParser from'body-parser';
import {graphqlExpress} from 'graphql-server-express';
import {schema} from'./schema/schema';
const app = express();

import path from 'path';
app.use('/manager', express.static(path.join(__dirname, './manager')));
// app.use('/manager',express.static(path.join(__dirname, '../admin')));

const corsOptions = {
    origin: function (origin, callback) {
        var originIsWhitelisted = true;
        callback(originIsWhitelisted ? null : 'Bad Request', originIsWhitelisted);
    },
    credentials: true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};


//test
import fetch from 'node-fetch';

app.get('/tokentest', function (req, res, next) {
    fetch('http://localhost:4000/graphql', {
        method: 'POST',
        body: JSON.stringify(
            {
                "query": `query {
                              getToken(id:"1234") {
                                  code
                                  type
                                  content
                              }
                            }`
            }
        ),
        headers: {'Content-Type': 'application/json'}
    })
        .then(function (res) {
            return res.json();
        }).then(function (json) {
        console.log(json);
        res.send(json);
    });
});
//vedioList?offset=1&count=2&token="648d4007ca17944139946d96dcd016056148a19c89007b88db3a83a396aa"
app.get('/vedioList', function (req, res, next) {
    console.log(req.query.offset);
    console.log(req.query.count);
    var offset = req.query.offset;
    var count = req.query.count;
    var token = req.query.token;
    console.log(token==="648d4007ca17944139946d96dcd016056148a19c89007b88db3a83a396aa");
    console.log(typeof token);
    if(token==="648d4007ca17944139946d96dcd016056148a19c89007b88db3a83a396aa"){
        fetch('http://localhost:4000/graphql', {
            method: 'POST',
            body: JSON.stringify(
                {
                    "query": `query {
                              getVedioList(offset: ${offset},count: ${count},token:"${token}" ) {
                                  code
                                  type
                                  content
                              }
                            }`
                }
            ),
            headers: {'Content-Type': 'application/json'}
        })
            .then(function (res) {
                return res.json();
            }).then(function (json) {
            console.log(json);
            res.send(json);
        });
    }else {
        res.send("your token is illegal");
    }

});

app.get('/test1', function (req, res, next) {
    var testObj = {
        "hasMore": true,
        "data": [{
            "src": "http://1254328256.vod2.myqcloud.com/2cb1060dvodtransgzp1254328256/37387cbe9031868223270218218/v.f20.mp4",
            "title": "世界可以停转，唯有美食不能去辜负",
            "content": "花花世界再精彩，面对美食，都会自动被归入视觉盲区。因为吃才是满血复活的唯一法定啊~"
        }, {
            "src": "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
            "picScr": "",
            "title": "浑身都是戏：喵星人的五十度",
            "content": "每个截图都是表情包，戏精喵星人又回来了！可看到最后为什么眼睛里流下了奇怪的液体......"
        }, {
            "src": "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
            "picScr": "",
            "title": "你发现没？几乎所有的卡通人物都戴着手套",
            "content": "我们采访了纽约大学动画教授John Canemeaker,听听他对这个奇怪问题的专业意见。"
        }, {
            "src": "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
            "picScr": "",
            "title": "存在硬盘里的东西，真的是你的回忆吗？",
            "content": "回忆是否可以被删除？手机里存着的究竟是代码还是过去？这支创意短片由Patrick Jean 同艺术家Emmit Fenn 合作完成。片中用黑白像素和 Glitch art （故障艺术） 描绘了我们所处的信息世界，而隐藏在短片背后的则是一种自潮与反思 。"
        }, {
            "src": "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
            "picScr": "",
            "title": "奇怪老夫妻的秘密：爱情雷区",
            "content": "五十年的婚姻，五十年的爱与感动，还封存五十言的谎言。沃特和妻子走进了藏有地雷和浪漫约会地，却听到彼此深藏已久的秘密......这只短片曾获得2016年圣地亚哥国际电影节观众选择奖，不得不说这世界观众口味很特别啊~"
        }, {
            "src": "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
            "picScr": "",
            "title": "秋天没有雪，然而可以滑落叶啊！",
            "content": "真正热爱滑雪的人可等不到冬天！虽说这么无，无论单板双板都废了，但比起中规中矩的骑着山地车下来，你还会想这么尝试一次--有地心引力，就可以滑一切！"
        }]
    };
    res.send(JSON.stringify(testObj));
});

app.use('/graphql', cors(corsOptions), bodyParser.json(), graphqlExpress({schema: schema}));

app.listen(4000, () => {
    console.log('Running a GraphQL API server at localhost:4000/graphql');
});