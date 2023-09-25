import gql from "graphql-tag";
export const schema = gql`
  type Contact {
    id: Int!
    name: String!
    email: String!
    message: String!
    createdAt: DateTime!
  }

  type Query {
    contacts: [Contact!]! @requireAuth
    contact(id: Int!): Contact @requireAuth
  }

  input CreateContactInput {
    name: String!
    email: String!
    message: String!
  }

  input UpdateContactInput {
    name: String
    email: String
    message: String
  }

  type Mutation {
    createContact(input: CreateContactInput!): Contact! @requireAuth
    updateContact(id: Int!, input: UpdateContactInput!): Contact! @requireAuth
    deleteContact(id: Int!): Contact! @requireAuth
  }
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJzY2hlbWEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvY29udGFjdHMuc2RsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzY2hlbWEgPSBncWxgXG4gIHR5cGUgQ29udGFjdCB7XG4gICAgaWQ6IEludCFcbiAgICBuYW1lOiBTdHJpbmchXG4gICAgZW1haWw6IFN0cmluZyFcbiAgICBtZXNzYWdlOiBTdHJpbmchXG4gICAgY3JlYXRlZEF0OiBEYXRlVGltZSFcbiAgfVxuXG4gIHR5cGUgUXVlcnkge1xuICAgIGNvbnRhY3RzOiBbQ29udGFjdCFdISBAcmVxdWlyZUF1dGhcbiAgICBjb250YWN0KGlkOiBJbnQhKTogQ29udGFjdCBAcmVxdWlyZUF1dGhcbiAgfVxuXG4gIGlucHV0IENyZWF0ZUNvbnRhY3RJbnB1dCB7XG4gICAgbmFtZTogU3RyaW5nIVxuICAgIGVtYWlsOiBTdHJpbmchXG4gICAgbWVzc2FnZTogU3RyaW5nIVxuICB9XG5cbiAgaW5wdXQgVXBkYXRlQ29udGFjdElucHV0IHtcbiAgICBuYW1lOiBTdHJpbmdcbiAgICBlbWFpbDogU3RyaW5nXG4gICAgbWVzc2FnZTogU3RyaW5nXG4gIH1cblxuICB0eXBlIE11dGF0aW9uIHtcbiAgICBjcmVhdGVDb250YWN0KGlucHV0OiBDcmVhdGVDb250YWN0SW5wdXQhKTogQ29udGFjdCEgQHJlcXVpcmVBdXRoXG4gICAgdXBkYXRlQ29udGFjdChpZDogSW50ISwgaW5wdXQ6IFVwZGF0ZUNvbnRhY3RJbnB1dCEpOiBDb250YWN0ISBAcmVxdWlyZUF1dGhcbiAgICBkZWxldGVDb250YWN0KGlkOiBJbnQhKTogQ29udGFjdCEgQHJlcXVpcmVBdXRoXG4gIH1cbmBcbiJdLCJtYXBwaW5ncyI6Ik9BQXNCQSxHQUFHO0FBQXpCLE9BQU8sTUFBTUMsTUFBTSxHQUFHRCxHQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMifQ==