import { PokemonServiceCreateFavouriteResponseType } from 'shared';

export const PokemonServiceCreateFavouriteResponseTypeGuard = (
  value: unknown,
): value is PokemonServiceCreateFavouriteResponseType => typeof value === 'object';
