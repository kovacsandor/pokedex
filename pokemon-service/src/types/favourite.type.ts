import { PokemonServiceOpenapi } from 'shared';

export type FavouriteType = {
  readonly pokemon: PokemonServiceOpenapi.components['schemas']['PokemonServiceSearchPokemonResult'];
  readonly userId: string;
};
