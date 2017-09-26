/**
 * Created by zhubg on 2017/4/14.
 */

'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _graphqlServerExpress = require('graphql-server-express');

var _schema = require('./schema/schema');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/manager', _express2.default.static(_path2.default.join(__dirname, './manager')));
// app.use('/manager',express.static(path.join(__dirname, '../admin')));

var corsOptions = {
    origin: function origin(_origin, callback) {
        var originIsWhitelisted = true;
        callback(originIsWhitelisted ? null : 'Bad Request', originIsWhitelisted);
    },
    credentials: true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

//test


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

//vedioList?offset=1&count=2&token="648d4007ca17944139946d96dcd016056148a19c89007b88db3a83a396aa"
app.get('/vedioList', function (req, res, next) {
    console.log(req.query.offset);
    console.log(req.query.count);
    var offset = req.query.offset;
    var count = req.query.count;
    var token = req.query.token;
    console.log(token === "648d4007ca17944139946d96dcd016056148a19c89007b88db3a83a396aa");
    console.log(typeof token === 'undefined' ? 'undefined' : _typeof(token));
    if (token === "648d4007ca17944139946d96dcd016056148a19c89007b88db3a83a396aa") {
        (0, _nodeFetch2.default)('http://localhost:4000/graphql', {
            method: 'POST',
            body: JSON.stringify({
                "query": 'query {\n                              getVedioList(offset: ' + offset + ',count: ' + count + ',token:"' + token + '" ) {\n                                  code\n                                  type\n                                  content\n                              }\n                            }'
            }),
            headers: { 'Content-Type': 'application/json' }
        }).then(function (res) {
            return res.json();
        }).then(function (json) {
            console.log(json);
            res.send(json);
        });
    } else {
        res.send("your token is illegal");
    }
});

app.use('/graphql', (0, _cors2.default)(corsOptions), _bodyParser2.default.json(), (0, _graphqlServerExpress.graphqlExpress)({ schema: _schema.schema }));

app.listen(4000, function () {
    console.log('Running a GraphQL API server at localhost:4000/graphql');
});