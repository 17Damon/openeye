/**
 * Created by zhubg on 2016/4/24.
 */

'use strict';

// database connect 应用启动时已经初始化完成

Object.defineProperty(exports, "__esModule", {
  value: true
});
var host = '139.196.80.85';
// const host = '127.0.0.1';
var port = '8529';
var database = 'openeye';
var username = 'openeye';
var password = 'cqmygysdss1987';

var db = exports.db = require('arangojs')({
  url: 'http://' + username + ':' + password + '@' + host + ':' + port,
  databaseName: database
});

console.log('database');