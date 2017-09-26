/**
 * Created by zhubg on 2017/9/26.
 */

'use strict';

//去除内置属性字段
var tokill = ['_rev', '_id', '_key'];

//连接DB
import {db} from '../util/database';

//userDao
export function vedioDao( module, method, params) {
    //code

    //promise
    console.log('vedioDao');
    return dao[method](module, method, params);
}

//功能Dao--start--
let dao = {};

//getLotteryRecordListByOffsetAndCount
dao.getVedioListByOffsetAndCount = function (module, method, params) {
    //some code
    console.log('vedioDao-getVedioListByOffsetAndCount');
    if (params.offset !== undefined && params.count !== undefined) {
        let bindVars = {};
        bindVars.tokill = tokill;
        bindVars.offset = params.offset;
        bindVars.count = params.count;
        var AQL = ` 
                    LET vedioList = (For v in vedio
                                        SORT v.upload_date DESC,v.power_weights DESC
                                        LIMIT @offset,@count
                                      return UNSET(v,@tokill)
                                      )
                    return {totalCount:LENGTH(vedio),vedioList:vedioList}
                  `;
        //promise
        return db.query(AQL, bindVars).then(function (cursor) {
            return cursor.all();
        });
    } else {
        throw 'params.offset or params.count Undefined!Check it!';
    }
};

//功能Dao---end---