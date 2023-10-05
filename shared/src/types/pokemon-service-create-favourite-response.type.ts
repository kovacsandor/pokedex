import { PokemonServiceOpenapi } from "../openapi";
import { PokemonServiceCreateFavouriteMethodType } from "./pokemon-service-create-favourite-method.type";
import { PokemonServiceCreateFavouritePathType } from "./pokemon-service-create-favourite-path.type";

export type PokemonServiceCreateFavouriteResponseType =
  Responses[keyof Responses]["content"]["application/json"];

type Responses =
  PokemonServiceOpenapi.paths[PokemonServiceCreateFavouritePathType][PokemonServiceCreateFavouriteMethodType]["responses"];
