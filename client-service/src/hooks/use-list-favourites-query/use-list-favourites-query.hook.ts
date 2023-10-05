import createClient from 'openapi-fetch';
import { useQuery } from 'react-query';
import {
  PokemonServiceListFavouritesPathType,
  PokemonServiceListFavouritesResponseType,
  PokemonServiceOpenapi,
} from 'shared';

export const useListFavouritesQuery = () => {
  const path: PokemonServiceListFavouritesPathType = '/api/pokemon-service/favourites';

  const { GET } = createClient<PokemonServiceOpenapi.paths>();

  return useQuery<PokemonServiceListFavouritesResponseType, Error>(path, async () => {
    const fetchResponse = await GET(path, { headers: { authorization: process.env.REACT_APP_JWT_TEMP } });

    if (fetchResponse.data) {
      return fetchResponse.data;
    }

    throw new Error(fetchResponse.error.message);
  });
};
