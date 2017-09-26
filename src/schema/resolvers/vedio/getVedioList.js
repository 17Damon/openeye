/**
 * Created by zhubg on 2017/9/26.
 */

'use strict';

import {VedioList, Message, PageInfo} from '../../objects';
import {baseDao} from '../../../dao/baseDao';


export async function getVedioList() {
    try {
        let params = {};
        params.offset = arguments[1].offset;
        params.count = arguments[1].count;
        //访问数据库Dao
        let obj = await baseDao('vedioDao', 'getVedioListByOffsetAndCount', params);
        let totalCount = obj[0].totalCount;
        let vedioList = obj[0].vedioList;
        let hasNextPage = (arguments[1].offset + arguments[1].count) < obj[0].totalCount ? true : false;
        let endCursor = hasNextPage?arguments[1].offset + arguments[1].count:obj[0].totalCount;
        let pageInfo = new PageInfo(endCursor, hasNextPage);
        let vedioListTemp = new VedioList(totalCount, vedioList, pageInfo);
        let type = "VedioList";
        let code = "600001";
        let content = JSON.stringify(vedioListTemp);
        return new Message(type, code, content);
    }
    catch (err) {
        console.log(err);
        return new Message("error", "400001", err);
    }
}