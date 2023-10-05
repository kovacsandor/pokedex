import { PokemonServiceOpenapi } from '../openapi';
import { PokemonServiceSearchPokemonMethodType } from './pokemon-service-search-pokemon-method.type';
import { PokemonServiceSearchPokemonPathType } from './pokemon-service-search-pokemon-path.type';

export type PokemonServiceSearchPokemonQueryParamsType =
  PokemonServiceOpenapi.paths[PokemonServiceSearchPokemonPathType][PokemonServiceSearchPokemonMethodType]['parameters']['query'];
