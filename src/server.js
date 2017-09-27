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

// app.get('/tokentest', function (req, res, next) {
//     fetch('http://localhost:4000/graphql', {
//         method: 'POST',
//         body: JSON.stringify(
//             {
//                 "query": `query {
//                               getToken(id:"1234") {
//                                   code
//                                   type
//                                   content
//                               }
//                             }`
//             }
//         ),
//         headers: {'Content-Type': 'application/json'}
//     })
//         .then(function (res) {
//             return res.json();
//         }).then(function (json) {
//         console.log(json);
//         res.send(json);
//     });
// });

//vedioList?offset=0&count=2&token=648d4007ca17944139946d96dcd016056148a19c89007b88db3a83a396aa
import {getVedioList} from './schema/resolvers/vedio/getVedioList';
app.get('/vedioList', function (req, res, next) {
    console.log(req.query.offset);
    console.log(req.query.count);
    var offset = req.query.offset;
    var count = req.query.count;
    var token = req.query.token;
    console.log(token==="648d4007ca17944139946d96dcd016056148a19c89007b88db3a83a396aa");
    console.log(typeof token);
    if(token==="648d4007ca17944139946d96dcd016056148a19c89007b88db3a83a396aa"){
        //直接调用resolves
        getVedioList.call(null,null,{offset:parseInt(offset, 10),count:parseInt(count, 10),token:token}).then(function (data){
            res.send({data:{getVedioList:data}});
        }).catch(err=>{
            console.log(err);
            res.send("getVedioList ERR");
        });
        //蠢请求
        // fetch('http://localhost:4000/graphql', {
        //     method: 'POST',
        //     body: JSON.stringify(
        //         {
        //             "query": `query {
        //                       getVedioList(offset: ${offset},count: ${count},token:"${token}" ) {
        //                           code
        //                           type
        //                           content
        //                       }
        //                     }`
        //         }
        //     ),
        //     headers: {'Content-Type': 'application/json'}
        // })
        //     .then(function (res) {
        //         return res.json();
        //     }).then(function (json) {
        //     console.log(json);
        //     res.send(json);
        // });
    }else {
        res.send("your token is illegal");
    }

});

app.use('/graphql', cors(corsOptions), bodyParser.json(), graphqlExpress({schema: schema}));

app.listen(4000, () => {
    console.log('Running a GraphQL API server at localhost:4000/graphql');
});