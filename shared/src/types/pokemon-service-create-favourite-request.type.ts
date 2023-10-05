import { PokemonServiceOpenapi } from "../openapi";
import { PokemonServiceCreateFavouriteMethodType } from "./pokemon-service-create-favourite-method.type";
import { PokemonServiceCreateFavouritePathType } from "./pokemon-service-create-favourite-path.type";

export type PokemonServiceCreateFavouriteRequestType =
  PokemonServiceOpenapi.paths[PokemonServiceCreateFavouritePathType][PokemonServiceCreateFavouriteMethodType]["requestBody"]["content"]["application/json"];
