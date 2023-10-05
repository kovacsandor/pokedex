import { PokemonServiceOpenapi } from "../openapi";
import { PokemonServiceSearchPokemonPathType } from "./pokemon-service-search-pokemon-path.type";

export type PokemonServiceSearchPokemonMethodType = keyof Pick<
  PokemonServiceOpenapi.paths[PokemonServiceSearchPokemonPathType],
  "get"
>;
