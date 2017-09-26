/**
 * Created by zhubg on 2017/4/17.
 */

'use strict';

//获取token测试
import {getToken} from './getToken';
import {getVedioList} from './vedio/getVedioList';

export const resolvers = {
    Query: {
        getToken,
        getVedioList
        }
};