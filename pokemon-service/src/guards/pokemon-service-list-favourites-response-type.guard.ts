import { PokemonServiceListFavouritesResponseType } from 'shared';

export const PokemonServiceListFavouritesResponseTypeGuard = (
  value: unknown,
): value is PokemonServiceListFavouritesResponseType => typeof value === 'object';
