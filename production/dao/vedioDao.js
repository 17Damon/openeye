/**
 * Created by zhubg on 2017/9/26.
 */

'use strict';

//去除内置属性字段

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.vedioDao = vedioDao;

var _database = require('../util/database');

var tokill = ['_rev', '_id', '_key'];

//连接DB


//userDao
function vedioDao(module, method, params) {
    //code

    //promise
    console.log('vedioDao');
    return dao[method](module, method, params);
}

//功能Dao--start--
var dao = {};

//getLotteryRecordListByOffsetAndCount
dao.getVedioListByOffsetAndCount = function (module, method, params) {
    //some code
    console.log('vedioDao-getVedioListByOffsetAndCount');
    if (params.offset !== undefined && params.count !== undefined) {
        var bindVars = {};
        bindVars.tokill = tokill;
        bindVars.offset = params.offset;
        bindVars.count = params.count;
        var AQL = ' \n                    LET vedioList = (For v in vedio\n                                        SORT v.upload_date DESC\n                                        LIMIT @offset,@count\n                                      return UNSET(v,@tokill)\n                                      )\n                    return {totalCount:LENGTH(vedio),vedioList:vedioList}\n                  ';
        //promise
        return _database.db.query(AQL, bindVars).then(function (cursor) {
            return cursor.all();
        });
    } else {
        throw 'params.offset or params.count Undefined!Check it!';
    }
};

//功能Dao---end---