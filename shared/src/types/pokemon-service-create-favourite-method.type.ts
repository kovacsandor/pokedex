import { PokemonServiceOpenapi } from '../openapi';
import { PokemonServiceCreateFavouritePathType } from './pokemon-service-create-favourite-path.type';

export type PokemonServiceCreateFavouriteMethodType = keyof Pick<
  PokemonServiceOpenapi.paths[PokemonServiceCreateFavouritePathType],
  'post'
>;
