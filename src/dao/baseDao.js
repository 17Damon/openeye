/**
 * Created by zhubg on 2016/4/24.
 */

'use strict';

import {vedioDao} from './vedioDao';

//allDao注册
var dao = {};
dao.vedioDao = vedioDao;


//baseDao
export function baseDao( module, method, params) {

    //promise
    console.log('baseDao');

    //can not find dao
    if(!dao[module]) {
        console.log('baseDao can not find dao['+module+']');
        return Promise.reject(
            'baseDao can not find dao['+module+']'
        );
    }

    return dao[module]( module, method, params);
}
