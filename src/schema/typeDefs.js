/**
 * Created by zhubg on 2017/4/17.
 */

'use strict';

export const typeDefs = `

#分页消息
type PageInfo {
    endCursor: Int!
    hasNextPage: Boolean!
}

#Message
type Message {
    type: String!
    code: String!
    content: String!
}

#输入类型关键字input

type Query {
    getToken(id:ID!): Message!
    getVedioList(offset: Int!,count: Int!): Message!
}

schema {
  query: Query
}

`;