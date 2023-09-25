import gql from "graphql-tag";
export const schema = gql`
  type User {
    id: Int!
    name: String
    email: String!
    # we never want to make these publicly available via GraphQL for security!
    # hashedPassword: String!
    # salt: String!
    # resetToken: String
    # resetTokenExpiresAt: DateTime
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    name: String
    email: String!
    # hashedPassword: String!
    # salt: String!
    # resetToken: String
    # resetTokenExpiresAt: DateTime
  }

  input UpdateUserInput {
    name: String
    email: String
    # hashedPassword: String
    # salt: String
    # resetToken: String
    # resetTokenExpiresAt: DateTime
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJzY2hlbWEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvdXNlcnMuc2RsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzY2hlbWEgPSBncWxgXG4gIHR5cGUgVXNlciB7XG4gICAgaWQ6IEludCFcbiAgICBuYW1lOiBTdHJpbmdcbiAgICBlbWFpbDogU3RyaW5nIVxuICAgICMgd2UgbmV2ZXIgd2FudCB0byBtYWtlIHRoZXNlIHB1YmxpY2x5IGF2YWlsYWJsZSB2aWEgR3JhcGhRTCBmb3Igc2VjdXJpdHkhXG4gICAgIyBoYXNoZWRQYXNzd29yZDogU3RyaW5nIVxuICAgICMgc2FsdDogU3RyaW5nIVxuICAgICMgcmVzZXRUb2tlbjogU3RyaW5nXG4gICAgIyByZXNldFRva2VuRXhwaXJlc0F0OiBEYXRlVGltZVxuICB9XG5cbiAgdHlwZSBRdWVyeSB7XG4gICAgdXNlcnM6IFtVc2VyIV0hIEByZXF1aXJlQXV0aFxuICAgIHVzZXIoaWQ6IEludCEpOiBVc2VyIEByZXF1aXJlQXV0aFxuICB9XG5cbiAgaW5wdXQgQ3JlYXRlVXNlcklucHV0IHtcbiAgICBuYW1lOiBTdHJpbmdcbiAgICBlbWFpbDogU3RyaW5nIVxuICAgICMgaGFzaGVkUGFzc3dvcmQ6IFN0cmluZyFcbiAgICAjIHNhbHQ6IFN0cmluZyFcbiAgICAjIHJlc2V0VG9rZW46IFN0cmluZ1xuICAgICMgcmVzZXRUb2tlbkV4cGlyZXNBdDogRGF0ZVRpbWVcbiAgfVxuXG4gIGlucHV0IFVwZGF0ZVVzZXJJbnB1dCB7XG4gICAgbmFtZTogU3RyaW5nXG4gICAgZW1haWw6IFN0cmluZ1xuICAgICMgaGFzaGVkUGFzc3dvcmQ6IFN0cmluZ1xuICAgICMgc2FsdDogU3RyaW5nXG4gICAgIyByZXNldFRva2VuOiBTdHJpbmdcbiAgICAjIHJlc2V0VG9rZW5FeHBpcmVzQXQ6IERhdGVUaW1lXG4gIH1cblxuICB0eXBlIE11dGF0aW9uIHtcbiAgICBjcmVhdGVVc2VyKGlucHV0OiBDcmVhdGVVc2VySW5wdXQhKTogVXNlciEgQHJlcXVpcmVBdXRoXG4gICAgdXBkYXRlVXNlcihpZDogSW50ISwgaW5wdXQ6IFVwZGF0ZVVzZXJJbnB1dCEpOiBVc2VyISBAcmVxdWlyZUF1dGhcbiAgICBkZWxldGVVc2VyKGlkOiBJbnQhKTogVXNlciEgQHJlcXVpcmVBdXRoXG4gIH1cbmBcbiJdLCJtYXBwaW5ncyI6Ik9BQXNCQSxHQUFHO0FBQXpCLE9BQU8sTUFBTUMsTUFBTSxHQUFHRCxHQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMifQ==