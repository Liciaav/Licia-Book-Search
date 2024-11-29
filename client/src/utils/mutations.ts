import { gql } from '@apollo/client';

// Mutation to add a new profile
export const ADD_PROFILE = gql`
  mutation addProfile($input: ProfileInput!) {
    addProfile(input: $input) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

// Mutation to add a new skill to a profile
export const ADD_SKILL = gql`
  mutation addSkill($profileId: ID!, $skill: String!) {
    addSkill(profileId: $profileId, skill: $skill) {
      _id
      name
      skills
    }
  }
`;

// Mutation for user login
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

// Mutation to remove a skill from a profile
export const REMOVE_SKILL = gql`
  mutation removeSkill($skill: String!) {
    removeSkill(skill: $skill) {
      _id
      name
      skills
    }
  }
`;

// Mutation for saving a book to the user
export const SAVE_BOOK = gql`
  mutation saveBook($input: SaveBookInput!) {
    saveBook(input: $input) {
      _id
      username
      savedBooks {
        bookId
        title
        authors
      }
    }
  }
`;

// Mutation for removing a book from the user
export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      _id
      username
      savedBooks {
        bookId
        title
        authors
      }
    }
  }
`;
