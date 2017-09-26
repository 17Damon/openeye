/**
 * Created by zhubg on 2016/4/24.
 */

'use strict';

// database connect 应用启动时已经初始化完成
const host = '139.196.80.85';
// const host = '127.0.0.1';
const port = '8529';
const database = 'openeye';
const username = 'openeye';
const password = 'cqmygysdss1987';

export const db = require('arangojs')({
    url: `http://${username}:${password}@${host}:${port}`,
    databaseName: database
});

console.log('database');

