import gql from "graphql-tag";
export const schema = gql`
  type Post {
    id: Int!
    title: String!
    body: String!
    createdAt: DateTime!
    user: User!
  }

  type Query {
    posts: [Post!]! @skipAuth
    post(id: Int!): Post @skipAuth
  }
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJzY2hlbWEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvcG9zdHMuc2RsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzY2hlbWEgPSBncWxgXG4gIHR5cGUgUG9zdCB7XG4gICAgaWQ6IEludCFcbiAgICB0aXRsZTogU3RyaW5nIVxuICAgIGJvZHk6IFN0cmluZyFcbiAgICBjcmVhdGVkQXQ6IERhdGVUaW1lIVxuICAgIHVzZXI6IFVzZXIhXG4gIH1cblxuICB0eXBlIFF1ZXJ5IHtcbiAgICBwb3N0czogW1Bvc3QhXSEgQHNraXBBdXRoXG4gICAgcG9zdChpZDogSW50ISk6IFBvc3QgQHNraXBBdXRoXG4gIH1cbmAiXSwibWFwcGluZ3MiOiJPQUFzQkEsR0FBRztBQUF6QixPQUFPLE1BQU1DLE1BQU0sR0FBR0QsR0FBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIn0=