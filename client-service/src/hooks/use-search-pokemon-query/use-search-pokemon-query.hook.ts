import createClient from 'openapi-fetch';
import { useQuery } from 'react-query';
import {
  PokemonServiceOpenapi,
  PokemonServiceSearchPokemonPathType,
  PokemonServiceSearchPokemonResponseType,
} from 'shared';

export const useSearchPokemonQuery = (name: string) => {
  const path: PokemonServiceSearchPokemonPathType = '/api/pokemon-service/search-pokemon';

  const { GET } = createClient<PokemonServiceOpenapi.paths>({
    headers: { authorization: process.env.REACT_APP_JWT_TEMP },
  });

  return useQuery<PokemonServiceSearchPokemonResponseType, Error>(
    [path, name],
    async () => {
      const fetchResponse = await GET(path, {
        params: {
          query: {
            name,
          },
        },
      });

      if (fetchResponse.data) {
        return fetchResponse.data;
      }

      throw new Error(fetchResponse.error.message);
    },
    {
      enabled: name.length > 2,
    },
  );
};
