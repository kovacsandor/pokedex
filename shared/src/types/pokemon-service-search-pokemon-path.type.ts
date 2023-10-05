import { PokemonServiceOpenapi } from "../openapi";

export type PokemonServiceSearchPokemonPathType = keyof Pick<
  PokemonServiceOpenapi.paths,
  "/api/pokemon-service/search-pokemon"
>;
