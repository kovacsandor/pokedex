import createClient from 'openapi-fetch';
import { useMutation } from 'react-query';
import {
  PokemonServiceCreateFavouriteResponseType,
  PokemonServiceOpenapi,
  PokemonServiceSearchPokemonResultType,
} from 'shared';

export const useCreateFavouriteMutation = () => {
  const { POST } = createClient<PokemonServiceOpenapi.paths>({
    headers: { authorization: process.env.REACT_APP_JWT_TEMP },
  });

  return useMutation<PokemonServiceCreateFavouriteResponseType, Error, PokemonServiceSearchPokemonResultType>(
    async (pokemon) => {
      const fetchResponse = await POST('/api/pokemon-service/favourites', {
        body: pokemon,
      });

      if (fetchResponse.data) {
        return fetchResponse.data;
      }

      throw new Error(fetchResponse.error.message);
    },
  );
};
