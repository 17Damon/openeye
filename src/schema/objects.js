/**
 * Created by zhubg on 2017/4/17.
 */
   
'use strict';

//口令
export class Token {
    constructor(token) {
        this.token = token;
    }
}

//Message
export class Message {
    constructor(code,type,content) {
        this.code = code;
        this.type = type;
        this.content = content;
    }
}

//VedioList
export class VedioList {
    constructor(totalCount,vedioList,pageInfo) {
        this.totalCount = totalCount;
        this.vedioList = vedioList;
        this.pageInfo = pageInfo;
    }
}

//分页信息
export class PageInfo {
    constructor(endCursor,hasNextPage) {
        this.endCursor = endCursor;
        this.hasNextPage = hasNextPage;
    }
}