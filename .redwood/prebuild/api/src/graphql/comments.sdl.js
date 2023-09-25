import gql from "graphql-tag";
export const schema = gql`
  type Comment {
    id: Int!
    name: String!
    body: String!
    post: Post!
    postId: Int!
    createdAt: DateTime!
  }

  type Query {
    comments(postId: Int!): [Comment!]! @skipAuth
  }

  input CreateCommentInput {
    name: String!
    body: String!
    postId: Int!
  }

  input UpdateCommentInput {
    name: String
    body: String
    postId: Int
  }

  type Mutation {
    createComment(input: CreateCommentInput!): Comment! @skipAuth
    deleteComment(id: Int!): Comment! @requireAuth(roles: "moderator")
  }
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJzY2hlbWEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvY29tbWVudHMuc2RsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzY2hlbWEgPSBncWxgXG4gIHR5cGUgQ29tbWVudCB7XG4gICAgaWQ6IEludCFcbiAgICBuYW1lOiBTdHJpbmchXG4gICAgYm9keTogU3RyaW5nIVxuICAgIHBvc3Q6IFBvc3QhXG4gICAgcG9zdElkOiBJbnQhXG4gICAgY3JlYXRlZEF0OiBEYXRlVGltZSFcbiAgfVxuXG4gIHR5cGUgUXVlcnkge1xuICAgIGNvbW1lbnRzKHBvc3RJZDogSW50ISk6IFtDb21tZW50IV0hIEBza2lwQXV0aFxuICB9XG5cbiAgaW5wdXQgQ3JlYXRlQ29tbWVudElucHV0IHtcbiAgICBuYW1lOiBTdHJpbmchXG4gICAgYm9keTogU3RyaW5nIVxuICAgIHBvc3RJZDogSW50IVxuICB9XG5cbiAgaW5wdXQgVXBkYXRlQ29tbWVudElucHV0IHtcbiAgICBuYW1lOiBTdHJpbmdcbiAgICBib2R5OiBTdHJpbmdcbiAgICBwb3N0SWQ6IEludFxuICB9XG5cbiAgdHlwZSBNdXRhdGlvbiB7XG4gICAgY3JlYXRlQ29tbWVudChpbnB1dDogQ3JlYXRlQ29tbWVudElucHV0ISk6IENvbW1lbnQhIEBza2lwQXV0aFxuICAgIGRlbGV0ZUNvbW1lbnQoaWQ6IEludCEpOiBDb21tZW50ISBAcmVxdWlyZUF1dGgocm9sZXM6IFwibW9kZXJhdG9yXCIpXG4gIH1cbmAiXSwibWFwcGluZ3MiOiJPQUFzQkEsR0FBRztBQUF6QixPQUFPLE1BQU1DLE1BQU0sR0FBR0QsR0FBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyJ9