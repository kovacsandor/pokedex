import { PokemonServiceOpenapi } from "../openapi";
import { PokemonServiceListFavouritesMethodType } from "./pokemon-service-list-favourites-method.type";
import { PokemonServiceListFavouritesPathType } from "./pokemon-service-list-favourites-path.type";

export type PokemonServiceListFavouritesResponseType =
  Responses[keyof Responses]["content"]["application/json"];

type Responses =
  PokemonServiceOpenapi.paths[PokemonServiceListFavouritesPathType][PokemonServiceListFavouritesMethodType]["responses"];
