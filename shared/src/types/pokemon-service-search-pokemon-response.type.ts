import { PokemonServiceOpenapi } from "../openapi";
import { PokemonServiceSearchPokemonMethodType } from "./pokemon-service-search-pokemon-method.type";
import { PokemonServiceSearchPokemonPathType } from "./pokemon-service-search-pokemon-path.type";

export type PokemonServiceSearchPokemonResponseType =
  Responses[keyof Responses]["content"]["application/json"];

type Responses =
  PokemonServiceOpenapi.paths[PokemonServiceSearchPokemonPathType][PokemonServiceSearchPokemonMethodType]["responses"];
