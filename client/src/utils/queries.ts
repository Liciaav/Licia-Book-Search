import { gql } from '@apollo/client';

// Query to get all profiles
export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      skills
    }
  }
`;

// Query to get a single profile by ID
export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      skills
    }
  }
`;

// Query to get the currently logged-in user's profile
export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      skills
    }
  }
`;

// Query to get saved books of the currently logged-in user
export const QUERY_SAVED_BOOKS = gql`
  query savedBooks {
    me {
      savedBooks {
        bookId
        title
        authors
        description
        image
        link
      }
    }
  }
`;
