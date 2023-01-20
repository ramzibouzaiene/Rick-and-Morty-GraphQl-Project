import { useQuery, gql } from "@apollo/client";

const GET_CHARACTER_DETAILS = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      episode {
        name
        episode
      }
    }
  }
`;

export const useCharacter = (id) => {
  const { data, error, loading } = useQuery(GET_CHARACTER_DETAILS, {
    variables: {
      id,
    },
  });

  return {
    data,
    error,
    loading,
  };
};
