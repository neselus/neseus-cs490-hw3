import gql from "graphql-tag";
export const schema = gql`
  type Query {
    adminPosts: [Post!]! @requireAuth(roles: ["admin"])
    adminPost(id: Int!): Post @requireAuth(roles: ["admin"])
  }

  input CreatePostInput {
    title: String!
    body: String!
  }

  input UpdatePostInput {
    title: String
    body: String
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth(roles: ["admin"])
    updatePost(id: Int!, input: UpdatePostInput!): Post! @requireAuth(roles: ["admin"])
    deletePost(id: Int!): Post! @requireAuth(roles: ["admin"])
  }
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJzY2hlbWEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvYWRtaW5Qb3N0cy5zZGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNjaGVtYSA9IGdxbGBcbiAgdHlwZSBRdWVyeSB7XG4gICAgYWRtaW5Qb3N0czogW1Bvc3QhXSEgQHJlcXVpcmVBdXRoKHJvbGVzOiBbXCJhZG1pblwiXSlcbiAgICBhZG1pblBvc3QoaWQ6IEludCEpOiBQb3N0IEByZXF1aXJlQXV0aChyb2xlczogW1wiYWRtaW5cIl0pXG4gIH1cblxuICBpbnB1dCBDcmVhdGVQb3N0SW5wdXQge1xuICAgIHRpdGxlOiBTdHJpbmchXG4gICAgYm9keTogU3RyaW5nIVxuICB9XG5cbiAgaW5wdXQgVXBkYXRlUG9zdElucHV0IHtcbiAgICB0aXRsZTogU3RyaW5nXG4gICAgYm9keTogU3RyaW5nXG4gIH1cblxuICB0eXBlIE11dGF0aW9uIHtcbiAgICBjcmVhdGVQb3N0KGlucHV0OiBDcmVhdGVQb3N0SW5wdXQhKTogUG9zdCEgQHJlcXVpcmVBdXRoKHJvbGVzOiBbXCJhZG1pblwiXSlcbiAgICB1cGRhdGVQb3N0KGlkOiBJbnQhLCBpbnB1dDogVXBkYXRlUG9zdElucHV0ISk6IFBvc3QhIEByZXF1aXJlQXV0aChyb2xlczogW1wiYWRtaW5cIl0pXG4gICAgZGVsZXRlUG9zdChpZDogSW50ISk6IFBvc3QhIEByZXF1aXJlQXV0aChyb2xlczogW1wiYWRtaW5cIl0pXG4gIH1cbmAiXSwibWFwcGluZ3MiOiJPQUFzQkEsR0FBRztBQUF6QixPQUFPLE1BQU1DLE1BQU0sR0FBR0QsR0FBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyJ9