/**
 * Created by zhubg on 2017/4/17.
 */

'use strict';

//获取token测试

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.resolvers = undefined;

var _getToken = require('./getToken');

var _getVedioList = require('./vedio/getVedioList');

var resolvers = exports.resolvers = {
    Query: {
        getToken: _getToken.getToken,
        getVedioList: _getVedioList.getVedioList
    }
};