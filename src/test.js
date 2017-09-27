/**
 * Created by zhubg on 2017/5/13.
 */

// import moment from 'moment';


// function getPosts() {
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             resolve(new Date());
//         } , 3000);
//     });
// }
//
// async function printPostsToConsole() {
//     for (let i = 0 ;i<20;i++){
//         const date = await getPosts();
//         console.log(date);
//     }
// }
//
// printPostsToConsole();
class Message {
    constructor(type, code, content) {
        this.type = type;
        this.code = code;
        this.content = content;
    }
}


async function test() {
    console.log(new Message("error", "748", "your token is illegal,fuck you mum!"));
}


var offset = 0;
var count = 3;
var token = "648d4007ca17944139946d96dcd016056148a19c89007b88db3a83a396aa";
test.call(null, null, {offset: offset, count: count, token: token});


console.log(new Message("error", "748", "your token is illegal,fuck you mum!"));