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

console.log(JSON.stringify(
    {
        "query": `query {
                              getVedioList(offset: 1,count: 2,token: "648d4007ca17944139946d96dcd016056148a19c89007b88db3a83a396aa") {
                                  code
                                  type
                                  content
                              }
                            }`
    }))